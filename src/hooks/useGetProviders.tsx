import { useEffect, useState } from "react";
import api from "../services/api";
import { Provider } from "./typings";

export const useGetProviders = () => {
  const [providers, setProviders] = useState<Provider[]>([]);

  useEffect(() => {
    api.get("/providers").then((response) => {
      setProviders(response.data);
    });
  }, []);

  return {
    providers,
  };
};
