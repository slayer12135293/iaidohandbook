import React from 'react'
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native'
import i18n from '../../i18n/index'
import { BlockText, KamaeBox } from '../../components'
import Color from '../../util/color'

const tab1 = () => {
    
    return (
        
        <ScrollView style={styles.container}>                   
            <Text style={styles.text}>{'Muso Shinden-ryū (夢想神伝流) är en japansk koryu med huvudfokus på iaidō.\nSkolan Muso Shinden-ryū grundades 1933[1] av Nakayama Hakudo (1869 - 1958). Skolan är en variant av Hasegawa Eishin-ryu och bygger på Hakudo-senseis studier av de båda grenarna Tanimura-ha under Morimoto Tokumi och Shinmomura-ha under Hosokawa Yoshimasa.'}</Text>                                     
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },    
    text:{
        fontSize:16,
    },
})

export default tab1
