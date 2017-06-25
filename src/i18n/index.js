import sv from './sv.json'
import en from './en.json'
// import DeviceInfo from 'react-native-device-info'
import Util from '../util/index'

const getTranslationsForLocale = locale => {
    const lang = locale.substr(0, 2)
    switch (lang) {
        case 'sv':
            return sv
        case 'en':
            return en
        default:
            return en
    }
}

// const locale     = DeviceInfo.getDeviceLocale()
let translations = getTranslationsForLocale('sv')

const i18n = {
    t: (key, arg, options = {}) => {
        try {
            const parts = key.split('.')

            let string = translations[ parts[ 0 ] ]
            for (let i = 1; i < parts.length; i++) {
                string = string[ parts[ i ] ]
            }

            if (string && arg && Object.keys(arg).length > 0) {
                Object.entries(arg).forEach(([ key, value ]) => {
                    string = string.replace(`{{${key}}}`, value)
                })
            }

            if (!string) {
                throw `No translation found for "${key}"`
            }

            if (options.capitalize) {
                string = Util.capitalize(string)
            }

            return string
        } catch (error) {
            console.warn(error)
            return key
        }
    },
}

export const setLanguage = locale => {
    translations = getTranslationsForLocale(locale)
}

export default i18n

