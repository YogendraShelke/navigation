import React, { useEffect, useRef } from 'react'
import {
    TouchableWithoutFeedback,
    View,
    Text,
    Animated,
    StyleSheet
} from 'react-native'
import DiagonalTransition from './DiagonalTransition'

export default ({
    activeTintColor,
    inactiveTintColor,
    icon,
    label,
    active,
    onPress,
    onLongPress
}) => {
    const animation = useSpring({ to: active ? 1 : 0 }, { stiffness: 50 })
    const dotScale = animation
    const iconTranslate = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -30]
    })
    const labelTranslate = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [20, 0]
    })
    const iconVisibility = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0]
    })
    const labelVisibility = animation

    const animatedStyle = translateY => [
        styles.centered,
        { transform: [{ translateY }] }
    ]

    const labelStyle = { ...styles.label, color: activeTintColor }
    const dotStyle = {
        ...styles.dot,
        backgroundColor: activeTintColor,
        transform: [{ scale: dotScale }]
    }

    return (
        <TouchableWithoutFeedback onPress={onPress} onLongPress={onLongPress}>
            <View style={styles.container}>
                <Animated.View style={animatedStyle(labelTranslate)}>
                    <DiagonalTransition visibility={labelVisibility}>
                        <Text style={labelStyle}>{label}</Text>
                    </DiagonalTransition>
                </Animated.View>
                <Animated.View style={animatedStyle(iconTranslate)}>
                    <DiagonalTransition visibility={iconVisibility}>
                        {icon()}
                    </DiagonalTransition>
                </Animated.View>
                <Animated.View style={dotStyle} />
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    centered: {
        position: 'absolute'
    },
    label: {
        fontSize: 12,
        fontWeight: '600',
        letterSpacing: -0.2
    },
    dot: {
        position: 'absolute',
        bottom: 8,
        width: 5,
        height: 5,
        borderRadius: 2.5
    }
})

export const useSpring = (value, config) => {
    const animatedValue = useRef(new Animated.Value(value.to)).current
    useEffect(() => {
        const animation = Animated.spring(animatedValue, {
            ...config,
            toValue: value.to,
            useNativeDriver: true
        })
        animation.start()
        return () => animation.stop()
    }, [animatedValue, config, value.to])
    return animatedValue
}
