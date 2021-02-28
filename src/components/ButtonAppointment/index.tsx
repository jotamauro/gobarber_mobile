import { useNavigation } from "@react-navigation/native";
import React, { FC, useCallback } from "react";
import { Alert } from "react-native";
import api from "../../services/api";
import { useSection } from "../molecules/Section/useSection";
import { CreateAppointmentButton, CreateAppointmentButtonText } from "./styles";

interface ButtonAppointmentProps {
  selectedDate: Date;
  provider: string;
}

export const ButtonAppointment: FC<ButtonAppointmentProps> = ({
  selectedDate,
  provider,
}) => {
  const { selectedHour } = useSection();
  const { navigate } = useNavigation();

  const handleCreateAppointment = useCallback(async () => {
    const date = new Date(selectedDate);
    // date.setHours(selectedHour);
    // date.setMinutes(0);
    // date.setSeconds(0);

    // console.log(selectedDate);

    // console.log(date.getFullYear());
    // console.log(date.getMonth() + 1);
    // console.log(date.getDate());
    // console.log(selectedHour);

    // try {
    //   await api.post("/appointments", {
    //     provider_id: provider,
    //     date: "2021-03-01 17:00:00",
    //   });

    navigate("AppointmentCreated", { date: date.getTime() });
    // } catch (error) {
    //   Alert.alert(
    //     "Erro ao criar o agendado",
    //     "Ocorreu um erro ao tentar criar o agendamento, tente novamente"
    //   );
    // }
  }, [navigate, selectedDate, selectedHour, provider]);

  return (
    <CreateAppointmentButton onPress={handleCreateAppointment}>
      <CreateAppointmentButtonText>Agendar</CreateAppointmentButtonText>
    </CreateAppointmentButton>
  );
};
