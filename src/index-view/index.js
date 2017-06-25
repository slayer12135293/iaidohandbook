import React, { Component } from 'react'
import { 
    StyleSheet, 
    Text, 
    View,
    ScrollView,
    Dimensions } from 'react-native'
import { bindActionCreators } from 'redux'
import { Touchable } from '../components'
import { pop, push } from '../app/navigation-reducer'
import { connect } from 'react-redux'

class IndexView extends Component {
    render() {
        const  pop = this.props

        return (
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.container}>
                    <Touchable>                     
                        <View style={styles.boxButton}>
                            <View style={styles.headerBox}>
                                <Text style={styles.headerBoxText}>{'概'}</Text>
                                <Text style={styles.headerBoxText}>{'要'}</Text>
                            </View>                        
                            <Text style={[ styles.label, { left: 40 } ]}>{'Översikt'}</Text>
                        </View>                    
                    </Touchable> 

                    <Touchable>                     
                        <View style={styles.boxButton}>
                            <View style={styles.headerBox}>
                                <Text style={styles.headerBoxText}>{'制'}</Text>
                                <Text style={styles.headerBoxText}>{'定'}</Text>
                                <Text style={styles.headerBoxText}>{'居'}</Text>
                                <Text style={styles.headerBoxText}>{'合'}</Text>
                                <Text style={styles.headerBoxText}>{'道'}</Text>
                            </View>                        
                            <Text style={[ styles.label, { left: 30 } ]}>{'Seitei Iaido'}</Text>
                        </View>                    
                    </Touchable>    

                    <Touchable>                     
                        <View style={styles.boxButton}>
                            <View style={styles.headerBox}>
                                <Text style={styles.headerBoxText}>{'夢'}</Text>
                                <Text style={styles.headerBoxText}>{'想'}</Text>
                                <Text style={styles.headerBoxText}>{'神'}</Text>
                                <Text style={styles.headerBoxText}>{'伝'}</Text>
                                <Text style={styles.headerBoxText}>{'流'}</Text>
                            </View>                        
                            <Text style={[ styles.label, { left: -5 } ]}>{'Musō Shinden-ryū'}</Text>
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
                            <Text style={[ styles.label, { left: -5 } ]}>{'Musō Jikiden Eishin-ryū'}</Text>
                        </View>                    
                    </Touchable>

                    <Touchable>                     
                        <View style={styles.boxButton}>
                            <View style={styles.headerBox}>
                                <Text style={styles.headerBoxText}>{'用'}</Text>
                                <Text style={styles.headerBoxText}>{'語'}</Text>
                                <Text style={styles.headerBoxText}>{'集'}</Text>
                            </View>                        
                            <Text style={[ styles.label, { left: 53 } ]}>{'Odlista'}</Text>
                        </View>                    
                    </Touchable> 
                </View>
            </ScrollView>
        )
    }    
}

const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
        backgroundColor:'#ecf0f1',
    },
    container :{
        flex:1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 5,
    },
    boxButton: {
        backgroundColor: '#f39c12',        
        width: Dimensions.get('window').width /2 -12,             
        justifyContent: 'center',
        height: 200,
        margin: 3,     
    },
    headerBox: {
        flex:1,
        alignItems: 'flex-end', 
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
        position: 'absolute',
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
        pop,
        push,
    },dispatch)
}

export default connect(null, mapDispatchToProps)(IndexView)
