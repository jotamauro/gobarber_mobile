import { RouteProp, useRoute } from "@react-navigation/native";
import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import { Platform } from "react-native";
import {
  Calendar,
  Container,
  Content,
  OpenDatePicker,
  OpenDatePickerText,
  ProviderAvatar,
  ProviderContainer,
  ProviderName,
  ProvidersList,
  ProvidersListContainer,
  Schedule,
  Title,
} from "./styles";

import { useGetProviders } from "../../hooks/useGetProviders";

import DateTimePicker from "@react-native-community/datetimepicker";
import api from "../../services/api";
import { format } from "date-fns";
import { SectionAppointments } from "../../components/molecules/Section";
import { AvailabilityItem } from "./typings/typings";
import { HeaderGeneric } from "../../components/molecules/HeaderGeneric";
import { ButtonAppointment } from "../../components/ButtonAppointment";

export const CreateAppointment: FC = () => {
  const route = useRoute<RouteProp<MainStackParamList, "CreateAppointment">>();
  const {
    params: { providerId },
  } = route;

  const [selectedProviderId, setSelectedProviderId] = useState(providerId);
  const [showDatePicker, setShowDateTimePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const [availability, setAvailability] = useState<AvailabilityItem[]>([]);

  const { providers } = useGetProviders();

  const handleSelectProvider = useCallback((id: string) => {
    setSelectedProviderId(id);
  }, []);

  const handleToggleDatePicker = useCallback(() => {
    setShowDateTimePicker((state) => !state);
  }, []);

  const handleDateChanged = useCallback(
    (event: any, date: Date | undefined) => {
      setShowDateTimePicker(Platform.OS === "android" ? false : true);

      if (date) {
        setSelectedDate(date);
      }
    },
    []
  );

  useEffect(() => {
    api
      .get(`/providers/${providerId}/day-availability`, {
        params: {
          year: selectedDate.getFullYear(),
          month: selectedDate.getMonth() + 1,
          day: selectedDate.getDate(),
        },
      })
      .then((response) => {
        setAvailability(response.data);
      });
  }, [selectedDate, providerId]);

  const morningAvailabity = useMemo(() => {
    return availability
      .filter(({ hour }) => hour < 12)
      .map(({ hour, available }) => {
        return {
          hour,
          available,
          hourFormatted: format(new Date().setHours(hour), "HH:00"),
        };
      });
  }, [availability]);

  const afternoonAvailabity = useMemo(() => {
    return availability
      .filter(({ hour }) => hour >= 12)
      .map(({ hour, available }) => {
        return {
          hour,
          available,
          hourFormatted: format(new Date().setHours(hour), "HH:00"),
        };
      });
  }, [availability]);

  return (
    <Container>
      <HeaderGeneric title="Barbeiros" />

      <Content>
        <ProvidersListContainer>
          <ProvidersList
            horizontal
            showHorizontalScrollIndicator={false}
            data={providers}
            keyExtractor={(provider) => provider.id}
            renderItem={({ item: provider }) => (
              <ProviderContainer
                onPress={() => handleSelectProvider(provider.id)}
                selected={provider.id === selectedProviderId}
              >
                <ProviderAvatar source={{ uri: provider.avatar_url }} />
                <ProviderName selected={provider.id === selectedProviderId}>
                  {provider.name}
                </ProviderName>
              </ProviderContainer>
            )}
          />
        </ProvidersListContainer>
        <Title>Escolha a data</Title>

        <OpenDatePicker onPress={handleToggleDatePicker}>
          <OpenDatePickerText>Selecionar outra data</OpenDatePickerText>
        </OpenDatePicker>

        {showDatePicker && (
          <Calendar>
            <DateTimePicker
              value={selectedDate}
              mode="date"
              is24Hour
              onChange={handleDateChanged}
              display="calendar"
            />
          </Calendar>
        )}

        <Schedule>
          <Title>Escolha o horário</Title>

          <SectionAppointments
            title="Manhã"
            schedule={morningAvailabity}
          ></SectionAppointments>

          <SectionAppointments
            title="Tarde"
            schedule={afternoonAvailabity}
          ></SectionAppointments>
        </Schedule>

        <ButtonAppointment
          selectedDate={selectedDate}
          provider={selectedProviderId}
        />
      </Content>
    </Container>
  );
};
