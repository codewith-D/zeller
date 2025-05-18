import React, { useCallback, useState } from "react";
import Heading from "../atoms/Heading";
import UserList from "../atoms/UserList";
import Border from "../atoms/Border";
import { View } from "react-native";
import useGetSearchedData from "@/Hooks/GetSearchedData";
import { MaterialIcons } from "@expo/vector-icons";
import UserSearch from "../atoms/UserSearch";

interface AdminSectionProps {
  selectedUser: string;
}
const AdminSection = (props: AdminSectionProps) => {
  const [search, setSearch] = useState("");
  const { customers, loading, refetch } = useGetSearchedData(search, props.selectedUser);
  const [searchIcon, setSearchIcon] = useState(false);

  const onRefresh = useCallback(() => {
    return refetch();
  }, [refetch]);

  return (
    <View testID="adminSection" style={{ marginTop: 24 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Heading text="Admin Users" />
        <MaterialIcons
          name={"search"}
          size={28}
          color={"#000000"}
          onPress={() => setSearchIcon(!searchIcon)}
          testID="searchIcon"
        />
      </View>
      {searchIcon && (
        <UserSearch
          searchText={search}
          searchFn={setSearch}
        />
      )}

      {!loading && <UserList list={customers} onRefreshFunction={onRefresh} loading={loading} />}
      <Border />
    </View>
  );
};

export default AdminSection;
