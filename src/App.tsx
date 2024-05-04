import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import Home from './screens/home/Home';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'transparent'}  translucent={true} />
      <Routes />
    </NavigationContainer>
  );
}

