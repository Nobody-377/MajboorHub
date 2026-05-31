import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Search, User, FileText } from 'lucide-react-native';

import CustomerHome from '../screens/customer/CustomerHome';
import SearchScreen from '../screens/customer/SearchScreen';
import WorkerProfile from '../screens/customer/WorkerProfile';
import BookingScreen from '../screens/customer/BookingScreen';
import ProfileScreen from '../screens/customer/ProfileScreen';

import colors from '../utils/colors';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function CustomerTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Home') return <Home size={size} color={color} />;
          if (route.name === 'Search') return <Search size={size} color={color} />;
          if (route.name === 'Bookings') return <FileText size={size} color={color} />;
          if (route.name === 'Profile') return <User size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.accent,
        tabBarInactiveTintColor: colors.textLight,
        headerShown: false,
        tabBarStyle: { borderTopWidth: 0, elevation: 10, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 10, height: 60, paddingBottom: 10 },
      })}
    >
      <Tab.Screen name="Home" component={CustomerHome} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Bookings" component={ProfileScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function CustomerNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tabs" component={CustomerTabs} />
      <Stack.Screen name="WorkerProfile" component={WorkerProfile} />
      <Stack.Screen name="Booking" component={BookingScreen} />
    </Stack.Navigator>
  );
}
