import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const EventDetails = () => {
    return (
        <View style={styles.eventContainer}>
            <Text style={styles.eventName}>Event Name</Text>
            <Text style={styles.organizerName}>
                Organized by: Organizer Name
            </Text>
            <Text style={styles.eventDate}>Date: July 15, 2024</Text>
            <Text style={styles.eventAddress}>
                Address: 123 Main Street, City
            </Text>
            <Text style={styles.ticketsLeft}>Tickets Left: 25</Text>
            <Text style={styles.price}>Price: $50</Text>
            <Text style={styles.aboutTitle}>About this Event:</Text>
            <Text style={styles.eventDescription}>
                This is a detailed description of the event. It includes all the
                necessary information that attendees might need to know.
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    eventContainer: {
        padding: 20,
    },
    eventName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    organizerName: {
        fontSize: 18,
        marginBottom: 10,
    },
    eventDate: {
        fontSize: 16,
        marginBottom: 5,
    },
    eventAddress: {
        fontSize: 16,
        marginBottom: 5,
    },
    ticketsLeft: {
        fontSize: 16,
        marginBottom: 5,
    },
    price: {
        fontSize: 16,
        marginBottom: 10,
    },
    aboutTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    eventDescription: {
        fontSize: 16,
        marginBottom: 20,
    },
});

export default EventDetails;
