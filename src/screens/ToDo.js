import React, { useState } from 'react'
import { View, StatusBar, StyleSheet } from 'react-native'
import { TextInput, Switch, List, useTheme } from 'react-native-paper'

const ToDo = ({ route }) => {
    const todo = (route.params && route.params.todo) || {}
    const [title, setTitle] = useState(todo.title)
    const [completed, setCompleted] = useState(todo.completed)
    const { primary } = useTheme().colors
    return (
        <>
            <StatusBar barStyle="light-content" />
            <View style={styles.container}>
                <TextInput
                    label="Title"
                    value={title}
                    onChangeText={setTitle}
                    style={styles.input}
                    autoFocus
                />
                <List.Item
                    title="Completed"
                    right={() => (
                        <Switch
                            color={primary}
                            value={completed}
                            onValueChange={setCompleted}
                        />
                    )}
                />
            </View>
        </>
    )
}

export default ToDo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    },
    input: {
        marginBottom: 26,
        marginHorizontal: 4,
        backgroundColor: 'transparent'
    }
})
