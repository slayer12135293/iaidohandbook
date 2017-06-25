import React from 'react'
import { StyleSheet, TouchableHighlight, View } from 'react-native'
import { Text } from './index'
import Icon from 'react-native-vector-icons/MaterialIcons'
import PropTypes from 'prop-types'

const Header = ({ style, title, leftIcon, leftIconPress, rightIcon, rightIconPress, iconStyle, titleStyle }) => {
    return (
        <View style={[ styles.container, style ]}>
            <TouchableHighlight
                style={styles.button}
                onPress={leftIconPress}
            >
                <Icon name={leftIcon} style={[ styles.icon, iconStyle ]}/>
            </TouchableHighlight>
            <Text style={[ styles.title, titleStyle ]}>
                {title}
            </Text>
            <TouchableHighlight
                style={styles.button}
                onPress={rightIconPress}
            >
                {rightIcon ? <Icon name={rightIcon} style={[ styles.icon, iconStyle ]}/> : <View/>}
            </TouchableHighlight>
        </View>
    )
}

Header.propTypes = {
    style: PropTypes.any,
    leftIcon: PropTypes.string,
    leftIconPress: PropTypes.func,
    rightIcon: PropTypes.string,
    rightIconPress: PropTypes.string,
    iconStyle: PropTypes.any,
    title: PropTypes.node,
    titleStyle: PropTypes.any,
}

Header.defaultProps = {
    leftIcon: 'arrow-back',
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    button: {
        height: 60,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        fontSize: 30,
    },
    title: {
        fontSize: 24,
        color: 'white',
    },
})

export default Header
