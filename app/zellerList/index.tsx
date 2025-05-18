import { View } from "react-native";
import React, { useState } from "react";
import UserTypesSection from "@/components/molecules/UserTypesSection";
import AdminSection from "@/components/molecules/AdminSection";

const ZelleCustomerList = () => {
  const [user, setUser] = useState("Admin");
  const options = ["Admin", "Manager"];
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
        paddingVertical: 8,
        paddingHorizontal: 16,
      }}
    >
      <UserTypesSection
        options={options}
        selectedUser={user}
        changeUser={(userType: string) => {
          setUser(userType);
        }}
      />
      <AdminSection selectedUser={user}/>
    </View>
  );
};

export default ZelleCustomerList;
