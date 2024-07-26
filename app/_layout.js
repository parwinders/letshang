import React, { useEffect } from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import App from './(tabs)';
import { useNavigation } from 'expo-router';
import { RecoilRoot, useRecoilState, useRecoilValueLoadable } from 'recoil';
import { eventsState, fetchEventsSelector } from './recoilState/rstate';
import QuestionnaireScreen from '../components/Questionnaire/Questionnaire';

const Stack = createStackNavigator();

export default function Layout() {
    return (
        <RecoilRoot>
            <NavigationContainer independent={true}>
                <Stack.Navigator
                    initialRouteName='Question'
                    screenOptions={{ headerShown: false }}
                >
                    <Stack.Screen
                        name='Question'
                        component={() => <QuestionnaireScreen />}
                    />
                    <Stack.Screen
                        name='Event'
                        component={() => <App />}
                        options={{
                            // headerBackTitleVisible: true,
                            headerShown: true,
                            headerTitleAlign: 'center', // Center the header title
                            headerTransparent: true, // Make the header transparent
                            headerTintColor: 'white', // Set the color
                        }} // This shows the back button
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </RecoilRoot>
    );
}
