import React from "react";
import { Image, Text, StyleSheet, View, Button } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/lightlogo.png")}
        style={{ width: 105, height: 50 }}
      />
      <Text>Check for table availability:</Text>
      <Button
        title="Next"
        onPress={() => {
          navigation.navigate("ResDate");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
