import { api } from "../../api/api"

export const obtenerDocumentos = async () => {

  let headers = {
    'x-api-key': "ED5DDAAA-2074-4426-A2BF-9A962CFD2AF6",
    'x-access-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJOb21icmVVc3VhcmlvIjoiREFWSUQgQUxFSkFORFJPIEVMSVpPTkRPIEdPTlpBTEVaIiwiQ2xhVXN1YXJpbyI6IjEwMDAxNzA0NSIsIkNsYUVtcHJlc2EiOiIwIiwiTm9tYnJlUGMiOiIxODkuMjA4LjE0Ny4yMTM6NTYyNjkiLCJuYmYiOjE2NzIzNDQ1MTAsImV4cCI6MTY3MjM1MTcxMCwiaWF0IjoxNjcyMzQ0NTEwfQ.dzo8dwqFYuPGZ9ty1BmuWd3s6taeUJ4duFlQxfX3bsU",
  };

  const { data } = await api.post('/23/21', {
    parameters: "{\"ClaUsuario\":42916,\"UltimoLogin\":\"2022-12-28T12:32:17.357\"}",
    tipoEstructura: 1
  }, {
    headers
  })

  return data
}