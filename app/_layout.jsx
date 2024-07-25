import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';
import App from './(tabs)';

const Stack = createStackNavigator();

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator
                initialRouteName='Home'
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name='Home' component={() => <App />} />
                {/* <Stack.Screen name="Explore" component={ExploreScreen} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                headerShown: false,
            }}
        >
            <Tabs.Screen
                name='index'
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon
                            name={focused ? 'home' : 'home-outline'}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name='explore'
                options={{
                    title: 'Explore',
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon
                            name={focused ? 'code-slash' : 'code-slash-outline'}
                            color={color}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}
