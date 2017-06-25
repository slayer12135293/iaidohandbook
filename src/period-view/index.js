import React, { Component } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { Text } from '../components'
import { pop, push } from '../app/navigation-reducer'
import { connect } from 'react-redux'
import { Screens } from '../app/navigation'
import { bindActionCreators } from 'redux'
import { Header } from '../components'
import Color from '../util/color'
import ListItem from '../kpi-overview/list-item'
import IncomeIcon from '../assets/income.png'

const periods = [
    {
        period: '1000',
        transactionSum: 1234,
        image: IncomeIcon,
    },
]

class PeriodView extends Component {

    render() {
        const { item, pop, push } = this.props

        return (
            <View>
                <Header
                    iconStyle={{ color: Color.white }}
                    leftIconPress={pop}
                    title={item.period}
                    style={styles.header}
                />
                <View style={styles.placeHolder}>
                    <Text>{'placeholder'}</Text>
                </View>
                <FlatList
                    keyExtractor={item => item.period}
                    data={periods}
                    renderItem={({ item }) => 
                        <ListItem 
                            item={item} 
                            onPress={() => push(Screens.groupView, { item }) } 
                            showChevron={ true }
                        />
                    }
                    ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: Color.background }} />}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: Color.secondary,
    },
    placeHolder: {
        backgroundColor: 'white',
        margin: 16,
        shadowOffset: {
            height: 2,
            width: 2,
        },
        shadowOpacity: 0.5,
        shadowColor: Color.black,
        height: 210,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        pop,
        push,
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(PeriodView)

