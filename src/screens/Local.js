import React from 'react'
import { FlatList, StyleSheet, InteractionManager } from 'react-native'
import { FAB, useTheme, List } from 'react-native-paper'
import { connect } from 'react-redux'
import ToDoItem from '../components/ToDoItem'
import { StackScreen } from '../routes'
import { deleteTodo, updateTodo } from '../store/actions/ToDoActions'

const Options = ({ rootNav, actions }) => (
    <>
        {actions.map(({ title, icon, onPress }, index) => (
            <List.Item
                key={index}
                title={title}
                left={props => <List.Icon {...props} icon={icon} />}
                onPress={() => {
                    rootNav.goBack()
                    InteractionManager.runAfterInteractions(() => onPress())
                }}
            />
        ))}
    </>
)

const Local = ({ navigation, toDos, dispatch }) => {
    const keyExtractor = todo => todo.id.toString()
    const onOptions = todo => {
        const onPress = () => {}
        const actions = [
            {
                title: 'Edit',
                icon: 'square-edit-outline',
                onPress: () => {
                    navigation.navigate(StackScreen.toDo, { todo })
                }
            },
            {
                title: todo.completed ? 'Mark To Do' : 'Mark Done',
                icon: 'checkbox-marked-circle-outline',
                onPress: () =>
                    dispatch(
                        updateTodo({ ...todo, completed: !todo.completed })
                    )
            },
            {
                title: 'Delete',
                icon: 'delete-outline',
                onPress: () => {
                    dispatch(deleteTodo(todo))
                }
            }
        ]
        const props = { actions, onPress }

        const content = rootNav => <Options {...{ ...props, rootNav }} />
        navigation.navigate(StackScreen.sheet, {
            content
        })
    }
    const onPress = todo => {}
    const renderItem = ({ item }) => (
        <ToDoItem
            onPress={() => onPress(item)}
            onOptions={() => onOptions(item)}
            todo={item}
        />
    )
    return (
        <>
            <FlatList
                // numColumns={2}
                style={styles.list}
                data={toDos}
                keyExtractor={keyExtractor}
                renderItem={renderItem}
            />
            <FAB
                icon="square-edit-outline"
                onPress={() => navigation.navigate(StackScreen.toDo)}
                style={styles.fab}
                color="white"
                theme={{
                    colors: { accent: useTheme().colors.primary }
                }}
            />
        </>
    )
}

const select = ({ todoReducer: { toDos } }) => ({ toDos })

export default connect(select)(Local)

const styles = StyleSheet.create({
    list: {
        flex: 1,
        paddingHorizontal: 10
    },
    fab: {
        margin: 20,
        width: 56,
        height: 56,
        alignSelf: 'flex-end'
    }
})
