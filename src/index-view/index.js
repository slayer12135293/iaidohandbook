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
import { pop, push } from '../app/navigation-reducer'
import { Screens } from '../app/navigation'
import Color from '../util/color'
import i18n from '../i18n/index'
import BackgroundImg  from '../assets/indexbg.png'

class IndexView extends Component {
    render() {
        const { push } = this.props

        return (            
            <Image source={BackgroundImg} style={{ flex: 1, width: null, height: null }}>
                <StatusBar
                    translucent={true}
                    barStyle={'light-content'}
                    backgroundColor={Color.darkenByRatio(Color.globalheader, 0.2)}
                />
                <ScrollView style={styles.scrollContainer}>                
                    <View style={styles.container}>
                        <Touchable onPress={()=>push(Screens.overviewSubtabs)}>                     
                            <View style={styles.boxButton}>
                                <View style={styles.headerBox}>
                                    <Text style={styles.headerBoxText}>{'概'}</Text>
                                    <Text style={styles.headerBoxText}>{'要'}</Text>
                                </View>                        
                                <Text style={[ styles.label ]}>{i18n.t('homeScreen.overview',null,{ capitalize: true })}</Text>
                            </View>                    
                        </Touchable> 

                        <Touchable onPress={()=>push(Screens.seiteiSubtabs)}>                     
                            <View style={styles.boxButton}>
                                <View style={styles.headerBox}>
                                    <Text style={styles.headerBoxText}>{'制'}</Text>
                                    <Text style={styles.headerBoxText}>{'定'}</Text>
                                    <Text style={styles.headerBoxText}>{'居'}</Text>
                                    <Text style={styles.headerBoxText}>{'合'}</Text>
                                    <Text style={styles.headerBoxText}>{'道'}</Text>
                                </View>                        
                                <Text style={[ styles.label ]}>{'Seitei Iaido'}</Text>
                            </View>                    
                        </Touchable>    

                        <Touchable onPress={()=>push(Screens.musoshindenSubtabs)}>                     
                            <View style={styles.boxButton}>
                                <View style={styles.headerBox}>
                                    <Text style={styles.headerBoxText}>{'夢'}</Text>
                                    <Text style={styles.headerBoxText}>{'想'}</Text>
                                    <Text style={styles.headerBoxText}>{'神'}</Text>
                                    <Text style={styles.headerBoxText}>{'伝'}</Text>
                                    <Text style={styles.headerBoxText}>{'流'}</Text>
                                </View>                        
                                <Text style={[ styles.label ]}>{'Musō Shinden-ryū'}</Text>
                            </View>                    
                        </Touchable>  

                        <Touchable>                     
                            <View style={styles.boxButton}>
                                <View style={styles.headerBox}>
                                    <Text style={styles.headerBoxTextS}>{'無'}</Text>
                                    <Text style={styles.headerBoxTextS}>{'雙'}</Text>
                                    <Text style={styles.headerBoxTextS}>{'直'}</Text>
                                    <Text style={styles.headerBoxTextS}>{'傳'}</Text>
                                    <Text style={styles.headerBoxTextS}>{'英'}</Text>
                                    <Text style={styles.headerBoxTextS}>{'信'}</Text>
                                    <Text style={styles.headerBoxTextS}>{'流'}</Text>
                                </View>                        
                                <Text style={[ styles.label ]}>{'Musō Jikiden Eishin-ryū'}</Text>
                            </View>                    
                        </Touchable>

                        <Touchable onPress={()=>push(Screens.wordList)}>                     
                            <View style={styles.boxButton}>
                                <View style={styles.headerBox}>
                                    <Text style={styles.headerBoxText}>{'用'}</Text>
                                    <Text style={styles.headerBoxText}>{'語'}</Text>
                                    <Text style={styles.headerBoxText}>{'集'}</Text>
                                </View>                        
                                <Text style={[ styles.label ]}>{i18n.t('homeScreen.wordlist',null,{ capitalize: true })}</Text>
                            </View>                    
                        </Touchable>                      
                        
                    </View>
                            
                </ScrollView>
            </Image>   
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
    boxButton: {
        backgroundColor: '#bdc3c7',        
        width: Dimensions.get('window').width /2 -16,             
        justifyContent: 'center',
        height: 200,
        margin: 5,   
        shadowOffset: {
            width: 2,
            height: 2,
        },  
        shadowOpacity: 0.5,
        shadowColor: Color.black,
        elevation: 4,
    },
    headerBox: {
        position: 'absolute',
        flex:1,
        right:7,
        //alignItems: 'flex-end', 
        justifyContent: 'center',
        margin: 10,
    },    
    headerBoxText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'rgba(255,255,255, 0.3)',
        textShadowColor: 'black', 
        textShadowRadius: 5,
        textShadowOffset: { width: 2, height: 2 },
    },

    headerBoxTextS: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'rgba(255,255,255, 0.3)',
        textShadowColor: 'black', 
        textShadowRadius: 5,
        textShadowOffset: { width: 2, height: 2 },
    },

    label: {
        //position: 'absolute',
        fontSize: 25,
        justifyContent: 'center',
        textAlign: 'center',
        textAlignVertical : 'auto',
        textShadowColor: 'black', 
        textShadowRadius: 5,
        textShadowOffset: { width: 1, height: 1 },
    },
})

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        push,
    },dispatch)
}

export default connect(null, mapDispatchToProps)(IndexView)
