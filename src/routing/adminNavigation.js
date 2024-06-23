import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ForgotPassword from '../screens/ForgotPassword/forgotPassword';
import ChangePassword from '../screens/ChangePassword/changePassword';
import AdminFeedBack from '../screens/Admin/AdminFeedBack/adminFeedBack';
import AdminAccount from '../screens/Admin/AdminAccount/adminAccount';
import AdminOrder from '../screens/Admin/AdminOrder/adminOrder';
import AdminHome from '../screens/Admin/AdminHome/adminHome';
import Revenue from '../screens/Admin/Revenue/revenue';
import OrderHistory from '../screens/OrderHistory/orderHistory';
import Login from '../screens/Login/login';
import Register from '../screens/Register/register';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const TabScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'AdminHome') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'AdminFeedBack') {
            iconName = focused ? 'file-text' : 'file-text-o';
          } else if (route.name === 'AdminOrder') {
            iconName = focused ? 'history' : 'history';
          } else if (route.name === 'AdminAccount') {
            iconName = focused ? 'user-circle' : 'user-circle-o';
          }
          // You can return any component that you like here!
          return route.name === 'AdminAccount' ? (
            <FontAwesome name={iconName} size={size} color={color} />
          ) : route.name === 'AdminFeedBack' ? (
            <FontAwesome name={iconName} size={size} color={color} />
          ) : route.name === 'AdminOrder' ? (
            <FontAwesome name={iconName} size={size} color={color} />
          ) : (
            <Ionicons name={iconName} size={size} color={color} />
          );
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}>
      <Tab.Screen name="AdminHome" component={AdminHome} />
      <Tab.Screen name="AdminFeedBack" component={AdminFeedBack} />
      <Tab.Screen name="AdminOrder" component={AdminOrder} />
      <Tab.Screen name="AdminAccount" component={AdminAccount} />
    </Tab.Navigator>
  );
};
const AdminNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Revenue">
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
        <Stack.Screen name="Revenue" component={Revenue} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AdminNavigation;
