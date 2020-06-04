import React from 'react'
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native'
import { Caption, IconButton } from 'react-native-paper'

const ToDoItem = props => {
    const { todo, onOptions, onPress } = props
    const { title, description, completed } = todo
    const status = completed
        ? { backgroundColor: 'green' }
        : { backgroundColor: 'tomato' }
    const text = completed
        ? { textDecorationLine: 'line-through', textDecorationStyle: 'solid' }
        : {}
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.outer}>
                <View style={[styles.left, status]} />
                <View style={styles.inner}>
                    <View style={styles.section}>
                        <Caption style={[styles.title, text]} numberOfLines={1}>
                            {title}
                        </Caption>
                        <IconButton
                            style={styles.icon}
                            icon="dots-vertical"
                            size={20}
                            onPress={onOptions}
                        />
                    </View>
                    <Caption style={text} numberOfLines={2}>
                        {description}
                    </Caption>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default ToDoItem

const styles = StyleSheet.create({
    outer: {
        flexDirection: 'row',
        margin: 8,
        flex: 1
    },
    left: {
        width: 4,
        borderTopLeftRadius: 3,
        borderBottomLeftRadius: 3
    },
    inner: {
        backgroundColor: 'white',
        padding: 16,
        shadowOffset: {
            width: 2,
            height: 2
        },
        elevation: 2,
        shadowOpacity: 0.2,
        borderRadius: 3,
        flex: 1
    },
    section: {
        flexDirection: 'row'
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        color: 'black',
        flex: 1
    },
    icon: {
        marginRight: -12,
        marginTop: -6
    }
})
