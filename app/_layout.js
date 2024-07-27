import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import App from './(tabs)';
import { RecoilRoot } from 'recoil';
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
                        children={() => <QuestionnaireScreen />}
                    />
                    <Stack.Screen
                        name='Event'
                        children={() => <App />}
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
