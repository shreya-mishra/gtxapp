import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import EditModal from "./EditModal";

const EmployeeItem = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.6}>
      <View style={styles.listItem}>
        <Text style={{ flex: 1 }}>{props.title}</Text>
        <EditModal props={props} style={{ paddingRight: 15 }} />
        <AntDesign
          name="delete"
          size={24}
          color="black"
          onPress={props.onDelete.bind(this, props.id)}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});
export default EmployeeItem;
