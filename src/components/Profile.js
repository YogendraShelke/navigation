import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Avatar } from 'react-native-paper'

const uri = 'https://miro.medium.com/max/3150/1*i7J-V-nfvMVGo7T9-kID6Q.jpeg'

const Profile = ({ navigation, size = 40 }) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => navigation.toggleDrawer()}
        >
            <Avatar.Image source={{ uri }} size={size} />
        </TouchableOpacity>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        marginLeft: 10
    }
})
