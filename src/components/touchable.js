import React from 'react'
import PropTypes from 'prop-types'
import { Platform, TouchableHighlight, TouchableNativeFeedback, View } from 'react-native'
import Color from '../util/color'
const Touchable = ({ children, style, androidBackground, androidRippleColor, ...other }) => {

    let Touchable  = TouchableHighlight
    let background = null

    if (Platform.OS === 'android') {
        Touchable = TouchableHighlight
        switch (androidBackground) {
            case 'ripple':
                background = TouchableNativeFeedback.Ripple(androidRippleColor)
                break
            case 'selectable':
                background = TouchableNativeFeedback.SelectableBackground()
                break
            case 'selectableBorderless':
                background = TouchableNativeFeedback.SelectableBackgroundBorderless()
        }
    }

    return (
        <Touchable
            useForeground={true}
            background={background}
            //underlayColor={'rgba(255,255,255, 1)'}    
            underlayColor = {Color.globalbg}        
            activeOpacity={0.5}
            style={style}
            {...other}
        >
            {children}
        </Touchable>
    )
}

Touchable.propTypes = {
    onPress: PropTypes.func,
    style: PropTypes.any,
    androidBackground: PropTypes.oneOf([ 'ripple', 'selectable', 'selectableBorderless' ]),
    disabled: PropTypes.any,
    androidRippleColor: PropTypes.string,
}

Touchable.defaultProps = {
    onPress: () => {},
    androidBackground: 'ripple',
    androidRippleColor: 'white',
    children: <View/>,
}

export default Touchable
