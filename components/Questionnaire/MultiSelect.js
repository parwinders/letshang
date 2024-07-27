import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    CheckBox,
} from 'react-native';

const MultiSelect = ({ onComplete, onPending, children, options }) => {
    const [selectedOptions, setSelectedOptions] = useState([]);

    const toggleOption = (option) => {
        if (selectedOptions.includes(option.id)) {
            setSelectedOptions(
                selectedOptions.filter((item) => item !== option.id)
            );
        } else {
            setSelectedOptions([...selectedOptions, option.id]);
        }
    };

    useEffect(() => {
        console.log({ selectedOptions });
        if (selectedOptions.length) {
            onComplete();
        } else {
            onPending();
        }
    }, [selectedOptions]);

    const isSelected = (optionId) => selectedOptions.includes(optionId);

    return (
        <View style={styles.container}>
            <FlatList
                data={options}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.optionContainer}
                        onPress={() => toggleOption(item)}
                    >
                        {React.Children.map(children, (child) =>
                            React.cloneElement(child, {
                                label: item.value,
                                selected: isSelected(item.id),
                                onPress: () => toggleOption(item),
                            })
                        )}
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    optionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    optionLabel: {
        fontSize: 16,
        marginLeft: 10,
    },
    selectedContainer: {
        marginTop: 20,
    },
    selectedTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    selectedItem: {
        fontSize: 16,
        marginTop: 5,
    },
    noSelection: {
        fontSize: 16,
        color: 'gray',
    },
});

export default MultiSelect;
