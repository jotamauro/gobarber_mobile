import styled from "styled-components/native";

import { RectButton } from "react-native-gesture-handler";
import { HourProps, HourTextProps } from "./typings/typings";

export const Section = styled.View`
  margin-bottom: 24px;
`;

export const SectionTitle = styled.Text`
  font-size: 18px;
  color: #999951;
  font-family: "RobotoSlab-Regular";
  margin: 0 24px 12px;
`;

export const SectionContent = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingHorizontal: 24,
  },
  horizontal: true,
  showsHorizontalSrollIndicator: false,
})``;

export const HourText = styled.Text<HourTextProps>`
  padding: 12px;
  color: ${(props) => (props.selected ? "#232129" : "#f4ede8")};
`;

export const Hour = styled(RectButton)<HourProps>`
  background: ${(props) => (props.selected ? "#ff9000" : "#3e3b47")};
  font-family: "RobotoSlab-Regular";
  font-size: 16px;
  border-radius: 10px;
  margin-right: 8px;

  opacity: ${(props) => (props.available ? 1 : 0.3)};
`;
