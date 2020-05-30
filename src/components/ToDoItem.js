import React from 'react'
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native'
import { Caption, IconButton } from 'react-native-paper'

const ToDoItem = props => {
    const { todo, onOptions, onPress } = props
    const { title, body } = todo
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <View style={styles.section}>
                    <Caption style={styles.title} numberOfLines={2}>
                        {title}
                    </Caption>
                    <IconButton
                        style={styles.icon}
                        icon="dots-vertical"
                        size={20}
                        onPress={onOptions}
                    />
                </View>
                <Caption numberOfLines={3}>{body}</Caption>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default ToDoItem

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        margin: 8,
        backgroundColor: 'white',
        padding: 16,
        shadowOffset: {
            width: 2,
            height: 2
        },
        elevation: 2,
        shadowOpacity: 0.2,
        borderRadius: 3,
        width: '45%'
    },
    section: {
        flexDirection: 'row'
    },
    title: {
        fontSize: 16,
        color: 'black',
        flex: 1
    },
    icon: {
        marginRight: -12,
        marginTop: -6
    }
})
