import { useCallback, useState } from "react";

export const useSection = () => {
  const [selectedHour, setSelectedHour] = useState(0);

  const handleSelectHour = useCallback((hour: number) => {
    console.log("hour", hour);
    setSelectedHour(hour);
  }, []);

  return {
    handleSelectHour,
    selectedHour,
  };
};
