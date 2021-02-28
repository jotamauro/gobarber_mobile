import React, { FC } from "react";

import {
  Hour,
  HourText,
  Section,
  SectionContent,
  SectionTitle,
} from "./styles";
import { useSection } from "./useSection";

interface AvailabilityItem {
  hour: number;
  available: boolean;
  hourFormatted: string;
}

interface SectionProps {
  schedule: AvailabilityItem[];
  title: string;
}

export const SectionAppointments: FC<SectionProps> = ({ schedule, title }) => {
  const { selectedHour, handleSelectHour } = useSection();

  return (
    <Section>
      <SectionTitle>{title}</SectionTitle>
      <SectionContent>
        {schedule.map(({ hour, hourFormatted, available }) => (
          <Hour
            enabled={available}
            selected={selectedHour === hour}
            available={available}
            key={hourFormatted}
            onPress={() => handleSelectHour(hour)}
          >
            <HourText selected={selectedHour === hour}>
              {hourFormatted}
            </HourText>
          </Hour>
        ))}
      </SectionContent>
    </Section>
  );
};
