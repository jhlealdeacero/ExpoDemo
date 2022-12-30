import { api } from "../../api/api";
import { apiKraken } from "../../constants/ApiKraken";
import { headers } from "../../utils/config";

export const obtenerDocumentos = async () => {
  const { data } = await api.post(
    "23/205",
    {
      parameters: '{"ClaUsuario":8270,"UltimoLogin":"2022-12-28T12:32:17.357"}',
      tipoEstructura: 1,
    },
    {
      headers,
    }
  );

  return data;
};
