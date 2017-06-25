import accounting from 'accounting'

accounting.settings = {
    currency: {
        symbol: '\'', // default currency symbol is '$'
        format: '%v%s', // controls output: %s = symbol, %v = value
        decimal: ',', // decimal point separator
        thousand: ' ', // thousands separator
        precision: 0, // decimal places
    },
    number: {
        precision: 0,
        thousand: ' ',
        decimal: ',',
    },
}

const _accounting = {
    formatMoney(amount) {
        return accounting.formatMoney(amount / 1000)
    },
}

export default _accounting
