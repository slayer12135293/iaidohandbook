import React from 'react'
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native'
import i18n from '../../i18n/index'
import { BlockText, KamaeBox } from '../../components'
import Color from '../../util/color'
import ScrollableTabView from 'react-native-scrollable-tab-view'

const tab2 = () => {
    const item1 = {
        label: 'Shohattō',
        kenji: '初発刀',        
    }
    const item2 = {
        label: 'Satō',
        kenji: '左刀',        
    }
    return (
        <View style={styles.container}>   
            <ScrollableTabView >
                <View tabLabel='Shoden (初伝)'>
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
                </View>
                <View tabLabel='Chūden (中伝)'>
                    <Text>{'asdfasdfasdfasda asdfasdf'}</Text> 
                </View>
                <View tabLabel='Okuden (奥伝)'>
                    <Text>{'asdfasdfasdfasdf'}</Text>
                </View>
                
            </ScrollableTabView>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },    
})

export default tab2
