import React from 'react'
import { View } from 'react-native'
import Styles from './Styles'
import { Button } from 'react-native-paper'

const Login = ({ navigation }) => {
    return (
        <View style={Styles.container}>
            <Button onPress={() => navigation.replace('Tabs')}>Login</Button>
        </View>
    )
}

export default Login
