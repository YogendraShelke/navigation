import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { Caption, Colors } from 'react-native-paper'

const Contact = ({
    picture: { thumbnail },
    name: { first, last },
    location: { city, state, postcode }
}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: thumbnail }} />
            <View style={styles.right}>
                <Caption style={styles.title}>{`${first} ${last}`}</Caption>
                <Caption>{`${city}, ${state}-${postcode}`}</Caption>
            </View>
        </View>
    )
}

export default Contact

const styles = StyleSheet.create({
    container: {
        padding: 15,
        flex: 1,
        flexDirection: 'row'
    },
    image: {
        resizeMode: 'cover',
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: Colors.grey500
    },
    right: {
        marginLeft: 15,
        justifyContent: 'center'
    },
    title: {
        fontSize: 16,
        color: Colors.grey800,
        fontWeight: '600',
        marginBottom: -3
    }
})
