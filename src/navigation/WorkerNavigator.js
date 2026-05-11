import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Briefcase, DollarSign, User } from 'lucide-react-native';

import WorkerDashboard from '../screens/worker/WorkerDashboard';
import JobRequests from '../screens/worker/JobRequests';
import ActiveJob from '../screens/worker/ActiveJob';
import WorkerProfile from '../screens/worker/WorkerProfileEdit';

import colors from '../utils/colors';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function WorkerTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Dashboard') return <Home size={size} color={color} />;
          if (route.name === 'Jobs') return <Briefcase size={size} color={color} />;
          if (route.name === 'Earnings') return <DollarSign size={size} color={color} />;
          if (route.name === 'Profile') return <User size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.accent,
        tabBarInactiveTintColor: colors.textLight,
        headerShown: false,
        tabBarStyle: { borderTopWidth: 0, elevation: 10, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 10, height: 60, paddingBottom: 10 },
      })}
    >
      <Tab.Screen name="Dashboard" component={WorkerDashboard} />
      <Tab.Screen name="Jobs" component={JobRequests} />
      <Tab.Screen name="Earnings" component={WorkerDashboard} /> 
      <Tab.Screen name="Profile" component={WorkerProfile} />
    </Tab.Navigator>
  );
}

export default function WorkerNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tabs" component={WorkerTabs} />
      <Stack.Screen name="ActiveJob" component={ActiveJob} />
    </Stack.Navigator>
  );
}
