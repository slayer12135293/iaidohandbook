import React from 'react'
import { ScrollView, View, Text, StyleSheet, Image, FlatList,Dimensions } from 'react-native'
import i18n from '../../i18n/index'
import { BlockText, KamaeBox } from '../../components'
import Color from '../../util/color'
import ScrollableTabView from 'react-native-scrollable-tab-view'

const { width: screenWidth } = Dimensions.get('window')

const tab2 = () => {

    const dataSource = [
        {
            id:'1',
            type:'standard',
            content:{
                header:'Shoden (初伝)',
                items:[
                    {
                        id:1,
                        label: 'Shohattō',
                        kenji: '初発刀',        
                    },
                    {
                        id:2,
                        label: 'Satō',
                        kenji: '左刀',        
                    },
                    {
                        id:3,
                        label: 'Satō',
                        kenji: '左刀',        
                    },
                    {
                        id:4,
                        label: 'Satō',
                        kenji: '左刀',        
                    },
                    {
                        id:5,
                        label: 'Satō',
                        kenji: '左刀',        
                    },
                    {
                        id:6,
                        label: 'Satō',
                        kenji: '左刀',        
                    },
                    {
                        id:7,
                        label: 'Satō',
                        kenji: '左刀',        
                    },
                    {
                        id:8,
                        label: 'Satō',
                        kenji: '左刀',        
                    },
                    {
                        id:9,
                        label: 'Satō',
                        kenji: '左刀',        
                    },
                    {
                        id:10,
                        label: 'Satō',
                        kenji: '左刀',        
                    },
                    {
                        id:11,
                        label: 'Satō',
                        kenji: '左刀',        
                    },
                ],
            },            
        },
        {
            id:'2',
            type:'standard',
            content:{
                header:'Chūden (中伝)',
                items:[
                    {
                        id:1,
                        label: 'Shohattō',
                        kenji: '初発刀',        
                    },
                    {
                        id:2,
                        label: 'Satō',
                        kenji: '左刀',        
                    },
                ],
            },            
        },

    ]

    return (
        <View style={styles.container}>   
            <FlatList
                keyExtractor={x => x.id}
                data={dataSource}
                renderItem={({ item })=> {
                    switch(item.type){
                        case 'standard':
                            return StandardRow(item)
                    }
                } }
                horizontal={true}
            
            />  



            {/*<ScrollableTabView prerenderingSiblingsNumber ={Infinity} >
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
                
            </ScrollableTabView>*/}
            
        </View>
    )
}

const StandardRow = (item) =>{
    return(
        <ScrollView style={styles.container}>
            <Text style={styles.kataHeader}>{item.content.header}</Text>
            <View>
                <FlatList 
                    keyExtractor={x => x.id}
                    data={item.content.items}
                    renderItem={({ item: kata }) =>
                        <KamaeBox item = {kata} />  
                    }
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: screenWidth,
        padding:5,
    },    
    kataHeader:{
        fontSize:20,
        fontWeight:'bold',
        textAlign: 'center',
    },
})

export default tab2
