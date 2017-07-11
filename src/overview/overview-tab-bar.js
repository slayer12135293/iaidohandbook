import React from 'react'
import { BottomTab } from '../components'
import { BottomFlatTab } from '../components'
import { bindActionCreators } from 'redux'
import { jumpTo } from './navigation-reducer'
import { connect } from 'react-redux'

const OverviewTabBar = ({ jumpTo }) => {
    const tabs = [
        { key: 'tab1', text: 'Intro', kenji: '概述', press:() => jumpTo('tab1') },
        { key: 'tab2', text: 'Kamae', kenji: '構え', press:() => jumpTo('tab2') },
        { key: 'tab3', text: 'Ashi', kenji: '足', press:() => jumpTo('tab3') },
        { key: 'tab4', text: 'Kanana', kenji: '刀' ,press:() => jumpTo('tab4') },
        { key: 'tab5', text: 'Kanana', kenji: '刀' ,press:() => jumpTo('tab4') },
        { key: 'tab6', text: 'Kanana', kenji: '刀' ,press:() => jumpTo('tab4') },
        { key: 'tab7', text: 'Kanana', kenji: '刀' ,press:() => jumpTo('tab4') },
        { key: 'tab8', text: 'Kanana', kenji: '刀' ,press:() => jumpTo('tab4') },
        { key: 'tab9', text: 'Kanana', kenji: '刀' ,press:() => jumpTo('tab4') },
    ]

    return (
        <BottomFlatTab items = {tabs} />
    )
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        jumpTo,
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(OverviewTabBar)
