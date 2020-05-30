import React from 'react'
import {
    StyleSheet,
    View,
    TouchableWithoutFeedback,
    StatusBar
} from 'react-native'

const ActionSheet = ({ navigation, route }) => {
    return (
        <>
            <StatusBar barStyle="light-content" />
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={navigation.goBack}>
                    <View style={styles.container} />
                </TouchableWithoutFeedback>
                <View style={styles.sheet}>
                    {route.params.content(navigation)}
                </View>
            </View>
        </>
    )
}

export default ActionSheet

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        flex: 1
    },
    sheet: {
        backgroundColor: 'white',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        padding: 10,
        paddingBottom: 50
    }
})
