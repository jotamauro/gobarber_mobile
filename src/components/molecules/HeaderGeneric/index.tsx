import React, { FC } from "react";
import Icon from "react-native-vector-icons/Feather";

import { BackButton, Header, HeaderTitle } from "./styles";
import { Avatar } from "../../Avatar";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../../hooks/auth";

interface HeaderProps {
  title: string;
}

export const HeaderGeneric: FC<HeaderProps> = ({ title }) => {
  const { goBack } = useNavigation();
  const { user } = useAuth();

  return (
    <Header>
      <BackButton onPress={goBack}>
        <Icon name="chevron-left" size={24} color="#999951" />
      </BackButton>
      <HeaderTitle>{title}</HeaderTitle>
      <Avatar uriImage={user.avatar_url} />
    </Header>
  );
};
