import React from "react";
import UserType from "./UserType";
import { View } from "react-native";

interface UserTypesProps {
  options: string[];
  selectedUser: string;
  changeUser: (userType: string) => void;
}
const UserTypes = (props: UserTypesProps) => {
  return (
    <View testID="userTypes" style={{ marginTop: 16 }}>
      {Array.isArray(props.options) &&
        props.options?.map((userType: string) => {
          return (
            <View key={userType}>
              <UserType
                userType={userType}
                check={props.selectedUser === userType}
                clickFn={() => {
                  props.changeUser(userType);
                }}
              />
            </View>
          );
        })}
    </View>
  );
};

export default UserTypes;
