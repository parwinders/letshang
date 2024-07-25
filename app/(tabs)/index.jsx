import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import EventDetails from '../../components/events/EventDetails';

const App = () => {
    // ref
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
            <View style={styles.container}>
                <BottomSheet
                    ref={bottomSheetRef}
                    index={1} // initial snap point index
                    snapPoints={snapPoints}
                    onChange={handleSheetChanges}
                >
                    <BottomSheetView style={styles.contentContainer}>
                        <Text>Awesome 🎉</Text>
                        <EventDetails />
                        {/* <View
                            style={{
                                backgroundColor: 'red',
                                height: 50,
                                width: '100%',
                            }}
                        ></View> */}
                    </BottomSheetView>
                </BottomSheet>
            </View>
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: 'grey',
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
    },
});

export default App;
