import { StatusBar } from 'expo-status-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';

const Tab = createBottomTabNavigator();

export const SCREEN_HOME = "Home"
export const SCREEN_SCANNER= "Scanner"

const INIT_SCREEN = SCREEN_HOME;

import Home from './screens/Home';
import ScannerScreen from './screens/ScannerScreen';

export default function App() {

  const [login, setLogin] = useState(false);


    return (
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="#b7e4c7" />
        <Tab.Navigator
          initialRouteName={INIT_SCREEN}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              switch (route.name) {
                case SCREEN_HOME: focused ? iconName = "home-sharp" : iconName = "home-outline"; break;
                case SCREEN_SCANNER: focused ? iconName = "camera-sharp" : iconName = "camera-sharp"; break;
                default: iconName = "information-circle";
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#334249',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name={SCREEN_HOME} component={Home} options={{ title: 'Vítejte!', headerStyle: { backgroundColor: '#a3bac3' } }} />
          <Tab.Screen name={SCREEN_SCANNER} component={ScannerScreen} options={{ title: 'Camera', headerStyle: { backgroundColor: '#a3bac3' } }} />
         </Tab.Navigator>
      </NavigationContainer>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    padding: 45,
  },
});