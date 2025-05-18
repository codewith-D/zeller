import { TextInput } from "react-native";
import React from "react";

interface UserSearchProps {
  searchText: string;
  searchFn: (text: string) => void;
}

const UserSearch = (props: UserSearchProps) => {
  return (
    <TextInput
      testID="userSearch"
      value={props.searchText}
      onChangeText={props.searchFn}
      style={{
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 4,
        padding: 8,
        marginTop: 8,
      }}
      selectionColor={"#ccc"}
      autoCapitalize="none"
      autoCorrect={false}
    />
  );
};

export default UserSearch;
