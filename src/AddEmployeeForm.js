import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';

const AddEmployeeForm = ({ onAddEmployee, onFormClose }) => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [parentId, setParentId] = useState(null);
    const [backgroundColor, setBackgroundColor] = useState('white');


    const handleAddEmployee = () => {
        const newEmployee = {
            id: Math.floor(Math.random() * 1000),
            name,
            email,
            address,
            phone,
            parentId,
            backgroundColor,

        };

        if (id === '', name === '' || email === '' || phone === '' || address === '' || parentId === '' || backgroundColor === '') {
            alert('Please fill all the fields');
            return;
        };


        onAddEmployee(newEmployee);

        setId('');
        setName('');
        setEmail('');
        setPhone('');
        setAddress('');
        setParentId(null);
        setBackgroundColor('');

        onFormClose();

    };

    return (
        <View style={styles.formContainer}>
            <TextInput
                style={styles.input}
                placeholder="Name"
                value={name}
                onChangeText={(text) => setName(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Phone"
                value={phone}
                onChangeText={(text) => setPhone(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Address"
                value={address}
                onChangeText={(text) => setAddress(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Parent Id"
                value={parentId}
                onChangeText={(text) => setParentId(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Background Color"
                value={backgroundColor}
                onChangeText={(text) => setBackgroundColor(text)}
            />
            <Button title="Add Employee" onPress={handleAddEmployee} />
            <TouchableOpacity onPress={onFormClose}>
                <Text style={styles.closeButton}>Close</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    formContainer: {
        padding: 10,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
});

export default AddEmployeeForm;
