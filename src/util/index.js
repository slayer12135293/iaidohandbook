import React from 'react'

const Util = {
    getUuid() {
        return Date.now()
    },
    capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
    },
}

export default Util

export const ReactNavigation = {
    mapNavigationStateToProps: object => {

        const mapNavigationStateToProps = (Component) => ({ navigation, ...otherProps }) => {
            return (
                <Component
                    {...navigation.state}
                    navigation={navigation}
                    {...otherProps}/>
            )
        }

        let newObject = {}
        Object.entries(object).forEach(([ key, value ]) => {
            newObject = {
                ...newObject,
                [key]: mapNavigationStateToProps(value),
            }
        })
        return newObject
    },
}
