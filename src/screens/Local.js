import React from 'react'
import { Text, StyleSheet, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { FAB, useTheme } from 'react-native-paper'
import { StackScreen } from '../routes'

const Local = ({ toDos, navigation }) => {
    const renderItem = ({ item }) => <Text>{item.title}</Text>
    const keyExtractor = item => item.id.toString()
    return (
        <>
            <FlatList
                data={toDos}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                style={styles.list}
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

const select = ({ toDo: { toDos } }) => ({ toDos })

export default connect(select)(Local)

const styles = StyleSheet.create({
    list: {
        flex: 1,
        padding: 20
    },
    fab: {
        margin: 20,
        width: 56,
        height: 56,
        alignSelf: 'flex-end'
    }
})
