import React from 'react'
import { BottomTab } from '../components'
import { bindActionCreators } from 'redux'
import { jumpTo } from './navigation-reducer'
import { connect } from 'react-redux'

const SeiteiTabBar = ({ jumpTo }) => {
    const tabs = [
        { key: 'tab1', text: 'Detalj', kenji: '詳解', press:() => jumpTo('tab1') },
        { key: 'tab2', text: 'Kata', kenji: '形', press:() => jumpTo('tab2') },
        { key: 'tab3', text: 'Reihō', kenji: '禮法', press:() => jumpTo('tab3') },
        { key: 'tab4', text: 'Reihō', kenji: '禮法', press:() => jumpTo('tab4') },
    ]

    return (
        <BottomTab items = {tabs} />
    )
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        jumpTo,
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(SeiteiTabBar)
