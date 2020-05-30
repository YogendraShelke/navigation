import React from 'react'
import { Appbar, useTheme } from 'react-native-paper'
import { StyleSheet } from 'react-native'

const { Header, Action, Content } = Appbar

export default props => {
    const { scene, navigation } = props
    const { primary, surface } = useTheme().colors
    const { headerTitle } = scene.descriptor.options
    const title = headerTitle ? headerTitle : scene.route.name

    return (
        <Header style={styles.header} theme={{ colors: { primary: surface } }}>
            <Content
                title={title}
                titleStyle={{ ...styles.title, color: primary }}
            />
            <Action
                color={primary}
                icon="content-save-edit"
                onPress={navigation.goBack}
            />
        </Header>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 70,
        elevation: 1
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})
