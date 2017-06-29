import React from 'react'
import { ScrollView, View, Text,Image, StyleSheet,Dimensions } from 'react-native'
import i18n from '../i18n/index'
import { BlockText } from '../components'
import Img  from '../assets/overview/intro.png'

const tab1 = () => {
    return (
        <ScrollView style={styles.container}>  
            <View style={styles.wrapper}>
                <Image
                    style={styles.img}
                    source={Img}
                />
                <BlockText text= {i18n.t('overview.intro.text1')} />
            </View>
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    img:{
        //width: Dimensions.get('window').width,
        // position: 'absolute',
        // top: 0,
        // left: 0,
        // bottom: 0,
        // right: 0,
        
    },
    
})

export default tab1
