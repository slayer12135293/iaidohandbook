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
    label:{
        fontSize: 20,
        fontWeight: 'bold',
    },
    kenji:{
        fontSize:20,        
    },
    imgBox: {
        alignItems: 'flex-end', 
        marginTop: -50,
    },
    img:{
        width: 150,
        height:300,
    },

})

export default tab2
