// const LOCAL_URL = 'http://localhost'
const REMOTE_URL = 'https://mynumbers-dev.azurewebsites.net/api'
const BASE_URL = REMOTE_URL
let idToken

const Api = {

    /**
     * Available endpoints
     */
    ENDPOINTS: {
        login: '/authentication/user/token',
        aggregates: (type, fromDate, toDate) => `/account/aggregates/42b6c1f3-dc79-4833-bd2e-e9923b74d4e7/${fromDate}/${toDate}/${type}`,

        bar: barId => `/bar/${barId}`,
    },

    /**
     * @param path should be one of {@link Api.ENDPOINTS}
     * @returns {Promise<Response>}
     */
    async get(path) {
        return _request(path)
    },

    /**
     * @param path should be one of {@link Api.ENDPOINTS}
     * @param payload
     * @returns {Promise<Response>}
     */
    async post(path, payload) {
        return _request(path, 'POST', payload)
    },

    async login() {
        try {
            const response = await Api.post(Api.ENDPOINTS.login, {
                username: 'fortnoxauto@fortnox.test',
                password: 'qwertyui',
                device: 'mobile',
                scope: 'openid offline_access cid roles user_id WelcomeTourDone GoalCreateTourDone',
            })

            idToken = response.idtoken

        } catch (e) {
            console.warn(e)
        }
    },
}

const _request = async (path, method = 'GET', payload) => {
    const requestParams = {
        method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${idToken}`,
        },
    }

    if (method === 'POST') {
        requestParams.body = JSON.stringify(payload)
    }

    const url = `${BASE_URL}${path}`

    console.log(
        `%c${method} %c${url}%c with payload: `,
        'color: #c242f4',
        'color: blue',
        'color:black',
        payload,
        ' and headers',
        requestParams.headers,
    )

    const response = await fetch(url, requestParams)
    let body = await response.json()

    if (response.ok) {
        return body
    }

    throw body
}

export default Api

