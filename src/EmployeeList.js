import React from 'react';
import { View, FlatList } from 'react-native';
import EmployeeCard from './EmployeeCard';
import EmployeeListItem from './EmployeeListItem';

const EmployeeList = ({ data, isCardView }) => {
    if (isCardView) {
        return (
            <View>
                <FlatList
                    data={data}
                    renderItem={({ item }) => <EmployeeCard employee={item} />}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
        );
    }
    else {
        return (
            <View>
                <FlatList
                    data={data}
                    renderItem={({ item }) => <EmployeeListItem employee={item} />}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
        );
    }
};

export default EmployeeList;
