import React from 'react'
import { ScrollView, View, Text, StyleSheet, Image, FlatList } from 'react-native'
import i18n from '../i18n/index'
import { BlockText, KamaeBox } from '../components'
import Color from '../util/color'

const tab2 = () => {   
    const seiteiKatas = [
        {
            label: 'Ippon me: Mae',
            kenji: '一本目：「前」',        
        },
        {
            label: 'Nipon me: Ushiro',
            kenji: '二本目：「後ろ」',        
        },
        {
            label: 'Sanbon me: Ukenagashi',
            kenji: '三本目：「受け流し」',        
        },
        {
            label: 'Yonhon me: Tsuka-ate',
            kenji: '四本目：「柄当て」',        
        },
        {
            label: 'Gohon me: Kesagiri',
            kenji: '五本目：「袈裟切り」',        
        },
        {
            label: 'Roppon me: Morote-zuki',
            kenji: '六本目：「諸手突き」',        
        },
        {
            label: 'Nanahon me: Sanpōgiri',
            kenji: '七本目：「三方切り」',        
        },
        {
            label: 'Hachihon me: Ganmen-ate',
            kenji: '八本目：「顔面当て」',        
        },      
        {
            label: 'Kyuhon me: Soete-zuki',
            kenji: '九本目：「添え手突き」',        
        },
     
        {
            label: 'Juppon me: Shihōgiri',
            kenji: '十本目：「四方切り」',        
        },
        {
            label: 'Ju Ippon me: Sōgiri',
            kenji: '十一本目：「総切り」',        
        },
        {
            label: 'Ju Nihon me: Nukiuchi',
            kenji: '十二本目：「抜き打ち」',        
        },
    ]

    return (
        <ScrollView style={styles.container}>          
             
            <FlatList 
                data={seiteiKatas}
                renderItem={({ item })=>(<KamaeBox item = {item} />)}
            />  
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },    
})

export default tab2
