// StackNavigation.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import HomeIcon from '../assets/icons/HomeIcon';
import SettingsIcon from '../assets/icons/SettingIcon';
import TripsScreen from '../screens/TripsScreen';
import SettingsScreen from '../screens/SettingScreen';
import { useAuth } from '../Auth/AuthContext';
import PickUpIcon from '../assets/icons/PicupIcon';

const SCREENS = {
  LOGIN: 'Login',
  HOME: 'Home',
  TRIPS: 'Trips',
  SETTINGS: 'Settings',
};

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function StackNavigation() {
  const { user } = useAuth();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!user ? (
        <Stack.Screen name={SCREENS.LOGIN} component={LoginScreen} />
      ) : (
        <>
          <Stack.Screen name={SCREENS.HOME} component={TabNavigator} />
          <Stack.Screen name={SCREENS.TRIPS} component={TripsScreen} />
          <Stack.Screen name={SCREENS.SETTINGS} component={SettingsScreen} />
        </>
      )}
    </Stack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName={SCREENS.HOME}
      screenOptions={({ route }) => ({
        headerShown: false,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars, react/no-unstable-nested-components
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === SCREENS.HOME) {
            return <HomeIcon width={20} height={20} color={color} />;
          } else if (route.name === SCREENS.TRIPS) {
            return <PickUpIcon width={24} height={24} color={color} />;
          } else if (route.name === SCREENS.SETTINGS) {
            return <SettingsIcon width={24} height={24} color={color} />;
          }
        },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'black',
      })}
    >
      <Tab.Screen
        name={SCREENS.HOME}
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarActiveTintColor: '#171212',
          tabBarInactiveTintColor: '#876363',
        }}
      />
      <Tab.Screen
        name={SCREENS.TRIPS}
        component={TripsScreen}
        options={{
          title: 'Trips',
          tabBarActiveTintColor: '#171212',
          tabBarInactiveTintColor: '#876363',
        }}
      />
      <Tab.Screen
        name={SCREENS.SETTINGS}
        component={SettingsScreen}
        options={{
          title: 'Settings',
          tabBarActiveTintColor: '#171212',
          tabBarInactiveTintColor: '#876363',
        }}
      />
    </Tab.Navigator>
  );
}
