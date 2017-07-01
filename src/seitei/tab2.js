import React from 'react'
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native'
import i18n from '../i18n/index'
import { BlockText, KamaeBox } from '../components'
import Color from '../util/color'

const tab2 = () => {
    const ipponme = {
        label: 'Ippon me: Mae',
        kenji: '一本目：「前」',        
    }
    const nihonme = {
        label: 'Nipon me: Ushiro',
        kenji: '二本目：「後ろ」',        
    }
    return (
        <ScrollView style={styles.container}>          
            
            <KamaeBox item = {ipponme} />    
            <KamaeBox item = {nihonme} />    
            <KamaeBox item = {ipponme} />    
            <KamaeBox item = {ipponme} />    
            <KamaeBox item = {nihonme} />    
            <KamaeBox item = {ipponme} />  
            <KamaeBox item = {ipponme} />    
            <KamaeBox item = {nihonme} />    
            <KamaeBox item = {ipponme} />              
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },    
})

export default tab2
