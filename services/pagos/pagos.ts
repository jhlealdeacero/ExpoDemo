import { api } from "../../api/api"

export const obtenerPagos = async () => {

  let headers = {
    'x-api-key': "ED5DDAAA-2074-4426-A2BF-9A962CFD2AF6",
    'x-access-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJOb21icmVVc3VhcmlvIjoiREFWSUQgQUxFSkFORFJPIEVMSVpPTkRPIEdPTlpBTEVaIiwiQ2xhVXN1YXJpbyI6IjEwMDAxNzA0NSIsIkNsYUVtcHJlc2EiOiIwIiwiTm9tYnJlUGMiOiIxODkuMjA4LjE0Ny4yMTM6NTYyNjkiLCJuYmYiOjE2NzIzNDQ1MTAsImV4cCI6MTY3MjM1MTcxMCwiaWF0IjoxNjcyMzQ0NTEwfQ.dzo8dwqFYuPGZ9ty1BmuWd3s6taeUJ4duFlQxfX3bsU",
  };

  const { data } = await api.post('/23/106', {
    parameters: "{\"ClaUsuario\":42916,\"ClaClienteCuenta\":\"1652,73529\",\"ClaIdioma\":1}",
    tipoEstructura: 1
  }, {
    headers
  })

  return data
}