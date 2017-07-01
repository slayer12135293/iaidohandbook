import React, { Component } from 'react'
import { 
    StyleSheet, 
    Text, 
    View,
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
import AtoZListView from 'react-native-atoz-listview'
import AlphabetListView from 'react-native-alphabetlistview'

class WordList extends Component {   
    render(){
        const { push, pop } = this.props
        const listSorce = {
            'A': [
                {
                    'name': 'Anh Tuan Nguyen',
                    'age': 28,
                },
                {
                    'name': 'An Nguyen',
                    'age': 20,
                },
            ],
            'B': [
                {
                    'name': 'asdfasdf',
                    'age': 28,
                },
                {
                    'name': 'sadfasdfasdf',
                    'age': 20,
                },
            ],
            'Z': [
                {
                    'name': 'Zue Dang',
                    'age': 22,
                },
                {
                    'name': 'Zoom Jane',
                    'age': 30,
                },
            ],
        }
       
        return(
            <View>
                <Header
                    leftIconPress={pop}
                    title={i18n.t('homeScreen.wordlist',null,{ capitalize: true })}
                    iconStyle={{ color: 'white' }}                
                />
                <Text> {'word list asdfasdfasdf'}</Text>
                <View style={{ flex: 1 }}>
                    {/*<AlphabetListView
                        data={listSorce}
                        cell={renderRow}
                        cellHeight={100}
                        sectionHeaderHeight={22.5}
                    />*/}

                    <AtoZListView
                        data={listSorce}     // required array|object 
                        renderRow={renderRow} // required func 
                        rowHeight={40}      // required number 
                        sectionHeaderHeight={40}   // required number 
                        /**
                        * Optional props: all props will passing to ListView
                        * you simple look at ListView official document
                        * headerHeight              number
                        * footerHeigh               number
                        * sectionListStyle          number|object
                        * hideSectionList           bool
                        * compareFunction           func
                        * renderSelectionList       func
                        * sectionListItem           func
                        * contentOffset             object
                        * style                     object|number
                        */
                    />

                </View>                
            </View>
        )
    }

}

const renderRow = (item, sectionId, index) => {
    return (
        <View 
            style={{ 
                height: 40, 
                justifyContent: 'center', 
                alignItems: 'center' }}
        >
            <Text>{item.name}</Text>
        </View>
    )
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        pop,
        push,
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(WordList)
