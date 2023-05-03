import React, { useContext, useEffect, useState } from "react";
import { Button, Linking, StyleSheet, Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { range } from "lodash";
import axios from "axios";
import { StoreContext } from "../store";
import Constants from "expo-constants";

const ResSize = ({ navigation }) => {
  const { dispatch, state } = useContext(StoreContext);
  const [resOk, setResOk] = useState(false);
  const API_URL = `${Constants.expoConfig.extra.apiUrl}/checkReservation`;

  useEffect(() => {
    axios
      .post(API_URL, {
        size: state.size,
        area: state.area,
        timestamp: state.datetime,
      })
      .then((res) => {
        if (res.data.available === true) {
          setResOk(true);
        }
      })
      .catch((e) => console.log(e));
  }, [state]);

  return (
    <View style={styles.root}>
      <Text>How many people in your party?</Text>
      <Picker
        selectedValue={state.size}
        onValueChange={(val) => dispatch({ type: "size", payload: val })}
        style={{ width: "100%" }}
      >
        <Picker.Item label="1 person" value={1} key={1} />
        {range(2, 6).map((v) => (
          <Picker.Item label={`${v} people`} value={v} key={v} />
        ))}
        <Picker.Item label="6 or more" value={6} key={6} />
      </Picker>
      {state.size === 6 && (
        <Button
          title="Call for more info"
          onPress={() => {
            Linking.openURL("tel:+19152496786");
          }}
        />
      )}
      {state.size !== 6 && resOk && (
        <Button
          title="Next"
          onPress={() => navigation.navigate("ResCustomer")}
        />
      )}
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

export default ResSize;
