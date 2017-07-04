import React from 'react'
import { BottomTab } from '../../components'
import { bindActionCreators } from 'redux'
import { jumpTo } from './navigation-reducer'
import { connect } from 'react-redux'

const MusoshindenTabBar = ({ jumpTo }) => {
    const tabs = [
        { key: 'tab1', text: 'Historia', kenji: '歴史', press:() => jumpTo('tab1') },
        { key: 'tab2', text: 'Kata', kenji: '形', press:() => jumpTo('tab2') },
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
