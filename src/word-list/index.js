import React, { Component } from 'react'
import {  View, Text, StyleSheet, BackHandler, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Header from '../components/header'
import { pop } from '../app/navigation-reducer'
import Color from '../util/color'
import i18n from '../i18n/index'
import AtoZListView from 'react-native-atoz-listview'
import { listSource } from './word-list-source'
import  AlphabetListView from 'react-native-alphabetlistview'
import ScrollableTabView from 'react-native-scrollable-tab-view'

class WordList extends Component {   
    constructor(props) {
        super(props)
        this._onBackPress = this._onBackPress.bind(this)
        this.state = { dataSource: listSource() }
        this.filterList = this._filterList.bind(this)
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this._onBackPress)
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this._onBackPress)
    }

    _onBackPress() {
        const { pop } = this.props
        pop()
        return true
    } 

    _filterList = (text) => {
        const initSource = listSource() 
        let filteredSource = {}       
        Object.keys(initSource).forEach(x=>{
            let filteredArray = initSource[x].filter(y=> y.name.toLowerCase().includes(text))
            if( filteredArray.length >0) {
                filteredSource[x] = filteredArray
            }
        })
        if(text==''){
            filteredSource = initSource
        }
        this.setState({ dataSource: filteredSource })
    }

    render(){
        const { push, pop } = this.props      
       
        return(
            <View style={styles.container}>
                <Header
                    leftIconPress={pop}
                    title={i18n.t('homeScreen.wordlist',null,{ capitalize: true })}
                    iconStyle={{ color: 'white' }}                
                />
                
                <View style={{ flex: 1 }}> 
                    {/*<TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                        //onChange={(text) => {this.setState({ text }), console.warn(this.state.text)}  }
                        onChangeText={(text) => {this.setState({ text }), console.warn(this.state.text)}  }
                        value={this.state.text}
                    />*/}
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                        placeholder= {'Search...'}
                        onChangeText={(text) => this._filterList(text)}
                    />

                    <AtoZListView
                        data={this.state.dataSource}     // required array|object 
                        renderRow={renderRow} // required func 
                        rowHeight={25}      // required number                  
                        sectionHeaderHeight={10}   // required number 
                        sectionListStyle= {{ padding:1 }}   
                        sectionHeader={SectionHeader}     
                        sectionListItem={SectionItem}                  
                    />                      
                </View>                 

            </View>
            
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textStyle: {
        textAlign:'center',
        color:'#fff',
        fontWeight:'700',
        fontSize:16,
    },
    
})

const SectionItem =(item) => {    
    return (
        <View style={{             
            justifyContent: 'center', 
            alignItems: 'flex-start',
            marginTop:1,
            marginBottom:1,
        }}>
            <Text style={{ fontSize:10 }}>{item.title} </Text>
        </View>
       
    )  
}
const SectionHeader =(item)=> {
 
    // inline styles used for brevity, use a stylesheet when possible
    let textStyle = {
        textAlign:'left',
        color:Color.black,
        fontSize:16,
        padding:10,
    }

    let viewStyle = {
        backgroundColor: Color.grey,
    }
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{item.title} </Text>
        </View>
    )
  
}

const renderRow = (item) => {
    return (
        <View 
            style={{ 
                justifyContent: 'center', 
                alignItems: 'flex-start',
                backgroundColor: Color.borderBottomColor,
                padding:10,
                borderBottomWidth:1,
                borderBottomColor:Color.white }}
        >
            <Text>{item.name} {item.kanji}</Text>
            <Text>{item.text}</Text>
        </View>
    )
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        pop,
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(WordList)
