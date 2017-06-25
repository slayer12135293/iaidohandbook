import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Touchable } from '../components'
import { push, pop } from './navigation-reducer'
import { Screens } from './navigation'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const Type = ({ push, pop }) => {
    return (
        <View >
            <Text> {'Type Screen / Mita kolu tervo vito'} </Text>
            <Touchable onPress={() => push(Screens.valueSelection)} >
                <Text>
                    {'click me'}
                </Text>
            </Touchable>
        </View>
    )
}

const styles = StyleSheet.create({

})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        pop,
        push,
    }, dispatch)
}

export default  connect(null, mapDispatchToProps)(Type)  
