import React from 'react'
import { View, StyleSheet } from 'react-native'
import TabItem from './TabItem'

export default ({
    state,
    navigation,
    descriptors,
    activeTintColor,
    inactiveTintColor
}) => {
    return (
        <View style={styles.container}>
            {state.routes.map((route, index) => {
                const key = route.key
                const { tabBarLabel, tabBarIcon } = descriptors[key].options
                const label = tabBarLabel || route.name
                const active = state.index === index
                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key
                    })
                    if (!active && !event.defaultPrevented) {
                        navigation.navigate(route.name)
                    }
                }
                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key
                    })
                }
                const icon = tabBarIcon
                const props = {
                    label,
                    active,
                    onPress,
                    onLongPress,
                    key,
                    icon,
                    activeTintColor,
                    inactiveTintColor
                }
                return <TabItem {...props} />
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        overflow: 'hidden',
        height: 60
    }
})
