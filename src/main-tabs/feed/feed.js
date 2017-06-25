import React, { Component } from 'react'
import { FlatList, StatusBar, StyleSheet, View } from 'react-native'
import { Text } from '../../components'
import Color from '../../util/color'
import DashboardItem from './components/dashboard-item'
import i18n from '../../i18n/index'
import { bindActionCreators } from 'redux'
import { push } from '../../app/navigation-reducer'
import { reset } from '../../create-goal/navigation-reducer'
import { Screens } from '../../app/navigation'
import { connect } from 'react-redux'
import { fetchFeed, fetchIncome, getFeed } from './reducer'
import * as dateFns from 'date-fns'

class Feed extends Component {

    state = {
        isLoading: true,
    }

    componentDidMount() {
        this.fetchData()
    }

    async fetchData() {
        const toDate = new Date()
        const fromDate = dateFns.subMonths(toDate, 11)
        const { fetchFeed } = this.props

        try {
            await fetchFeed(fromDate, toDate)
        } catch (error) {
            console.warn(error)
        } finally {
            this.setState({ isLoading: false })
        }
    }

    render() {
        const { isLoading } = this.state
        const { feed, push, reset } = this.props

        return (
            <View style={styles.container}>
                <StatusBar barStyle={'light-content'} />
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>
                        {i18n.t('feed.your_company')}
                    </Text>
                </View>
                <Text onPress={() => {
                    reset()
                    push(Screens.createGoal)
                }}>
                    {'Create Goal or something'}
                </Text>
                <FlatList
                    onRefresh={() => this.fetchData()}
                    refreshing={isLoading}
                    contentContainerStyle={{ paddingTop: 20 }}
                    data={feed}
                    renderItem={({ item }) => <DashboardItem item={item} />}
                    keyExtractor={item => item.title}
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
        paddingVertical: 24,
        backgroundColor: Color.primary,
    },
    headerTitle: {
        color: 'white',
        fontSize: 24,
        textAlign: 'center',
    },
})

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        fetchFeed,
        push,
        reset,
    }, dispatch)
}

const mapStateToProps = state => {
    return {
        feed: getFeed(state),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed)
