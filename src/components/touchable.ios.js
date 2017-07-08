import React from 'react'
import PropTypes from 'prop-types'
import { TouchableHighlight, View } from 'react-native'

const Touchable = ({ children, style, ...other }) => {

    return (
        <TouchableHighlight
            underlayColor={'rgba(255,255,255, 0.5)'}
            activeOpacity={0.5}
            style={style}
            {...other}
        >
            {children}
        </TouchableHighlight>
    )
}

Touchable.propTypes = {
    onPress: PropTypes.func,
    style: PropTypes.any,
    disabled: PropTypes.any,
}

Touchable.defaultProps = {
    onPress: () => {},
    children: <View/>,
}

export default Touchable
