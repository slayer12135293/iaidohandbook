import React from 'react'
import { Text, StyleSheet } from 'react-native'

const BlockText = ({ text }) =>{
    return (
        <Text style={styles.textWrapper}>                
            <Text style={styles.text}>{text}</Text>
        </Text>
    )
}

const styles = StyleSheet.create({  
    textWrapper: {
        textAlign: 'justify',
        padding:10,
    },
    text:{
        fontSize: 18,        
    },
})
export default BlockText
