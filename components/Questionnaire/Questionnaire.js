import React, { useEffect, useState } from 'react';
import { useNavigation } from 'expo-router';
import { RecoilRoot, useRecoilState, useRecoilValueLoadable } from 'recoil';
import {
    fetchEventsSelector,
    questionState,
} from '../../app/recoilState/rstate';
import {
    StyleSheet,
    View,
    Text,
    Button,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Animated, {
    FadeIn,
    FadeOut,
    ZoomInRight,
    ZoomOutLeft,
} from 'react-native-reanimated';
import { FontAwesome } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import MultiSelect from './MultiSelect';

const { primary, secondary } = Colors.letshang;

const SelectableButton = ({ label, onPress, selected }) => {
    return (
        <TouchableOpacity
            style={[
                styles.button,
                {
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'baseline',
                    justifyContent: 'center',
                },
                styles.buttonWrapper,
            ]}
            onPress={onPress}
        >
            <View>
                <Text style={styles.buttonText}>{label}</Text>
            </View>
            <View style={{ position: 'absolute', right: 0, marginRight: 10 }}>
                {selected && (
                    <Animated.View entering={FadeIn} exiting={FadeOut}>
                        <FontAwesome
                            name='check-circle'
                            size={20}
                            color={primary}
                            style={styles.icon}
                        />
                    </Animated.View>
                )}
            </View>
        </TouchableOpacity>
    );
};

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
    }, [eventsLoadable, setEvents]);

    useEffect(() => {
        console.log('Events:', events);
    }, [events]);

    const handleNavigate = () => {
        navigation.navigate('Event');
    };

    useEffect(() => {
        console.log({ questionIndex });
        console.log({ complete });
    }, [questionIndex, complete]);

    const handleNextQuestion = () => {
        if (questionIndex === events.length - 1) {
            setComplete(true);
        } else {
            setQuestionIndex((prevIndex) => prevIndex + 1);
        }
    };

    const renderQuestionContent = () => {
        if (!events.length) return null;

        const currentEvent = events[questionIndex];
        const { question, type, options } = currentEvent;

        return (
            <Animated.View
                key={questionIndex}
                entering={ZoomInRight}
                exiting={ZoomOutLeft}
            >
                <Text style={styles.numberText}>{`Question ${
                    questionIndex + 1
                } of ${events.length}`}</Text>
                <Text style={styles.questionText}>{question}</Text>
                {type === 'simple' && (
                    <TextInput
                        key={questionIndex}
                        style={styles.input}
                        placeholder='Write your answer here'
                        placeholderTextColor='#c5beff'
                    />
                )}
                {type === 'boolean' && (
                    <View>
                        <View style={{ marginBottom: 10 }}>
                            {['Yes', 'No'].map((opt) => (
                                <TouchableOpacity
                                    style={[
                                        styles.button,
                                        {
                                            flex: 1,
                                            flexDirection: 'row',
                                            alignItems: 'baseline',
                                            justifyContent: 'center',
                                        },
                                        styles.buttonWrapper,
                                    ]}
                                    onPress={handleNextQuestion}
                                >
                                    <View>
                                        <Text style={styles.buttonText}>
                                            {opt}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                )}
                {type === 'enum' && (
                    <View>
                        {/* {options.map((option) => (
                            <SelectableButton
                                onSelect={() => setComplete(true)}
                                key={option.id}
                                title={option.value}
                            />
                        ))} */}
                        <MultiSelect
                            options={options}
                            onComplete={() => setComplete(true)}
                            onPending={() => setComplete(false)}
                        >
                            <SelectableButton />
                        </MultiSelect>
                    </View>
                )}
            </Animated.View>
        );
    };

    return (
        <LinearGradient
            colors={['hsl(248, 100%, 91%)', 'hsl(256, 100%, 96%)']}
            start={[0, 0]}
            end={[1, 0]}
            locations={[0, 1]}
            style={styles.container}
        >
            <Text
                onPress={handleNavigate}
                style={[styles.moveText, styles.absoluteTopLeft]}
            >
                Move to Event
            </Text>
            <View>{renderQuestionContent()}</View>
            <View style={styles.footer} key={questionIndex}>
                {events?.[questionIndex]?.type === 'simple' || complete ? (
                    <Button
                        key={complete}
                        disabled={!events.length}
                        title={!complete ? 'Next Question' : 'Claim Ticket'}
                        onPress={
                            !complete ? handleNextQuestion : handleNavigate
                        }
                        color={primary}
                    />
                ) : (
                    <></>
                )}
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: '10%',
    },
    absoluteTopLeft: {
        position: 'absolute',
        top: 50,
        left: 10,
    },
    text: {
        fontSize: 20,
        color: 'white',
    },
    numberText: {
        fontSize: 16,
        color: primary,
    },
    moveText: {
        fontSize: 10,
        color: 'black',
    },
    questionText: {
        fontSize: 20,
        color: 'black',
        marginBottom: 20,
        fontWeight: '500',
    },
    input: {
        marginVertical: 10,
        padding: 5,
        color: 'black',
        fontSize: 20,
    },
    buttonWrapper: {
        marginBottom: 10,
        backgroundColor: secondary,
        borderRadius: 5,
        padding: 10,
    },
    buttonText: {
        fontSize: 20,
        textTransform: 'capitalize',
        color: primary,
    },
    footer: {
        borderRadius: 40,
        overflow: 'hidden',
        width: '80%',
        position: 'absolute',
        bottom: '10%',
    },
    placeholder: {
        fontSize: 20,
    },
});

export default QuestionnaireScreen;
