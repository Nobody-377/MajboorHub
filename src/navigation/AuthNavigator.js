import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/auth/Splash';
import Onboarding from '../screens/auth/Onboarding';
import OTPLogin from '../screens/auth/OTPLogin';
import RoleSelection from '../screens/auth/RoleSelection';

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="OTPLogin" component={OTPLogin} />
      <Stack.Screen name="RoleSelection" component={RoleSelection} />
    </Stack.Navigator>
  );
}
