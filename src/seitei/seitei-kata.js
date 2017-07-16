import React, { Component } from 'react'
import { 
    StyleSheet, 
    Text, 
    View,
    Image,
    StatusBar,
    ScrollView,
    Dimensions } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Touchable } from '../components'
import Header from '../components/header'
import { pop, push } from '../app/navigation-reducer'
import { Screens } from '../app/navigation'
import Color from '../util/color'
import i18n from '../i18n/index'
import Video from 'react-native-video-player'
//import Video from 'react-native-video'
import TestVideo1 from '../assets/videos/Sanbonme.mp4'

class SeiteiKata extends Component {
    render() {
        const { pop, kataItem } = this.props

        return (            
            <View style={styles.scrollContainer}>
                <StatusBar
                    translucent={true}
                    barStyle={'light-content'}
                    backgroundColor={Color.darkenByRatio(Color.globalheader, 0.2)}
                />
                <Header
                    leftIconPress={pop}
                    title={kataItem.title}
                    iconStyle={{ color: 'white' }}
                
                />
                <ScrollView>
                    <Video
                        video={TestVideo1}           
                    />  
                    <Text>{kataItem.text}</Text>
                </ScrollView>
            </View>
        )
    }    
}

const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
        //backgroundColor: Color.globalbg,
    },
    container :{
        flex:1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 5,
    },
})

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        pop,
        push,
    },dispatch)
}

export default connect(null, mapDispatchToProps)(SeiteiKata)
