import React from "react";
import Heading from "../atoms/Heading";
import Border from "../atoms/Border";
import UserTypes from "../atoms/UserTypes";
import { View } from "react-native";

interface UserTypesSectionProps {
  options: string[];
  selectedUser: string;
  changeUser: (userType: string) => void;
}

const UserTypesSection = (props: UserTypesSectionProps) => {
  return (
    <View testID="userTypesSection" style={{ marginTop: 12 }}>
      <Heading text="User Types" />
      <UserTypes
        options={props.options}
        selectedUser={props.selectedUser}
        changeUser={props.changeUser}
      />
      <Border />
    </View>
  );
};

export default UserTypesSection;
