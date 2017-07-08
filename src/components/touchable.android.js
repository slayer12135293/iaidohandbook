import React from 'react'
import PropTypes from 'prop-types'
import { TouchableHighlight, TouchableNativeFeedback, View } from 'react-native'

const Touchable = ({ children, style, background, rippleColor, useNativeTouchable, borderless, ...other }) => {

    if (useNativeTouchable) {
        let _background = null
        switch (background) {
            case 'ripple':
                _background = TouchableNativeFeedback.Ripple(rippleColor, borderless)
                break
            case 'borderless':
                _background = TouchableNativeFeedback.SelectableBackgroundBorderless()
                break
            default:
                _background = TouchableNativeFeedback.SelectableBackground()
        }

        return (
            <TouchableNativeFeedback
                background={_background}
                {...other}
            >
                <View style={style}>
                    {children}
                </View>
            </TouchableNativeFeedback>
        )
    }

    return (
        <TouchableHighlight
            style={style}
            underlayColor={'rgba(255,255,255, 0.5)'}
            activeOpacity={0.5}
            {...other}
        >
            {children}
        </TouchableHighlight>
    )
}

Touchable.propTypes = {
    onPress: PropTypes.func,
    style: PropTypes.any,
    background: PropTypes.oneOf([ 'ripple', 'borderless' ]),
    disabled: PropTypes.any,
    rippleColor: PropTypes.string,
    borderless: PropTypes.bool,
    useNativeTouchable: PropTypes.bool,
}

Touchable.defaultProps = {
    onPress: () => {},
    rippleColor: 'white',
    children: <View/>,
    useNativeTouchable: true,
}

export default Touchable
