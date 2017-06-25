import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { View, Image, StyleSheet } from 'react-native'
import { Text } from '../components'
import Color from '../util/color'
import * as dateFns from 'date-fns'
import accounting from '../util/accounting'
import PropTypes from 'prop-types'
import { Touchable } from '../components'

const ListItem = ({ item, onPress, showChevron }) => (
    <Touchable onPress={ onPress }>
        <View style={styles.periodItem}>
            <Image
                source={item.image}
                style={styles.image}
            />
            <Text style={{ paddingLeft: 20 }}>
                {dateFns.format(item.period, 'MMMM')}
            </Text>
            <Text style={styles.transactionSum}>
                {accounting.formatMoney(item.transactionSum)}
            </Text>
            {showChevron && <Icon name={'chevron-right'} />}
        </View>
    </Touchable>
)

ListItem.propTypes = {
    item: PropTypes.shape({
        period: PropTypes.string.isRequired,
        transactionSum: PropTypes.number.isRequired,
        image: PropTypes.any.isRequired,
    }),
    onPress: PropTypes.func,
    showChevron: PropTypes.bool,
}

const styles = StyleSheet.create({
    periodItem: {
        height: 80,
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 10,
        alignItems: 'center',
    },
    image: {
        height: 44,
        width: 44,
    },
    transactionSum: {
        flex: 1,
        textAlign: 'right',
        fontSize: 24,
        color: Color.grey3,
    },
})

export default ListItem
