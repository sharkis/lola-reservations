import React, { useContext } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { StoreContext } from "../store";

const ResArea = ({ navigation }) => {
  const { dispatch, state } = useContext(StoreContext);
  return (
    <View style={styles.root}>
      <Text>Where would you like to be seated?</Text>
      <Picker
        selectedValue={state.area}
        onValueChange={(val) => dispatch({ type: "area", payload: val })}
        style={{ width: "100%" }}
      >
        <Picker.Item label="Dining Floor" value="floor" />
        <Picker.Item label="Bar" value="bar" />
        <Picker.Item label="Patio" value="patio" />
      </Picker>
      <Button
        title="Next"
        onPress={() => {
          navigation.navigate("ResSize");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    root:{
        display:'flex',
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})

export default ResArea;
