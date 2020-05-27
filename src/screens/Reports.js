import React from 'react'
import { View } from 'react-native'
import Styles from './Styles'
import { Button } from 'react-native-paper'

const Reports = ({ navigation }) => {
    return (
        <View style={Styles.container}>
            <Button onPress={() => navigation.push('AlertDetails')}>
                Next
            </Button>
        </View>
    )
}

export default Reports
