import * as dateFns from 'date-fns'
import enLocale from 'date-fns/locale/en'
import svLocale from 'date-fns/locale/sv'
// import DeviceInfo from 'react-native-device-info'

// const deviceLocale = DeviceInfo.getDeviceLocale()

const dateUtil = {
    formatToLocale(date, format = 'MMM YYYY', locale = 'sv') {
        let _locale
        const lang = locale.substr(0, 2)
        switch(lang) {
            case 'sv':
                _locale = svLocale
                break
            default:
                _locale = enLocale
        }

        return dateFns.format(date, format, { locale: _locale })
    },

    arePeriodsInInterval(periods, from, to) {
        return periods.some( period => dateFns.isSameMonth(period.period, from)) 
            && periods.some( period => dateFns.isSameMonth(period.period, to))
    },
}

export default dateUtil

