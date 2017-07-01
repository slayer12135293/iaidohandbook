import React from 'react'
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native'
import i18n from '../../i18n/index'
import { BlockText, KamaeBox } from '../../components'
import Color from '../../util/color'

const tab1 = () => {
    const item1 = {
        label: 'Shohattō',
        kenji: '初発刀',        
    }
    const item2 = {
        label: 'Satō',
        kenji: '左刀',        
    }
    return (
        <ScrollView style={styles.container}>          
            
            <KamaeBox item = {item1} />    
            <KamaeBox item = {item2} />     
            <KamaeBox item = {item1} />    
            <KamaeBox item = {item2} />        
            <KamaeBox item = {item1} />    
            <KamaeBox item = {item2} />        
            <KamaeBox item = {item1} />    
            <KamaeBox item = {item2} />        
            <KamaeBox item = {item1} />    
            <KamaeBox item = {item2} />                  
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },    
})

export default tab1
