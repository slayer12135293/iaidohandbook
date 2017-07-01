import React from 'react'
import { BottomTab } from '../../components'
import { bindActionCreators } from 'redux'
import { jumpTo } from './navigation-reducer'
import { connect } from 'react-redux'

const MusoshindenTabBar = ({ jumpTo }) => {
    const tabs = [
        { key: 'tab1', text: 'Shoden', kenji: '初伝', press:() => jumpTo('tab1') },
        { key: 'tab2', text: 'Chūden', kenji: '中伝', press:() => jumpTo('tab2') },
        { key: 'tab3', text: 'Okuden', kenji: '奥伝', press:() => jumpTo('tab3') }, 
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

export default connect(null, mapDispatchToProps)(MusoshindenTabBar)
