import axios from "axios";

export const api = axios.create({
  baseURL: 'https://krakenapi.deacero.com/SandboxServices/'
});