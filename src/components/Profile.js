import React from 'react'
import { StyleSheet, TouchableOpacity, Image } from 'react-native'

import logo from '../assets/Logo.png'

const Profile = ({ navigation, size = 40 }) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => navigation.toggleDrawer()}
        >
            <Image
                source={logo}
                style={{ width: size, height: size, borderRadius: size / 2 }}
            />
        </TouchableOpacity>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        marginLeft: 10
    }
})
