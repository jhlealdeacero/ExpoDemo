import { api } from "../../api/api";
import { headers } from "../../utils/config";
import { apiKraken } from "../../constants/ApiKraken";

export const obtenerPagos = async () => {
  const { data } = await api.post(
    apiKraken.vpoDashboardPagosSrv,
    {
      parameters:
        '{"ClaUsuario":8270,"ClaClienteCuenta":"808476,817586,85321,816624","ClaIdioma":1}',
      tipoEstructura: 1,
    },
    {
      headers,
    }
  );

  return data;
};
