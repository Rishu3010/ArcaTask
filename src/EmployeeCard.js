import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';

const EmployeeCard = ({ employee }) => {
    return (
        <View style={styles.cardContainer}>
            <Card containerStyle={{ backgroundColor: employee.backgroundColor }}>
                <Text>Name: {employee.name}</Text>
                <Text>Email: {employee.email}</Text>
                <Text>Phone: {employee.phone}</Text>
                <Text>Manager: {employee.parentName}</Text>
                <Text>subordinates: {employee.subOrdinates}</Text>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        marginVertical: 10,
    },
});

export default EmployeeCard;
