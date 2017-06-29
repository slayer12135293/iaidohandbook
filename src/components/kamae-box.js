import React from 'react'
import { Text,View, Image, StyleSheet,Dimensions } from 'react-native'
import Color from '../util/color'
import PropTypes from 'prop-types'

const KamaeBox = ({ item }) =>{
    return (
        <View style={styles.boxContainer}>
            <View>
                <Text style={styles.label}>{item.label}</Text>
                <Text style={styles.kenji}>{item.kenji}</Text>
                <Text style={styles.bodyText}>{item.bodyText}</Text>                
            </View>
            <View style={styles.imgBox}>
                <Image
                    style={[ styles.img, item.imgStyle ]}
                    source={item.img}
                />
            </View>
        </View> 
    )
}

KamaeBox.propTypes ={
    item: PropTypes.shape({
        label: PropTypes.string,
        kenji: PropTypes.string,
        img: PropTypes.Image,
        imgStyle:PropTypes.style,
        bodyText:PropTypes.string,
    }),
}

const styles = StyleSheet.create({  
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
        flexDirection: 'row', 
        justifyContent: 'space-between',
    },
    label:{
        fontSize: 20,
        fontWeight: 'bold',
    },
    kenji:{
        fontSize:20,        
    },
    imgBox: {
    },
    img:{
        width: 150,
        height:300,
    },
    bodyText:{
        fontSize:10,
        width:Dimensions.get('window').width /2,
    },
})
export default KamaeBox
