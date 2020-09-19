import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList, Image } from "react-native";

import EmployeeItem from "../components/EmployeeItem";
import EmployeeInput from "../components/EmployeeInput.js";

import { TouchableOpacity } from "react-native-gesture-handler";

const Employee = () => {
  const [EmployeeName, setEmployeeName] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addEmployeeNameHandler = (goalTitle) => {
    setEmployeeName((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
    setIsAddMode(false);
  };

  const removeEmployeeNameHandler = (goalId) => {
    setEmployeeName((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  const editEmployeeNameHandler = (goalId, change) => {
    setEmployeeName((currentGoals) => {
      return currentGoals.map((goal) =>
        goal.id == goalId ? (goal = { id: goalId, value: change }) : goal
      );
    });
  };

  const cancelEmployeeNameHandler = () => {
    setIsAddMode(false);
  };

  TouchableOpacity.defaultProps = { activeOpacity: 1.0 };

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Image
          source={require("../assets/employee.jpg")}
          style={styles.image}
        />
      </View>
      <TouchableOpacity activeOpacity={0.6}>
        <View style={styles.addmore}>
          {
            <Button
              title="Add Your New Employee"
              color="#3d0019"
              onPress={() => setIsAddMode(true)}
            />
          }
        </View>
      </TouchableOpacity>
      <EmployeeInput
        visible={isAddMode}
        onAddGoal={addEmployeeNameHandler}
        onCancel={cancelEmployeeNameHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={EmployeeName}
        renderItem={(itemData) => (
          <EmployeeItem
            id={itemData.item.id}
            onDelete={removeEmployeeNameHandler}
            onEdit={editEmployeeNameHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  Icontainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    alignItems: "center",
    position: "absolute",
    justifyContent: "center",
    resizeMode: "cover",
    paddingRight: 300,
  },
  image1: {
    flex: 1,
    alignItems: "center",
    position: "absolute",
    justifyContent: "center",
    resizeMode: "cover",
    paddingRight: 300,
  },
  container: {
    height: "100%",
    justifyContent: "center",

    paddingBottom: 650,

    position: "absolute",
  },
  addmore: {
    color: "#66002a",
  },
});

export default Employee;
