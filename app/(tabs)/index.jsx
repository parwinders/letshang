import React, { useCallback, useMemo, useRef, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    ImageBackground,
    Dimensions,
} from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import EventDetails from '../../components/events/EventDetails';
import { Colors } from '@/constants/Colors';

const App = () => {
    const [waitingForApproval, setWaitingForApproval] = useState(false);
    const bottomSheetRef = useRef(null);

    // snap points
    const snapPoints = useMemo(() => ['25%', '60%', '90%'], []);

    // callbacks
    const handleSheetChanges = useCallback((index) => {
        console.log('handleSheetChanges', index);
    }, []);

    // renders
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <ImageBackground
                source={{
                    uri: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                }}
                style={styles.imageBackground}
            >
                <View style={styles.container}>
                    <View
                        style={{
                            backgroundColor: 'white',
                            width: Dimensions.get('window').width,
                            height: '10%',
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            zIndex: 2,
                            padding: 20,
                            shadowColor: 'grey',
                            shadowRadius: 10,
                        }}
                    >
                        <View
                            style={{
                                borderRadius: 40,
                                overflow: 'hidden',
                            }}
                        >
                            {!waitingForApproval ? (
                                <Button
                                    title='Buy Ticket'
                                    color={Colors.letshang.primary}
                                    onPress={() => {
                                        console.log('Ticket Purchased');
                                        setWaitingForApproval(true);
                                    }}
                                />
                            ) : (
                                <Button
                                    title='Waiting for approval'
                                    color={'orange'}
                                    onPress={() => {}}
                                    st
                                />
                            )}
                        </View>
                    </View>
                    <BottomSheet
                        ref={bottomSheetRef}
                        index={1} // initial snap point index
                        snapPoints={snapPoints}
                        onChange={handleSheetChanges}
                    >
                        <BottomSheetView style={styles.contentContainer}>
                            <EventDetails />
                        </BottomSheetView>
                    </BottomSheet>
                </View>
            </ImageBackground>
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    imageBackground: {
        flex: 1,
    },
    container: {
        flex: 1,
        padding: 24,
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
    },
});

export default App;
