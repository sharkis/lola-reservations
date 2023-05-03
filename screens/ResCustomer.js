import React, { useContext } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { StoreContext } from "../store";

const ResCustomer = ({ navigator }) => {
  const { dispatch, state } = useContext(StoreContext);
  return (
    <View style={styles.root}>
      <Text>We have a table for you!</Text>
      <Text>Please enter your information:</Text>
      <TextInput placeholder="name" />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default ResCustomer;
