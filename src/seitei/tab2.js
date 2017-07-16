import React, { Component } from 'react'
import { ScrollView, View, Text, StyleSheet, Image, FlatList } from 'react-native'
import i18n from '../i18n/index'
import { BlockText, KamaeBox, Touchable } from '../components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { pop, push } from '../app/navigation-reducer'
import { Screens } from '../app/navigation'
import Color from '../util/color'
import TestVideo1 from '../assets/videos/Sanbonme.mp4'

class Tab2 extends Component  {   
    render(){
        const { push } = this.props
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

        const kataItem ={
            title:'Mae',
            text:'asdfasdfasdfasdf',
            video: TestVideo1,

        }
        return (
            <ScrollView style={styles.container}>     
 
                <Touchable onPress={()=> push(Screens.seiteiKata, { kataItem })}>
                    <Text>{'next card'}</Text>
                </Touchable>
             
                <FlatList 
                    data={seiteiKatas}
                    renderItem={({ item })=>(<KamaeBox item = {item} />)}
                />  
            </ScrollView>
        )

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },  
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },  
})

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        push,
    },dispatch)
}

export default connect(null, mapDispatchToProps)(Tab2)
