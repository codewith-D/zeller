import { Text } from "react-native";
import React from "react";

interface HeadingProps {
  text: string;
}
const Heading = (props: HeadingProps) => {
  return (
    <Text
      testID="heading"
      style={{ fontSize: 24, color: "#202322", fontWeight: 500 }}
    >
      {props?.text}
    </Text>
  );
};

export default Heading;
