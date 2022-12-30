import { api } from "../../api/api";
import { apiKraken } from "../../constants/ApiKraken";
import { headers } from "../../utils/config";

export const obtenerPedidos = async () => {
  const { data } = await api.post(
    apiKraken.consultaPedidos,
    {
      parameters:
        '{"ClaEmpresa":1,"ClaUsuario":8270,"ClaClienteCuenta":"808476,817586,85321,816624","UltimoLogin":"2022-12-28T12:32:17.357"}',
      tipoEstructura: 1,
    },
    {
      headers,
    }
  );

  return data;
};
