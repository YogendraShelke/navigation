import React, { useState } from 'react'
import { View, InteractionManager, StatusBar, StyleSheet } from 'react-native'
import {
    TextInput,
    Switch,
    List,
    useTheme,
    HelperText
} from 'react-native-paper'
import ModalHeader from '../components/ModalHeader'
import { createTodo, updateTodo } from '../store/actions/ToDoActions'
import { connect } from 'react-redux'

const ToDo = ({ route, navigation, dispatch }) => {
    const todo = (route.params && route.params.todo) || {}
    const [title, setTitle] = useState(todo.title)
    const [description, setDescription] = useState(todo.description)
    const [completed, setCompleted] = useState(todo.completed)
    const { primary } = useTheme().colors
    React.useLayoutEffect(() => {
        const onSave = () => {
            navigation.goBack()
            InteractionManager.runAfterInteractions(() => {
                if (todo.id) {
                    dispatch(
                        updateTodo({
                            ...todo,
                            title,
                            description,
                            completed
                        })
                    )
                } else {
                    dispatch(
                        createTodo({
                            id: Math.random()
                                .toString(36)
                                .substr(2, 9),
                            title,
                            description,
                            completed
                        })
                    )
                }
            })
        }
        navigation.setOptions({
            header: props => <ModalHeader onRightAction={onSave} {...props} />
        })
    })

    const hasError = () => true

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
                <HelperText type="error" visible={hasError()} />
                <TextInput
                    label="Description"
                    value={description}
                    onChangeText={setDescription}
                    style={styles.input}
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

export default connect()(ToDo)

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
