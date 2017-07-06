import React from 'react'
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native'
import i18n from '../i18n/index'
import { BlockText, KamaeBox } from '../components'
import Color from '../util/color'

const tab3 = () => {
    
    return (
        <ScrollView style={styles.container}>          
            
            <Text>{'text text text'}</Text>         
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },    
})

export default tab3
