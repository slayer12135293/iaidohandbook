import React from 'react'
import PropTypes from 'prop-types'
import { Image, StyleSheet, View } from 'react-native'
import { Touchable, Text } from '../../../components/index'
import { bindActionCreators } from 'redux'
import { push } from '../../../app/navigation-reducer'
import { connect } from 'react-redux'
import { Screens } from '../../../app/navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
import GraphPlaceholder from '../../../assets/graph.png'
import i18n from '../../../i18n/index'
import Accounting from '../../../util/accounting'
import DateUtil from '../../../util/date'

const DashboardItem = ({ item, push, style }) => {
    
    const dateFormat = 'MMMM YYYY'
    const fromDate = DateUtil.formatToLocale(item.fromDate, dateFormat)
    const toDate = DateUtil.formatToLocale(item.toDate, dateFormat)

    return (
        <Touchable
            style={[ styles.item, style ]}
            onPress={() => push(Screens.kpiOverview, { item })}
        >
            <View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.title}>
                        {i18n.t(item.title).toUpperCase()}
                    </Text>
                    <Icon name={'chevron-right'} style={styles.title}/>
                </View>
                <Text style={styles.period}>
                    {`${fromDate} - ${toDate}`}
                </Text>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 22,
                    }}
                >
                    <Text style={styles.amount}>
                        {Accounting.formatMoney(item.total)}
                    </Text>
                    <Image
                        source={GraphPlaceholder}
                        style={styles.graphPlaceholder}
                        resizeMode={'contain'}
                    />
                </View>
            </View>
        </Touchable>
    )
}

DashboardItem.propTypes = {
    item: PropTypes.shape({
        title: PropTypes.string.isRequired,
    }),
    style: PropTypes.any,
}

const styles = StyleSheet.create({
    item: {
        marginHorizontal: 22,
        marginVertical: 8,
        borderRadius: 4,
        paddingVertical: 16,
        backgroundColor: 'white',
        paddingHorizontal: 16,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowOffset: {
            height: 2,
            width: 2,
        },
    },
    title: {
        fontSize: 20,
        color: '#9B9B9B',
    },
    period: {
        fontSize: 12,
        color: '#999',
    },
    amount: {
        fontSize: 36,
        color: '#4a4a4a',
        flex: 1,
    },
    graphPlaceholder: {
        margin: 10,
        height: 40,
        flex: 1,
    },
})

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        push,
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(DashboardItem)
