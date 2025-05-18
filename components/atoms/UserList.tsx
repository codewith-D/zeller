import { FlatList, View } from "react-native";
import React from "react";
import User, { UserProps } from "./User";
import NoUserFound from "./NoUserFound";

interface UserListProps {
  list: UserProps[];
  onRefreshFunction: any
  loading: boolean
}
const UserList = (props: UserListProps) => {
  return (
    <View>
      <FlatList
        testID="userListFlatList"
        style={{
          marginTop: 16,
        }}
        data={props.list}
        keyExtractor={(item: UserProps) => item?.id}
        renderItem={({ item }: { item: UserProps }) => {
          return <User name={item?.name} role={item?.role} id={item?.id} />;
        }}
        ListEmptyComponent={<NoUserFound/>}
        onRefresh={props.onRefreshFunction}
        refreshing={props.loading}
      />
    </View>
  );
};

export default UserList;
