import React, { useState, useEffect } from 'react'
import { Menu, Divider, Portal } from 'react-native-paper'
import { View } from 'react-native'

export default ({ showMenu, anchor }) => {
    const [visible, setVisible] = useState(showMenu)

    useEffect(() => {
        setVisible(showMenu)
    }, [showMenu])

    const closeMenu = () => setVisible(false)

    return (
        <Portal>
            <Menu visible={visible} onDismiss={closeMenu} anchor={anchor}>
                <Menu.Item onPress={() => {}} title="Item 1" />
                <Menu.Item onPress={() => {}} title="Item 2" />
                <Divider />
                <Menu.Item onPress={() => {}} title="Item 3" />
            </Menu>
        </Portal>
    )
}
