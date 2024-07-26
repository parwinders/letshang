import React from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import App from './(tabs)';
import { useNavigation } from 'expo-router';
// Import any other screens if needed
// import ExploreScreen from './ExploreScreen';

const QuestionnaireScreen = () => {
    const navigation = useNavigation();
    const onPress = () => {
        navigation.navigate('Event');
    };
    return (
        <View style={styles.container}>
            <Text onPress={onPress} style={styles.text}>
                Explore Screen
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#add8e6', // Light blue background color
    },
    text: {
        fontSize: 24,
        color: 'white',
    },
});

const Stack = createStackNavigator();

export default function Layout() {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator
                initialRouteName='Question'
                screenOptions={{ headerShown: true }}
            >
                <Stack.Screen
                    name='Question'
                    component={() => <QuestionnaireScreen />}
                    options={{
                        // headerBackTitleVisible: true,
                        headerShown: true,
                        headerTitleAlign: 'center', // Center the header title
                        headerTransparent: true, // Make the header transparent
                        headerTintColor: 'white', // Set the color
                    }} // This shows the back button
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
    );
}
