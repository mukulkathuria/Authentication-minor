import http from "./httpServices";
import { authurl } from "../Data/baseUrl.json";

const Url = authurl + "/login";

export const postSignIn = async (values) => {
  const { headers } = await http.post(Url, values);
  sessionStorage.setItem("x-token", headers["x-auth-token"]);
};
