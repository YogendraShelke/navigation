import React from 'react'
import { View } from 'react-native'
import Styles from './Styles'
import { Button } from 'react-native-paper'
import { StackScreen } from '../routes'

const Login = ({ navigation }) => {
    return (
        <View style={Styles.container}>
            <Button onPress={() => navigation.replace(StackScreen.tabs)}>
                Login
            </Button>
        </View>
    )
}

export default Login
