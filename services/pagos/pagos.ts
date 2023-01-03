import { api } from "../../api/api";
import { headers } from "../../utils/config";
import { apiKraken } from "../../constants/ApiKraken";

export const obtenerPagos = async (token:string) => {
  const { data } = await api.post(
    apiKraken.vpoDashboardPagosSrv,
    {
      parameters:
        '{"ClaUsuario":8270,"ClaClienteCuenta":"808476,817586,85321,816624","ClaIdioma":1}',
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
