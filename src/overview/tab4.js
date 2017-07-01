import React from 'react'
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native'
import i18n from '../i18n/index'
import { BlockText, KamaeBox } from '../components'
import Color from '../util/color'
import katana from '../assets/overview/katana.png'

const tab4 = () => {
    
    return (

        <ScrollView contentContainerStyle={{ height: 720 }}>
            <ScrollView horizontal>
                <Image
                    source={katana}
                />
            </ScrollView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

})

export default tab4
