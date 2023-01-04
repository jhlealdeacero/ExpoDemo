import { api } from "../../api/api";
import { apiKraken } from "../../constants/ApiKraken";

export const obtenerPedidos = async (token: string) => {
  const { data } = await api.post(
    apiKraken.consultaPedidos,
    {
      parameters:
        '{"ClaEmpresa":1,"ClaUsuario":8270,"ClaClienteCuenta":"808476,817586,85321,816624","UltimoLogin":"2022-12-28T12:32:17.357"}',
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
