import { Text } from "react-native";
import React from "react";

const NoUserFound = () => {
  return (
    <Text testID="noUserFound" style={{ textAlign: "center", fontSize: 16}}>
      No users found
    </Text>
  );
};

export default NoUserFound;
