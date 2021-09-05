import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function Main() {
  const [color, setColor] = useState("white");

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: color,
      alignItems: "center",
      justifyContent: "center",
    },
  });

  const changeToRandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    console.log(r, g, b);
    setColor(`rgba(${r}, ${g}, ${b}, 1)`);
  };

  return (
    <View style={styles.container}>
      <Button
        title="Change Backgound Color"
        color="green"
        accessibilityLabel="Click to change color"
        onPress={() => changeToRandomColor()}
      />
    </View>
  );
}
