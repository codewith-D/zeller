import { View, Text } from "react-native";
import React from "react";

export interface UserProps {
  name: string;
  role: string;
  id: string;
}

const User = (props: UserProps) => {
  return (
    <View testID="userContainer" style={{ marginVertical: 8, flexDirection: "row" }}>
      <View
        style={{
          paddingVertical: 12,
          paddingHorizontal: 18,
          backgroundColor: "#E8F2FB",
          borderRadius: 8,
        }}
        testID="containerOne"
      >
        <Text style={{ fontSize: 20, color: "#0872CD" }}>
          {props.name?.toUpperCase().charAt(0)}
        </Text>
      </View>
      <View
        style={{
          marginLeft: 12,
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-between",
        }}
        testID="containerTwo"
      >
        <Text style={{ fontSize: 20, color: "#202322" }}>{props.name}</Text>
        <Text style={{ fontSize: 14, color: "#787775" }}>{props.role}</Text>
      </View>
    </View>
  );
};

export default User;
