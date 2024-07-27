import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const iconSize = 20;
const EventDetails = () => {
    return (
        <View style={styles.eventContainer}>
            <View style={styles.detailRow}>
                <View style={styles.detailTextContainer}>
                    <Text style={[styles.detailTitle, { fontSize: 24 }]}>
                        Art Show 🎨
                    </Text>
                    <Text style={styles.detailDescription}>
                        by olivia adams
                    </Text>
                </View>
            </View>
            <View style={[styles.detailRow, { marginTop: 10 }]}>
                {' '}
                {/* <FontAwesome name='clock-o' size={16} color='black' /> */}
                <FontAwesome name='calendar' size={iconSize} color='black' />
                <View style={styles.detailTextContainer}>
                    <Text style={styles.detailTitle}>Monday Nov 13,2023</Text>
                    <Text style={styles.detailDescription}>
                        6:00pm - 10:00 pm
                    </Text>
                </View>
            </View>
            <View style={styles.detailRow}>
                <FontAwesome name='map-marker' size={iconSize} color='black' />
                <View style={styles.detailTextContainer}>
                    <Text style={styles.detailTitle}>Address</Text>
                    <Text style={styles.detailDescription}>
                        123 Main Street, City
                    </Text>
                </View>
            </View>
            <View style={styles.detailRow}>
                <FontAwesome name='ticket' size={iconSize} color='black' />
                <View style={styles.detailTextContainer}>
                    <Text style={styles.detailTitle}>Tickets Left</Text>
                    <Text style={styles.detailDescription}>25</Text>
                </View>
            </View>
            <View style={styles.detailRow}>
                <FontAwesome name='dollar' size={iconSize} color='black' />
                <View style={styles.detailTextContainer}>
                    <Text style={styles.detailTitle}>Price</Text>
                    <Text style={styles.detailDescription}>$50</Text>
                </View>
            </View>
            <View style={{ marginTop: 10 }}>
                <Text style={styles.aboutTitle}>About this Event:</Text>
                <Text style={styles.eventDescription}>
                    This is a detailed description of the event. It includes all
                    the necessary information that attendees might need to know.
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    eventContainer: {
        padding: 20,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
    },
    detailRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    detailTextContainer: {
        marginLeft: 10,
    },
    detailTitle: {
        fontSize: 16,
        fontWeight: '600',
    },
    detailDescription: {
        fontSize: 14,
        color: '#666',
    },
    aboutTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    eventDescription: {
        fontSize: 16,
        lineHeight: 24,
    },
});

export default EventDetails;
