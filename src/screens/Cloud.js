import React, { useEffect } from 'react'
import { FlatList, StyleSheet, InteractionManager } from 'react-native'
import { List } from 'react-native-paper'
import { connect } from 'react-redux'
import { fetchToDo, deleteCloudTodo } from '../store/actions/CloudActions'
import ToDoItem from '../components/ToDoItem'
import { StackScreen } from '../routes'

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

const Cloud = ({ navigation, toDos, error, dispatch }) => {
    useEffect(() => {
        dispatch(fetchToDo())
    }, [dispatch])

    const keyExtractor = todo => todo.id.toString()
    const onOptions = todo => {
        const onPress = () => {}
        const actions = [
            {
                title: 'Edit',
                icon: 'square-edit-outline',
                onPress: () => {}
            },
            {
                title: 'Mark Completed',
                icon: 'checkbox-marked-circle-outline',
                onPress: () => {}
            },
            {
                title: 'Delete',
                icon: 'delete-outline',
                onPress: () => {
                    dispatch(deleteCloudTodo(todo))
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
        <FlatList
            numColumns={2}
            style={styles.list}
            data={toDos}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
        />
    )
}

const select = ({ cloudToDo }) => ({ ...cloudToDo })

export default connect(select)(Cloud)

const styles = StyleSheet.create({
    list: {
        flex: 1,
        paddingHorizontal: 10
    }
})
