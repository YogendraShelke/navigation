import React from 'react'
import { StyleSheet, TouchableOpacity, Image } from 'react-native'

const uri =
    'https://cdn3.iconfinder.com/data/icons/social-media-circle/512/circle-twitter-512.png'

const Profile = ({ navigation, size = 40 }) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => navigation.toggleDrawer()}
        >
            <Image
                source={{ uri }}
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
