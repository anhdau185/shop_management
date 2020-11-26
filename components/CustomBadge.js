import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CustomBadge = ({ text, color = '#fff', backgroundColor = '#4db856' }) => {
    return (
        <View style={{ ...styles.textWrapper, backgroundColor: backgroundColor }}>
            <Text style={{ ...styles.text, color: color }}>
                {text}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textWrapper: {
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 4
    },
    text: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold'
    }
});

export default CustomBadge;