import { useNavigation } from "@react-navigation/native";
import React, { FC, useCallback } from "react";
import Icon from "react-native-vector-icons/Feather";
import { Avatar } from "../../components/Avatar";
import { useAuth } from "../../hooks/auth";
import { useGetProviders } from "../../hooks/useGetProviders";

import {
  Container,
  Header,
  HeaderTitle,
  ProviderContainer,
  ProvidersList,
  UserName,
  ProvderMetaText,
  ProviderAvatar,
  ProviderInfo,
  ProviderMeta,
  ProviderName,
  ProviderListTitle,
} from "./styles";

export const Dashboard: FC = () => {
  const { signOut, user } = useAuth();
  const { navigate } = useNavigation();
  const { providers } = useGetProviders();

  const navigateToProfile = useCallback(() => {
    signOut();
    // navigate("Profile");
  }, [signOut]);

  const navigateToCreateAppointment = useCallback(
    (providerId: string) => {
      navigate("CreateAppointment", { providerId });
    },
    [navigate]
  );

  return (
    <Container>
      <Header>
        <HeaderTitle>
          Bem vindo, {"\n"}
          <UserName>{user.name}</UserName>
        </HeaderTitle>
        <Avatar onPressImage={navigateToProfile} uriImage={user.avatar_url} />
      </Header>

      <ProvidersList
        data={providers}
        ListHeaderComponent={<ProviderListTitle>Barbeiros</ProviderListTitle>}
        keyExtractor={(provider) => provider.id}
        renderItem={({ item: provider }) => (
          <ProviderContainer
            onPress={() => {
              navigateToCreateAppointment(provider.id);
            }}
          >
            <ProviderAvatar source={{ uri: provider.avatar_url }} />
            <ProviderInfo>
              <ProviderName>{provider.name}</ProviderName>
              <ProviderMeta>
                <Icon name="calendar" size={14} color="#ff9000" />
                <ProvderMetaText>Segunda à sexta</ProvderMetaText>
              </ProviderMeta>
              <ProviderMeta>
                <Icon name="clock" size={14} color="#ff9000" />
                <ProvderMetaText>8h às 18h</ProvderMetaText>
              </ProviderMeta>
            </ProviderInfo>
          </ProviderContainer>
        )}
      />
    </Container>
  );
};
