import http from "./httpServices";
import { authurl } from "../Data/baseUrl.json";

const Url = authurl + "/auth";

export const postSignUp = async (values) => {
  const { headers } = await http.post(Url, values);
  sessionStorage.setItem("x-token", headers["x-auth-token"]);
};
