import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { Provider, DefaultTheme, useTheme } from 'react-native-paper'
import color from 'color'

import { Login, AlertDetails, Subjects, Reports, Alerts } from '../screens'
import { Header, DrawerContent } from '../components/'

const Tab = createMaterialBottomTabNavigator()

const Tabs = () => {
    const { surface, primary, text } = useTheme().colors

    const tabBarColor = surface

    return (
        <Tab.Navigator
            initialRouteName="Subjects"
            backBehavior="initialRoute"
            shifting={true}
            activeColor={primary}
            inactiveColor={color(text)
                .alpha(0.5)
                .rgb()
                .string()}
            sceneAnimationEnabled={false}
        >
            <Tab.Screen
                name="Subjects"
                component={Subjects}
                options={{
                    tabBarIcon: 'home-account',
                    tabBarColor
                }}
            />
            <Tab.Screen
                name="Alerts"
                component={Alerts}
                options={{
                    tabBarIcon: 'bell-outline',
                    tabBarColor
                }}
            />
            <Tab.Screen
                name="Reports"
                component={Reports}
                options={{
                    tabBarIcon: 'message-text-outline',
                    tabBarColor
                }}
            />
        </Tab.Navigator>
    )
}

const Stack = createStackNavigator()

const StackNavigator = () => (
    <Stack.Navigator
        headerMode="screen"
        screenOptions={{
            header: props => <Header {...props} />
        }}
    >
        <Stack.Screen
            options={{
                headerShown: false
            }}
            name="Login"
            component={Login}
        />
        <Stack.Screen
            name="Tabs"
            component={Tabs}
            options={({ route: { state } }) => {
                const headerTitle = state
                    ? state.routes[state.index].name
                    : 'Subjects'
                return { headerTitle }
            }}
        />
        <Stack.Screen
            name="AlertDetails"
            component={AlertDetails}
            options={{
                headerTitle: 'Alert Details'
            }}
        />
    </Stack.Navigator>
)

const { Navigator, Screen } = createDrawerNavigator()

const theme = {
    ...DefaultTheme,
    colors: { ...DefaultTheme.colors, primary: '#1ba1f2' }
}

export default () => (
    <Provider theme={theme}>
        <NavigationContainer>
            <Navigator drawerContent={props => <DrawerContent {...props} />}>
                <Screen name="Home" component={StackNavigator} />
            </Navigator>
        </NavigationContainer>
    </Provider>
)
