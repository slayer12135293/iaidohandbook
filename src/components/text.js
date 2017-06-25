import React, { Component } from 'react'
import { Text as RNText, StyleSheet } from 'react-native'

class Text extends Component {    
    setNativeProps = (nativeProps) => {
        this._root.setNativeProps(nativeProps)
    }
    render() {
        const { children, style,  ...other } = this.props
        return (
            <RNText ref={ref=>this._root= ref} style={[ styles.text, style ]} {...other} >
                { children }
            </RNText>
        )
    }
} 

const styles = StyleSheet.create({
    text:{ 
        //fontSize: 20,
    },
})

export default Text
