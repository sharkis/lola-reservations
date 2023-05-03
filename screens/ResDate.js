import React, { useContext, useEffect, useState } from "react";

import RNDateTimePicker from "@react-native-community/datetimepicker";
import { Button, StyleSheet, Text, View } from "react-native";
import { StoreContext } from "../store";

const ResDate = ({ navigation }) => {
  const { dispatch, state } = useContext(StoreContext);

  const initDate = new Date();
  initDate.setTime(state.datetime);
  const [date, setDate] = useState(initDate);
  const [time, setTime] = useState(initDate);

  useEffect(() => {
    // add time to date
    const datetime = (Math.floor(date.getTime() / 86400) * 86400) + (time.getTime() % 86400);
    dispatch({ type: "datetime", payload: datetime });
  }, [date, time]);

  return (
    <View style={styles.root}>
      <Text>When do you want your reservation?</Text>
      <RNDateTimePicker
        value={date}
        mode="date"
        onChange={(e, d) => setDate(d)}
      />
      <RNDateTimePicker
        value={time}
        mode="time"
        onChange={(e, d) => setTime(d)}
      />
      <Button
        title="Next"
        onPress={() => {
          navigation.navigate("ResArea");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    flex:1
  }
})

export default ResDate;
