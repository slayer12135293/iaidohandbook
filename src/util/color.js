import colorjs from 'color-js'
const Color = {
    primary: '#590B9D',
    secondary: '#22B6B0',
    background: '#F5F5F5',
    grey: '#9B9B9B',
    grey2: '#E8E6E6',
    grey3: '#4A4A4A',
    black: '#000',
    white: '#fff',
    whiteShadow: '#DEDEDE',
    textBlack: '#1E1E1E',
    globalbg: '#7f8c8d',
    globalheader: '#95a5a6',
    globalbottomtab:'#bdc3c7',
    blue1:'#2980b9',

    lightenByRatio(color, ratio = 0.1) {
        return colorjs(color).lightenByRatio(ratio).toCSS()
    },

    darkenByRatio(color, ratio = 0.1) {
        return colorjs(color).darkenByRatio(ratio).toCSS()
    },

    hexToRgba(hex, opacity = 1) {
        // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
        const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
        hex = hex.replace(shorthandRegex, function (m, r, g, b) {
            return r + r + g + g + b + b
        })

        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
        return result ?
            `rgba(${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)}, ${opacity})`
            : null
    },
}

export default Color
