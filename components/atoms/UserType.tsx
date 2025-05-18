import { Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
interface UserTypeProps {
  userType: string;
  check: boolean;
  clickFn: () => void;
}

const UserType = (props: UserTypeProps) => {
  const styles = style(props.check);
  return (
    <TouchableOpacity
      testID="userType"
      style={styles.container}
      onPress={props.clickFn}
    >
      <MaterialIcons
        testID="materialIcon"
        name={props.check ? "radio-button-checked" : "radio-button-unchecked"}
        size={24}
        color={props.check ? "#0171CD" : "#E3E9F1"}
      />

      <Text
        testID="userTypeText"
        style={{ fontSize: 20, color: "#202322", marginLeft: 16 }}
      >
        {props?.userType}
      </Text>
    </TouchableOpacity>
  );
};

export default UserType;

const style = (value: boolean) =>
  StyleSheet.create({
    container: {
      backgroundColor: value ? "#E8F2FB" : "#FFFFFF",
      flexDirection: "row",
      padding: 16,
      borderRadius: 8,
    },
  });
