import React, { Component } from 'react'
import { Dimensions, FlatList, Image, StatusBar, StyleSheet, View } from 'react-native'
import Color from '../util/color'
import Icon from 'react-native-vector-icons/Entypo'
import { Header, Touchable, Text } from '../components'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { pop, push } from '../app/navigation-reducer'
import { Screens } from '../app/navigation'
import i18n from '../i18n/index'
import * as dateFns from 'date-fns'
import IncomeIcon from '../assets/income.png'
import accounting from '../util/accounting'
import ListItem from './list-item'

const filters = [
    {
        key: 'quarter',
        text: i18n.t('quarter'),
    },
    {
        key: 'year',
        text: i18n.t('year'),
    },
    {
        key: 'half_year',
        text: i18n.t('half_year'),
    },
    {
        key: 'last_3_months',
        text: i18n.t('last_x_months', { n: 3 }),
        icon: 'back-in-time',
    },
    {
        key: 'last_6_months',
        text: i18n.t('last_x_months', { n: 6 }),
        icon: 'back-in-time',
    },
    {
        key: 'last_12_months',
        text: i18n.t('last_x_months', { n: 12 }),
        icon: 'back-in-time',
    },
]

const { width: screenWidth } = Dimensions.get('window')

class KpiOverview extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filter: 'year',
            periodTo: new Date(),
            periodFrom: dateFns.subMonths(new Date(), 11),
            periods: props.item.aggregate.reverse(),
        }
    }

    _selectFilter(filter) {
        const { periodTo } = this.state
        const periods = this.props.item.aggregate.reverse()

        let monthsToSub

        switch (filter) {
            case 'half_year':
                monthsToSub = 6
                break
            case 'year':
                monthsToSub = 11
                break
            case 'quarter':
                monthsToSub = 3
        }

        const periodFrom = dateFns.subMonths(periodTo, monthsToSub)
        // const hasPeriods = periods.reduce()

        this.setState({
            filter,
            periodFrom,
            periods: periods.filter(period =>
                (dateFns.isSameMonth(period.period, periodFrom) || dateFns.isAfter(period.period, periodFrom))
                && (dateFns.isSameMonth(period.period, periodTo) || dateFns.isBefore(period.period, periodTo))
            ),
        })
    }

    render() {
        const { pop, push, item } = this.props
        const { filter, periodFrom, periodTo, periods } = this.state

        const data = filters.map(period => {
            if (filter === period.key) {
                return {
                    ...period,
                    isSelected: true,
                }
            }
            return period
        })

        const periodsWithIcons = periods.map(period => ({ ...period, image: IncomeIcon }))

        return (
            <View style={styles.container}>
                <StatusBar barStyle={'light-content'} />
                <Header
                    style={styles.header}
                    leftIconPress={pop}
                    iconStyle={{ color: 'white' }}
                    title={i18n.t(item.title, null, { capitalize: true })}
                />
                <View style={{ height: 48 }}>
                    <FlatList
                        data={data}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item: tab }) =>
                            <Touchable
                                style={[ styles.tab, tab.isSelected && styles.tabSelected ]}
                                onPress={() => this._selectFilter(tab.key)}
                            >
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={[ styles.tabText, tab.isSelected && styles.tabTextSelected ]} >
                                        {
                                            tab.icon &&
                                            <Icon name={tab.icon} />
                                        }
                                        <Text>
                                            {' ' + tab.text}
                                        </Text>
                                    </Text>
                                </View>
                            </Touchable>
                        }
                        horizontal={true}
                    />
                </View>
                <Text style={styles.period}>
                    {`${dateFns.format(periodFrom, 'MMM YYYY')} - ${dateFns.format(periodTo, 'MMM YYYY')}`}
                </Text>
                <View style={styles.placeHolder}>
                    <Text>{'placeholder'}</Text>
                </View>
                <View style={styles.periodHeader}>
                    <Text>{i18n.t('period', null, { capitalize: true })}</Text>
                    <Text>{i18n.t('amount', null, { capitalize: true })}</Text>
                </View>
                <FlatList
                    keyExtractor={item => item.period}
                    data={periodsWithIcons}
                    renderItem={({ item }) => 
                        <ListItem 
                            item={item} 
                            onPress={() => push(Screens.periodView, { item }) } 
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
    container: {
        flex: 1,
        backgroundColor: Color.background,
    },
    header: {
        backgroundColor: Color.secondary,
        height: 80,
    },
    tab: {
        width: screenWidth /3.5,
        alignItems: 'center',
        justifyContent: 'center',
        height: 48,
    },
    tabSelected: {
        borderBottomWidth: 2,
        borderColor: Color.secondary,
    },
    tabText: {
        fontSize: 12,
        color: Color.grey,
    },
    tabTextSelected: {
        color: Color.secondary,
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
    periodHeader: {
        backgroundColor: Color.grey2,
        padding: 10,
        paddingLeft: 64,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    period: {
        textAlign: 'center',
        fontSize: 18,
        marginVertical: 12,
    },
    
})

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        pop,
        push,
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(KpiOverview)
