import React from 'react'
import { View, Animated, StyleSheet } from 'react-native'

export default ({ style, visibility, coverColor = 'white', children }) => {
    const translateY = visibility.interpolate({
        inputRange: [0, 1],
        outputRange: [-30, 0]
    })
    return (
        <View style={[styles.container, style]}>
            {children}
            <Animated.View
                style={[styles.coverContainer, { transform: [{ translateY }] }]}
            >
                <View style={[styles.cover, { backgroundColor: coverColor }]} />
            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        overflow: 'hidden'
    },
    coverContainer: {
        position: 'absolute',
        top: '120%',
        width: '100%'
    },
    cover: {
        height: 40,
        transform: [{ skewY: '10deg' }]
    }
})
