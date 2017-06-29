import React from 'react'
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native'
import i18n from '../i18n/index'
import { BlockText, KamaeBox } from '../components'
import Color from '../util/color'
import ImgJodan from '../assets/kamae/jodan.png'

const tab2 = () => {
    const jodan = {
        label: 'Jōdan-no-kamae',
        kenji: '上段の構え',
        img:ImgJodan,
    }
    const chudan = {
        label: 'Chūdan-no-kamae',
        kenji: '中段の構え',
        img:ImgJodan,
    }
    return (
        <ScrollView style={styles.container}>            
            <BlockText text= {i18n.t('overview.kamae.text1')} />
            
            <KamaeBox item = {jodan} />   
            <KamaeBox item = {chudan} />   
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },    
})

export default tab2
