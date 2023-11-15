import React, { useEffect, useState } from 'react';
import { View, Text, Button, SafeAreaView, Switch, StyleSheet } from 'react-native';
import axios from 'axios';
import EmployeeList from './src/EmployeeList';
import AddEmployeeForm from './src/AddEmployeeForm';

const API_URL = 'https://mocki.io/v1/3a4b56bd-ad05-4b12-a181-1eb9a4f5ac8d';

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [showCardView, setShowCardView] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);


  useEffect(() => {
    fetchData();
  }, []);



  const fetchData = async () => {
    try {
      const response = await axios.get(API_URL); //Fetch the data from the API
      const responseData = response.data;


      let empData = responseData.map((employee) => { //Map the data to add parentName and subOrdinates
        let parentName = getParentName(employee.parentId, responseData);
        let subOrdinates = getSubOrdinates(employee.id, responseData);

        return ({
          ...employee,
          parentName,
          subOrdinates,
        });
      });

      setEmployees(empData);

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const getParentName = (parentId, responseData) => { //Get the parent name from the responseData
    const parent = responseData.find((employee) => employee.id === parentId);
    if (!parent)
      return 'N/A';
    return parent.name;
  };

  const getSubOrdinates = (id, responseData) => { //Get the subOrdinates from the responseData
    const subOrdinates = responseData.filter((employee) => employee.parentId === id);
    const subOrdinatesNames = subOrdinates.map((employee) => employee.name);
    return subOrdinates.length > 0 ? subOrdinatesNames.join(', ') : 'None';
  };

  const handleAddEmployee = (newEmployee) => { //Add the new employee 
    addEmployee(newEmployee);
    setShowAddForm(false);

  };

  const handleFormClose = () => { //Close the form
    setShowAddForm(false);
  };
  const addEmployee = (newEmployee) => { //Add the new employee to the list
    setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
  };



  return (

    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Employee App</Text>
        <Switch
          value={showCardView}
          onValueChange={() => setShowCardView(!showCardView)}
        />
        <Text>{showCardView ? 'Card View' : 'List View'}</Text>
      </View>

      <View>
        {!showAddForm && (
          <Button title="Add Employee" onPress={() => setShowAddForm(true)} />
        )}
        {showAddForm && (
          <AddEmployeeForm onAddEmployee={handleAddEmployee} onFormClose={handleFormClose} />
        )}
      </View>
      <View style={styles.container}>
        {showCardView ? (
          <EmployeeList data={employees} isCardView={true} />
        ) : (
          <EmployeeList data={employees} isCardView={false} />
        )}
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    margin: 10,
    flex: 1,

  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#eee',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
