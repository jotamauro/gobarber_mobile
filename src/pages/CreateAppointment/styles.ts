import styled from "styled-components/native";
import { FlatList } from "react-native";
import { Provider } from "../../hooks/typings";
import { RectButton } from "react-native-gesture-handler";

interface ProviderContainerProps {
  selected: boolean;
}

interface ProviderNameProps {
  selected: boolean;
}

export const Container = styled.View`
  flex: 1;
`;

export const ProvidersListContainer = styled.View`
  height: 112px;
`;

export const ProvidersList = styled(
  FlatList as new () => FlatList<Provider>
).attrs({
  contentContainerStyle: {
    paddingTop: 32,
    paddingBottom: 24,
  },
})``;

export const ProviderContainer = styled(RectButton)<ProviderContainerProps>`
  align-items: center;
  background: ${(props) => (props.selected ? "#FF9000" : "#3e3b47")};
  border-radius: 10px;
  flex-direction: row;
  margin-right: 16px;
  padding: 8px 12px;
`;

export const ProviderAvatar = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 16px;
`;

export const ProviderName = styled.Text<ProviderNameProps>`
  margin-left: 8px;
  font-family: "RobotoSlab-Medium";
  font-size: 16px;
  color: ${(props) => (props.selected ? "#232129" : "#f4ede8")};
`;

export const Title = styled.Text`
  font-family: "RobotoSlab-Medium";
  color: #f4ede8;
  font-size: 24px;
  margin: 0 24px 24px;
`;

export const Calendar = styled.View``;

export const OpenDatePickerText = styled.Text`
  font-family: "RobotoSlab-Medium";
  font-size: 16px;
  color: #232129;
`;

export const OpenDatePicker = styled(RectButton)`
  height: 46px;
  background: #ff9000;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin: 0 24px;
`;

export const Schedule = styled.View`
  padding: 24px 0 16px;
`;

export const Content = styled.ScrollView``;

/*
  margin-left auto empurra o máximo que o elemento pode a esquerda
*/
