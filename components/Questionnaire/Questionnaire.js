import React, { useEffect, useState } from 'react';
import { useNavigation } from 'expo-router';
import { RecoilRoot, useRecoilState, useRecoilValueLoadable } from 'recoil';
import {
    fetchEventsSelector,
    questionState,
} from '../../app/recoilState/rstate';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';

const QuestionnaireScreen = () => {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [complete, setComplete] = useState(false);
    const navigation = useNavigation();
    const [events, setEvents] = useRecoilState(questionState);
    const eventsLoadable = useRecoilValueLoadable(fetchEventsSelector);

    useEffect(() => {
        if (eventsLoadable.state === 'hasValue') {
            setEvents(eventsLoadable.contents);
        }
    }, [eventsLoadable]);

    useEffect(() => {
        console.log('parwinder', { events });
    });
    const onPress = () => {
        navigation.navigate('Event');
    };
    const onPressNext = () => {
        if (questionIndex === events.length - 1) {
            setComplete(true);
            return;
        }
        setQuestionIndex((st) => st + 1);
    };

    return (
        <View style={styles.container}>
            <Text
                onPress={onPress}
                style={[
                    { position: 'absolute', top: 0, left: 0 },
                    { ...styles.movetext },
                ]}
            >
                Move to Event
            </Text>
            <View>
                {events.length ? (
                    <>
                        <Text style={styles.numbertext}>{`question ${
                            questionIndex + 1
                        } of ${events.length}`}</Text>
                        <Text
                            style={styles.text}
                        >{`${events[questionIndex].question}`}</Text>
                        {events[questionIndex]?.type === 'simple' ? (
                            <TextInput
                                key={questionIndex}
                                placeholder='Write your answer here'
                                placeholderTextColor={'blue'}
                            />
                        ) : (
                            <></>
                        )}
                        {events[questionIndex]?.type === 'boolean' ? (
                            <View>
                                <View style={{ marginBottom: 20 }}>
                                    <Button title='yes' />
                                </View>
                                <Button title='No' />
                            </View>
                        ) : (
                            <></>
                        )}
                        {events[questionIndex]?.type === 'enum' ? (
                            <TextInput
                                key={questionIndex}
                                placeholder='Write your answer here'
                                placeholderTextColor={'blue'}
                            />
                        ) : (
                            <></>
                        )}
                    </>
                ) : (
                    <></>
                )}
            </View>
            <View
                style={{
                    borderRadius: 40,
                    overflow: 'hidden',
                    width: '80%',
                    position: 'absolute',
                    bottom: '10%',
                }}
            >
                <Button
                    disabled={!events.length}
                    title={!complete ? 'Next question' : 'Claim Ticket'}
                    onPress={onPressNext}
                />
            </View>
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
        fontSize: 20,
        color: 'white',
    },
    numbertext: {
        fontSize: 16,
        color: 'white',
        // position: 'relative',
        // right: 60,
    },
    movetext: {
        fontSize: 16,
        color: 'white',
    },
});

export default QuestionnaireScreen;
