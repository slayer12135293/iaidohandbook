import React from 'react'
import { StyleSheet, TouchableHighlight, View, FlatList,Dimensions } from 'react-native'
import { Text } from '../components'
import PropTypes from 'prop-types'
import Color from '../util/color'

const { width: screenWidth } = Dimensions.get('window')
const BottomFlatTab = ({ items }) => {
    return (
        <View style={styles.container}>           
            <FlatList 
                data={items}
                renderItem={({ item })=> renderTab(item) } 
                keyExtractor={item => item.key}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
            />
        </View>
    )
}

BottomFlatTab.propTypes ={
    items: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string,
        text: PropTypes.string,
        kenji: PropTypes.string,
        press: PropTypes.func,
    })),
}

const renderTab = (item)=>{
    return (
        <TouchableHighlight
            key={item.key}
            onPress={item.press}
            style={styles.touchableArea}
        >
            <View>  
                <Text style={styles.label}>
                    {item.text}
                </Text>
                <Text style={styles.underLabel}>  
                    {item.kenji}
                </Text>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({  
    touchableArea: {
        width: screenWidth / 4.5,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,        
        borderLeftColor:Color.white, 
        borderLeftWidth:2,
        //paddingHorizontal:30,     

    },  
    container: {
        height: 50,
        backgroundColor: Color.globalbottomtab,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRightColor:Color.white, 
        borderRightWidth:2,
    },
    label: {
        fontSize: 18,
        color: 'white',
        fontWeight: '400',
        textAlign: 'center',
    },
    underLabel: {
        fontSize:12,
        color: Color.textBlack,
        textAlign: 'center',
        textShadowColor: Color.whiteShadow,
        textShadowOffset: { width: 1, height: 1 },
    },
})

export default BottomFlatTab
