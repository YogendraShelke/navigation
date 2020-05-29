import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Provider, DefaultTheme } from 'react-native-paper'
import color from 'color'
import { Login, AlertDetails, Subjects, Reports, Alerts } from '../screens'
import { Header, DrawerContent } from '../components/'
import TabBar from '../components/TabBar'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Tab = createBottomTabNavigator()
const activeTintColor = '#620ee8'
const inactiveTintColor = color(activeTintColor)
    .grayscale()
    .alpha(0.6)
    .string()

const iconProps = { color: inactiveTintColor, size: 24 }

const Tabs = () => (
    <Tab.Navigator
        tabBarOptions={{
            activeTintColor,
            inactiveTintColor
        }}
        tabBar={TabBar}
    >
        <Tab.Screen
            name="Subjects"
            component={Subjects}
            options={{
                tabBarLabel: 'Subjects',
                tabBarIcon: () => <Icon name="home-account" {...iconProps} />
            }}
        />
        <Tab.Screen
            name="Alerts"
            component={Alerts}
            options={{
                tabBarLabel: 'Alerts',
                tabBarIcon: () => <Icon name="bell-outline" {...iconProps} />
            }}
        />
        <Tab.Screen
            name="Reports"
            component={Reports}
            options={{
                tabBarLabel: 'Reports',
                tabBarIcon: () => (
                    <Icon name="message-text-outline" {...iconProps} />
                )
            }}
        />
    </Tab.Navigator>
)

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
    colors: { ...DefaultTheme.colors, primary: activeTintColor }
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
