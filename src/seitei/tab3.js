import React from 'react'
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native'
import i18n from '../i18n/index'
import { BlockText, KamaeBox } from '../components'
import Color from '../util/color'

const tab3 = () => {
    
    return (
        <ScrollView style={styles.container}>          
            
            <BlockText text={'I dojon finns noggranna regler för hur man bör uppföra sig. Dessa brukar med ett gemensamt namn kallas reiho (礼法), eller reigi (礼儀), vilket ungefär kan översättas till ”etikettsregler”. Dessa regler innefattar det mesta vi gör i dojon - hur vi för oss, hanterar våra vapen och kanske allra viktigast hur vi uppför oss mot varandra. Reiho är inte något som är specifikt för iaido, utan finns i alla budo-arter, även om det kan uppenbara sig på olika sätt.\n\nReiho hjälper oss i träningen på flera olika sätt, till exempel genom att minska risken för skador och farliga situationer, hjälpa oss att lämna vardagen så att vi går in i dojon med budons sinnesstämning och genom att det genomsyras av den ödmjukhet som är (eller bör vara) ett kännetecken för budon.'}    />   
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },    
})

export default tab3
