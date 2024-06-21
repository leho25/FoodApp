import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/home';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HomeDetail from '../screens/HomDetail/homeDetail';
import Cart from '../screens/Cart/cart';
import ForgotPassword from '../screens/ForgotPassword/forgotPassword';
import ChangePassword from '../screens/ChangePassword/changePassword';
import Account from '../screens/Account/account';
import OrderHistory from '../screens/OrderHistory/orderHistory';
import FeedBack from '../screens/FeedBack/feedBack';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const TabScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Cart') {
            iconName = focused ? 'cart' : 'cart-outline';
          } else if (route.name === 'FeedBack') {
            iconName = focused ? 'file-text' : 'file-text-o';
          } else if (route.name === 'Account') {
            iconName = focused ? 'user-circle' : 'user-circle-o';
          }
          // You can return any component that you like here!
          return route.name === 'Account' ? (
            <FontAwesome name={iconName} size={size} color={color} />
          ) : route.name === 'FeedBack' ? (
            <FontAwesome name={iconName} size={size} color={color} />
          ) : (
            <Ionicons name={iconName} size={size} color={color} />
          );
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="FeedBack" component={FeedBack} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
        <Stack.Screen name="OrderHistory" component={OrderHistory} />
        <Stack.Screen name="TabScreen" component={TabScreen} />
        <Stack.Screen name="HomeDetail" component={HomeDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
