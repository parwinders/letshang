import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const QuestionnaireScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Explore Screen</Text>
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

export default QuestionnaireScreen;
