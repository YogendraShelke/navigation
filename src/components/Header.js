import React from 'react'
import { Appbar, useTheme } from 'react-native-paper'
import { StyleSheet } from 'react-native'
import Profile from './Profile'

const { Header, BackAction, Content } = Appbar

export default props => {
    const { scene, previous, navigation } = props
    const { primary, surface } = useTheme().colors
    const { headerTitle } = scene.descriptor.options
    const title = headerTitle ? headerTitle : scene.route.name
    const back = () => (
        <BackAction onPress={navigation.goBack} color={primary} />
    )
    const profile = () => <Profile navigation={navigation} />
    return (
        <Header theme={{ colors: { primary: surface } }}>
            {previous ? back() : profile()}
            <Content
                title={title}
                titleStyle={{ ...styles.title, color: primary }}
            />
        </Header>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})
