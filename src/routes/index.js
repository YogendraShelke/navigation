import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {
    createStackNavigator,
    TransitionPresets
} from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Provider, DefaultTheme } from 'react-native-paper'
import color from 'color'
import { Login, ToDo, Local, Reports, Contacts } from '../screens'
import { Header, DrawerContent, ActionSheet } from '../components/'
import TabBar from '../components/TabBar'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet } from 'react-native'

const Tab = createBottomTabNavigator()
const activeTintColor = '#620ee8'
const inactiveTintColor = color(activeTintColor)
    .grayscale()
    .alpha(0.6)
    .string()

export const StackScreen = {
    login: 'Login',
    tabs: 'Tabs',
    toDo: 'ToDo',
    sheet: 'Sheet'
}

export const TabScreen = {
    local: 'Local',
    contacts: 'Contacts',
    reports: 'Reports'
}

const Tabs = () => (
    <Tab.Navigator
        tabBarOptions={{
            activeTintColor,
            inactiveTintColor
        }}
        tabBar={TabBar}
    >
        <Tab.Screen
            name={TabScreen.local}
            component={Local}
            options={{
                tabBarLabel: TabScreen.local,
                tabBarIcon: props => <Icon name="database" {...props} />
            }}
        />
        <Tab.Screen
            name={TabScreen.contacts}
            component={Contacts}
            options={{
                tabBarLabel: TabScreen.contacts,
                tabBarIcon: props => <Icon name="cloud" {...props} />
            }}
        />
        <Tab.Screen
            name={TabScreen.reports}
            component={Reports}
            options={{
                tabBarLabel: TabScreen.reports,
                tabBarIcon: props => <Icon name="chart-arc" {...props} />
            }}
        />
    </Tab.Navigator>
)

const MainStack = createStackNavigator()

const styles = StyleSheet.create({
    safeArea: { flex: 1, backgroundColor: 'white' }
})

const MainNavigator = () => (
    <SafeAreaView style={styles.safeArea}>
        <MainStack.Navigator
            headerMode="screen"
            screenOptions={{
                header: props => <Header {...props} />
            }}
        >
            <MainStack.Screen
                options={{
                    headerShown: false
                }}
                name={StackScreen.login}
                component={Login}
            />
            <MainStack.Screen
                name={StackScreen.tabs}
                component={Tabs}
                options={({ route: { state } }) => {
                    const headerTitle = state
                        ? state.routes[state.index].name
                        : TabScreen.local
                    return { headerTitle }
                }}
            />
        </MainStack.Navigator>
    </SafeAreaView>
)

const RootStack = createStackNavigator()

const RootNavigator = () => (
    <RootStack.Navigator
        screenOptions={({ route, navigation }) => ({
            gestureEnabled: true,
            cardOverlayEnabled: true,
            headerStatusBarHeight:
                navigation.dangerouslyGetState().routes.indexOf(route) > 0
                    ? 0
                    : undefined,
            ...TransitionPresets.ModalPresentationIOS
        })}
        mode="modal"
    >
        <RootStack.Screen
            options={{
                headerShown: false
            }}
            name="main"
            component={MainNavigator}
        />
        <RootStack.Screen
            name={StackScreen.toDo}
            component={ToDo}
            options={{
                headerTitle: 'To Do',
                headerMode: 'screen'
            }}
        />
        <RootStack.Screen
            options={{
                headerShown: false,
                cardStyle: { backgroundColor: 'transparent' },
                cardOverlayEnabled: true
            }}
            name={StackScreen.sheet}
            component={ActionSheet}
        />
    </RootStack.Navigator>
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
                <Screen name="Home" component={RootNavigator} />
            </Navigator>
        </NavigationContainer>
    </Provider>
)
