import React from 'react'
import { ScrollView, View, Text, StyleSheet, FlatList,Dimensions,TouchableHighlight  } from 'react-native'
import i18n from '../../i18n/index'
import { KamaeBox,Touchable } from '../../components'
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
                        label: 'Utō',
                        kenji: '右刀',        
                    },
                    {
                        id:4,
                        label: 'Ataritō',
                        kenji: '当刀',        
                    },
                    {
                        id:5,
                        label: 'In\'yō Shintai',
                        kenji: '陰陽進退',        
                    },
                    {
                        id:6,
                        label: 'Ryūtō',
                        kenji: '流刀',        
                    },
                    {
                        id:7,
                        label: 'Juntō',
                        kenji: '順刀',        
                    },
                    {
                        id:8,
                        label: 'Gyakutō',
                        kenji: '逆刀',        
                    },
                    {
                        id:9,
                        label: 'Seichūtō',
                        kenji: '勢中刀',        
                    },
                    {
                        id:10,
                        label: 'Korantō',
                        kenji: '虎乱刀',        
                    },
                    {
                        id:11,
                        label: 'In\'yō Shintai Kaewaza',
                        kenji: '陰陽進退替業',        
                    },
                    {
                        id:12,
                        label: 'Battō',
                        kenji: '抜刀',        
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
                        label: 'Yokogumo',
                        kenji: '横雲',        
                    },
                    {
                        id:2,
                        label: 'Toraissoku',
                        kenji: '虎一足',        
                    },
                    {
                        id:3,
                        label: 'Inazuma',
                        kenji: '稲妻',        
                    },
                    {
                        id:4,
                        label: 'Ukigumo',
                        kenji: '浮雲',        
                    },
                    {
                        id:5,
                        label: 'Yamaoroshi',
                        kenji: '山颪',        
                    },
                    {
                        id:6,
                        label: 'Iwanami',
                        kenji: '岩浪',        
                    },
                    {
                        id:7,
                        label: 'Urokogaeshi',
                        kenji: '鱗返',        
                    },
                    {
                        id:8,
                        label: 'Namigaeshi',
                        kenji: '浪返',        
                    },
                    {
                        id:9,
                        label: 'Takiotoshi',
                        kenji: '滝落',        
                    },
                    {
                        id:10,
                        label: 'Nukiuchi',
                        kenji: '抜打',        
                    },
                ],
            },            
        },
        {
            id:'3',
            type:'standard',
            content:{
                header:'Okuden (奥伝) - Suwari-waza (座業)',
                items:[
                    {
                        id:1,
                        label: 'Kasumi',
                        kenji: '霞',        
                    },
                    {
                        id:2,
                        label: 'Sunegakoi',
                        kenji: '脛囲',        
                    },
                    {
                        id:3,
                        label: 'Shihogiri',
                        kenji: '四方切',        
                    },
                    {
                        id:4,
                        label: 'Tozume',
                        kenji: '戸詰',        
                    },
                    {
                        id:5,
                        label: 'Towaki',
                        kenji: '戸脇',        
                    },
                    {
                        id:6,
                        label: 'Iwanami',
                        kenji: '岩浪',        
                    },
                    {
                        id:7,
                        label: 'Ryozume',
                        kenji: '両詰',        
                    },
                    {
                        id:8,
                        label: 'Torabashiiri',
                        kenji: '虎走',        
                    },
                    {
                        id:9,
                        label: 'Itomagoi',
                        kenji: '暇乞',        
                    },
                ],
            },            
        },
        {
            id:'4',
            type:'standard',
            content:{
                header:'Okuden (奥伝) - Tachi-waza (立業)',
                items:[
                    {
                        id:1,
                        label: 'Yukitsure',
                        kenji: '行連',        
                    },
                    {
                        id:2,
                        label: 'Rentatsu',
                        kenji: '連達',        
                    },
                    {
                        id:3,
                        label: 'Somakuri',
                        kenji: '惣捲',        
                    },
                    {
                        id:4,
                        label: 'Sodome',
                        kenji: '総留',        
                    },
                    {
                        id:5,
                        label: 'Shinobu',
                        kenji: '信夫',        
                    },
                    {
                        id:6,
                        label: 'Yukichigai',
                        kenji: '行違',        
                    },
                    {
                        id:7,
                        label: 'Sodesurigaeshi',
                        kenji: '袖摺返',        
                    },
                    {
                        id:8,
                        label: 'Moniri',
                        kenji: '門入',        
                    },
                    {
                        id:9,
                        label: 'Kabezoi',
                        kenji: '壁添',        
                    },
                    {
                        id:10,
                        label: 'Ukenagashi',
                        kenji: '受流',        
                    },
                    {
                        id:11,
                        label: 'Oikakegiri',
                        kenji: '追掛斬',        
                    },
                    {
                        id:12,
                        label: 'Youshihikitsure',
                        kenji: '両士引連',        
                    },
                ],
            },            
        },

    ]

    return (
        <View style={styles.bodyContainer}>   
            <ScrollView horizontal={true} style={{ flexDirection: 'row', marginBottom:5 }}>
                <Touchable  style={styles.topLink} onPress={()=>{this.leiList.scrollToIndex({ index:0 })}} > 
                    <Text style={styles.buttonText}>{'Shoden'}</Text> 
                </Touchable >
                <Touchable style={styles.topLink} onPress={()=>{this.leiList.scrollToIndex({ index:1 })}} >
                    <Text style={styles.buttonText}>{'Chūden'}</Text> 
                </Touchable>
                <Touchable style={styles.topLink} onPress={()=>{this.leiList.scrollToIndex({ index:2 })}} >
                    <Text style={styles.buttonText}>{'Okuden Suwari-waza'}</Text> 
                </Touchable>
                <Touchable style={styles.topLink} onPress={()=>{this.leiList.scrollToIndex({ index:3 })}} >
                    <Text style={styles.buttonText}>{'Okuden Tachi-waza '}</Text> 
                </Touchable> 
                
            </ScrollView>

            <FlatList
                ref={(ref) => { this.leiList = ref }}
                keyExtractor={x => x.id}
                data={dataSource}
                renderItem={({ item })=> {
                    switch(item.type){
                        case 'standard':
                            return StandardRow(item)
                    }
                } }
                horizontal={true}
                getItemLayout ={(data, index) => ({ length: screenWidth, offset: screenWidth * index, index })}            
            />            
            
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
    bodyContainer:{
        flex: 1,
        padding:5,
        alignItems: 'center',
    },
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
    topLink:{
        marginRight:10,        
        backgroundColor: Color.blue1,
        paddingLeft:15,
        paddingRight:15,
        paddingTop:5,
        paddingBottom:5,
    },
    buttonText :{
        textAlign: 'center',
        fontSize: 15,
        color:Color.white,
    },
})

export default tab2
