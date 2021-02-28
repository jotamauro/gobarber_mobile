import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export const CreateAppointmentButtonText = styled.Text`
  font-family: "RobotoSlab-Medium";
  font-size: 16px;
  color: #232129;
`;

export const CreateAppointmentButton = styled(RectButton)`
  height: 46px;
  background: #ff9000;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin: 0 24px;
`;
