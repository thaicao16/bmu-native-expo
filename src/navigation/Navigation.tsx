import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import LoginScreen from '../features/auth/LoginScreen';
import { OtpScreen } from '../features/auth/OtpScreen';
import { ScreenName } from '../constants/ScreenName';
import { lightTheme } from '../styles/Theme';
import { GlobalContextProvider } from '../features/auth/GlobalScopeProvider';
import { HomeScreen } from '../features/home/HomeScreen';
import { SplashScreen } from '../features/splash/SplashScreen';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ProfileScreen } from '../features/profile/ProfileScreen';
import { OrderError } from '../features/orderError/OrderErrorScreen';

const Stack = createStackNavigator();
const LoginStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const OrderErrorStack = createStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Splash'}
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={'Auth'}
        component={AuthStackScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ScreenName.MAIN_DRAWER}
        component={MainStackScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const AuthStackScreen: React.FC = () => {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen
        name={ScreenName.LOGIN}
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <LoginStack.Screen name={ScreenName.VERIFY_OTP} component={OtpScreen} />
    </LoginStack.Navigator>
  );
};

function HomeStackScreen() {
  return (
    <HomeStack.Navigator initialRouteName={ScreenName.HOME}>
      <HomeStack.Screen name={ScreenName.HOME} component={HomeScreen} options={{ headerShown: false }} />
    </HomeStack.Navigator>
  );
}

function OrderErrorStackScreen() {
  return (
    <OrderErrorStack.Navigator initialRouteName={ScreenName.ORDER_MONITORING}>
      <OrderErrorStack.Screen name={ScreenName.ORDER_MONITORING} component={OrderError} options={{ headerShown: false }} />
    </OrderErrorStack.Navigator>
  );
}

function ProfilesStackScreen() {
  return (
    <ProfileStack.Navigator initialRouteName={ScreenName.PROFILE}>
      <ProfileStack.Screen name={ScreenName.PROFILE} component={ProfileScreen} options={{ headerShown: false }} />
    </ProfileStack.Navigator>
  );
}

const MainStackScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName={ScreenName.HOME}
      backBehavior="initialRoute"
      // shifting={true}
      activeColor={lightTheme.colors.red}
      inactiveColor={lightTheme.colors.gray}
      barStyle={{ backgroundColor: lightTheme.colors.white}}
      sceneAnimationEnabled={false}>
        
      <Tab.Screen
        name='Tab1'
        component={HomeStackScreen}
        options={{
          tabBarLabel: ScreenName.HOME,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home-outline" color={color} size={24} />
          ),
        }} />
      <Tab.Screen
        name='Tab2'
        component={OrderErrorStackScreen}
        options={{
          tabBarLabel: ScreenName.ORDER_MONITORING,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="chart-bar" color={color} size={24} />
          ),
        }} />
      <Tab.Screen
        name='Tab3'
        component={ProfilesStackScreen}
        options={{
          tabBarLabel: ScreenName.PROFILE,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={24} />
          ),
        }} />
    </Tab.Navigator>
  );
}

const AppRoot = () => {
  return (
    <NavigationContainer>
      <PaperProvider theme={lightTheme}>
        <GlobalContextProvider>
          <AppNavigator />
        </GlobalContextProvider>
      </PaperProvider>
    </NavigationContainer>
  );
};

export default AppRoot;
