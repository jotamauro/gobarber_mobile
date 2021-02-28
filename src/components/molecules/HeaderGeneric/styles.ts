import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Header = styled.View`
  align-items: center;
  background: #28262e;
  flex-direction: row;
  justify-content: space-between;
  padding-top: ${getStatusBarHeight() + 24}px;
  padding: 24px;
`;

export const BackButton = styled.TouchableOpacity``;

export const HeaderTitle = styled.Text`
  color: #f4ede8;
  font-family: "RobotoSlab-Regular";
  font-size: 24px;
  margin-left: 16px;
`;

/*
  margin-left auto empurra o máximo que o elemento pode a esquerda
*/
