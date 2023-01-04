import { api } from "../../api/api";
import { apiKraken } from "../../constants/ApiKraken";

export const obtenerDocumentos = async (token: string) => {
  const { data } = await api.post(
    apiKraken.obtenerDocumentos,
    {
      parameters: '{"ClaUsuario":8270,"UltimoLogin":"2022-12-28T12:32:17.357"}',
      tipoEstructura: 1,
    },
    {
      headers: {
        'x-api-key': 'ED5DDAAA-2074-4426-A2BF-9A962CFD2AF6',
        'x-access-token': token,
      },
    }
  );

  return data;
};
