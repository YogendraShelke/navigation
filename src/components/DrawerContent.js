import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import {
    Caption,
    Drawer,
    Switch,
    Text,
    Title,
    useTheme
} from 'react-native-paper'
import Animated from 'react-native-reanimated'

import Profile from './Profile'

const Icon = props => <MaterialCommunityIcons {...props} />

const Row = ({ label, name }) => (
    <DrawerItem
        icon={({ color, size }) => <Icon {...{ name, color, size }} />}
        label={label}
    />
)

export default props => {
    const paperTheme = useTheme()

    const translateX = Animated.interpolate(props.progress, {
        inputRange: [0, 0.5, 0.7, 0.8, 1],
        outputRange: [-100, -85, -70, -45, 0]
    })

    return (
        <DrawerContentScrollView {...props}>
            <Animated.View
                style={[
                    styles.drawerContent,
                    {
                        backgroundColor: paperTheme.colors.surface,
                        transform: [{ translateX }]
                    }
                ]}
            >
                <View style={styles.userInfoSection}>
                    <Profile navigation={props.navigation} size={80} />
                    <Title style={styles.title}>Yogendra Shelke</Title>
                    <Caption style={styles.caption}>@yogendra_shelke</Caption>
                </View>
                <Drawer.Section style={styles.drawerSection}>
                    <Row label="Profile" name="account-outline" />
                    <Row name="tune" label="Preferences" />
                    <Row name="bookmark-outline" label="Bookmarks" />
                </Drawer.Section>
                <Drawer.Section title="Preferences">
                    <View style={styles.preference}>
                        <Text>Dark Theme</Text>
                        <View pointerEvents="none">
                            <Switch value />
                        </View>
                    </View>
                </Drawer.Section>
            </Animated.View>
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1
    },
    userInfoSection: {
        paddingLeft: 20
    },
    title: {
        marginTop: 20,
        fontWeight: 'bold'
    },
    caption: {
        fontSize: 14,
        lineHeight: 14
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3
    },
    drawerSection: {
        marginTop: 15
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 20
    }
})
