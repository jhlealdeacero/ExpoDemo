import { api } from "../../api/api"

export const obtenerPagos = async () => {

  let headers = {
    'x-api-key': "ED5DDAAA-2074-4426-A2BF-9A962CFD2AF6",
    'x-access-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJOb21icmVVc3VhcmlvIjoiSk9TRSBIT1JBQ0lPIExPUEVaIExFQUwiLCJDbGFVc3VhcmlvIjoiMTAwMDA5NzYwIiwiQ2xhRW1wcmVzYSI6IjAiLCJOb21icmVQYyI6IjE4OS4yMDMuMTQ4LjgwOjUzMjcxIiwibmJmIjoxNjcyMzU0NjQ5LCJleHAiOjE2NzIzNjE4NDksImlhdCI6MTY3MjM1NDY0OX0.cRBPW_rYMmpq4EEHcOoGZxo6MAE-8-bfNVmQ8x7ZSns",
  };

  const { data } = await api.post('/23/106', {
    parameters: "{\"ClaUsuario\":8270,\"ClaClienteCuenta\":\"808476,817586,85321,816624\",\"ClaIdioma\":1}",
    tipoEstructura: 1
  }, {
    headers
  })

  return data
}