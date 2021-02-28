import React, { FC, useCallback, useMemo } from "react";
import { Container, Description, Title, OKButton, ButtonText } from "./styles";
import Icon from "react-native-vector-icons/Feather";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { format } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";

export const AppointmentCreated: FC = () => {
  const { reset } = useNavigation();
  const route = useRoute<RouteProp<MainStackParamList, "AppointmentCreated">>();
  const {
    params: { date },
  } = route;

  const handleOKPress = useCallback(() => {
    reset({
      routes: [{ name: "Dashboard" }],
      index: 0,
    });
  }, [reset]);

  const formattedDate = useMemo(() => {
    return format(date, "EEEE ', dia' dd 'de' MMMM 'de' yyyy 'às' HH:mm'h'", {
      locale: ptBr,
    });
  }, []);

  return (
    <Container>
      <Icon name="check" size={80} color="#04d361"></Icon>
      <Title>Agendamento concluído</Title>
      <Description>{formattedDate}</Description>
      <OKButton onPress={handleOKPress}>
        <ButtonText>OK</ButtonText>
      </OKButton>
    </Container>
  );
};
