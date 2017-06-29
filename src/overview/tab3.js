import React from 'react'
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native'
import i18n from '../i18n/index'
import { BlockText, KamaeBox } from '../components'
import Color from '../util/color'
import OkuriAshi from '../assets/overview/ashi/okuriashi.png'
import AyumiAshi from '../assets/overview/ashi/ayumiashi.png'

const tab3 = () => {
    const okuriAshi = {
        label: 'Okuri-ashi',
        kenji: '送り足',
        img:OkuriAshi,
        imgStyle: styles.okuriAshiImgStyle,
        bodyText: '最も大切な足の運びです。\n移動する方向に近い足から移動し、遠い方の足を素早くひきつけます。\n移動したあとは、常に同じ形にすることで、攻撃や防御を素早く行うことができます。',
    }
    const ayumiAshi = {
        label: 'Ayumi-ashi',
        kenji: '歩み足',
        img:AyumiAshi,
        imgStyle: styles.okuriAshiImgStyle,
        bodyText: '',
    }
    
    return (
        <ScrollView style={styles.container}>                        
            <KamaeBox item = {okuriAshi} />   
            <KamaeBox item = {ayumiAshi} />   

            {/*<View style={styles.boxContainer}>
                <View>
                    <Text style={styles.label}>{'Jōdan-no-kamae'}</Text>
                    <Text style={styles.kenji}>{'上段の構え'}</Text>                
                </View>
                <View style={styles.imgBox}>
                    <Image
                        style={styles.img}
                        source={ImgJodan}
                    />
                </View>
            </View>      */}
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    boxContainer: {
        marginHorizontal: 10,
        marginVertical: 8,
        borderRadius: 5,
        padding: 10,
        backgroundColor: Color.White,
        shadowColor: Color.black,
        shadowOpacity: 0.2,
        shadowOffset: {
            height: 1,
            width: 1,
        },
        elevation: 2,
    },    
    okuriAshiImgStyle:{
        width: 150,
        height:340,
    },

})

export default tab3
