import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Touchable } from '../components'
import { pop } from '../app/navigation-reducer'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const Confirmation = ({ pop }) => {
    return (
        <View >
            <Text> {'Confirmation Screen / Mita kolu terve koosi'} </Text>
            <Touchable onPress={() => pop()} >
                <Text>
                    {'pop me'}
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
    }, dispatch)
}

export default  connect(null, mapDispatchToProps)(Confirmation)  
