import { View } from "react-native";
import React from "react";

const Border = () => {
  return (
    <View
      style={{
        height: 1,
        borderColor: "#E4EAF0",
        borderWidth: 0.5,
        marginTop: 16,
      }}
      testID="border-line"
    ></View>
  );
};

export default Border;
