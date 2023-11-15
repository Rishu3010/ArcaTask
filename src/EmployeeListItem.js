import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EmployeeListItem = ({ employee }) => {
    return (
        <View style={styles.listItem}>
            <Text>Name: {employee.name}</Text>
            <Text>Email: {employee.email}</Text>
            <Text>Phone: {employee.phone}</Text>
            <Text>Manager: {employee.parentName}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        borderRadius: 5,
        flexWrap: 'wrap',
    },
});

export default EmployeeListItem;
