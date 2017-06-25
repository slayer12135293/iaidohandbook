import React, { Component } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { Text, Header } from '../components'
import { connect } from 'react-redux'
import { pop, push } from '../app/navigation-reducer'
import { bindActionCreators } from 'redux'
import Color from '../util/color'

class Overview extends Component {
    render() {
        const { pop } = this.props
        return (
            <View style={styles.body}>
                <Header                    
                    iconStyle={{ color: Color.white }}
                    leftIconPress={pop}
                    title={'Översikt'}
                    style={styles.header}
                />
               
                <ScrollView>
                    <View>
                        <Text> {'overview summary'} </Text>            
                    </View>
                </ScrollView>
                          
            </View>
        )
    }
}

const styles = StyleSheet.create({
    body: {
        flex:1,
        backgroundColor: Color.globalbg,
    },
    scrollContainer: {        
        flex:1,
        height:200,
    },
    container:{        
        flex:1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 5,
    },
    header: {
        backgroundColor: '#bdc3c7',
    },
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        pop,
        push,
    },dispatch)
}

export default connect(null, mapDispatchToProps)(Overview)  
