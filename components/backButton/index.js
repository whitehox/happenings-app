import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { HeaderBackButton as BackButton } from "react-navigation-stack";

export default HeaderBackButton = props => {
  return (
    <BackButton
      {...props}
      title=" "
      backImage={<Ionicons name="md-arrow-back" size={25} />}
    />
  );
};
