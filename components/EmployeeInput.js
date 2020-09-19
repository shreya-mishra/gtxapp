import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";

const EmployeeInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const EmployeeInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  };
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <View style={styles.container}>
          <Image
            source={require("../assets/employee.jpg")}
            style={styles.image}
          />
        </View>

        <TextInput
          placeholder="Enter Employee Name"
          placeholderTextColor="black"
          style={styles.input}
          onChangeText={EmployeeInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    //flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 2,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#e7efef",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
  },
  button: {
    width: "40%",
  },
  image: {
    flex: 1,
    alignItems: "center",
    position: "absolute",
    justifyContent: "center",
    resizeMode: "cover",
  },
  container: {
    height: "100%",
    justifyContent: "center",
    paddingRight: 500,
    paddingBottom: 650,

    position: "absolute",
  },
});

export default EmployeeInput;
