import React from 'react'
import { Provider } from 'react-redux'
import Routes from './src/routes'
import store from './src/store'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default () => (
    <SafeAreaProvider>
        <Provider store={store}>
            <Routes />
        </Provider>
    </SafeAreaProvider>
)
