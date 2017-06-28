import React from 'react'
import { StyleSheet, TouchableHighlight, View } from 'react-native'
import { Text } from '../components'
import PropTypes from 'prop-types'
import Color from '../util/color'

const BottomTab = ({ items }) => {
    return (
        <View style={styles.container}>
            {items.map(tab => (
                <TouchableHighlight
                    key={tab.key}
                    onPress={tab.press}
                    style={styles.touchableArea}
                >
                    <View>  
                        <Text style={styles.label}>
                            {tab.text}
                        </Text>
                        <Text style={styles.underLabel}>  
                            {tab.kenji}
                        </Text>
                    </View>
                </TouchableHighlight>
            ))}
        </View>
    )
}

BottomTab.propTypes ={
    items: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string,
        text: PropTypes.string,
        kenji: PropTypes.string,
        press: PropTypes.func,
    })),
}
const styles = StyleSheet.create({  
    touchableArea: {
        flex: 1, 
        height: 50, 
        justifyContent: 'center',         
        borderLeftColor:Color.white, 
        borderLeftWidth:2,
    },  
    container: {
        height: 50,
        backgroundColor: Color.globalbottomtab,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRightColor:Color.white, 
        borderRightWidth:2,
    },
    label: {
        fontSize: 18,
        color: 'white',
        fontWeight: '400',
        textAlign: 'center',
    },
    underLabel: {
        fontSize:12,
        color: Color.textBlack,
        textAlign: 'center',
        textShadowColor: Color.whiteShadow,
        textShadowOffset: { width: 1, height: 1 },
    },
})

export default BottomTab
