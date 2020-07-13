import React from "react";
import jwtDecode from "jwt-decode";

export const Auth = React.createContext();

export const AuthContext = (props) => {
  const [user, Nouser] = React.useState({
    data: null,
  });
  const authvalue = sessionStorage.getItem("x-token");
  if (authvalue && !user.data) {
    Nouser({ data: jwtDecode(authvalue) });
  }
  return <Auth.Provider value={[user, Nouser]}>{props.children}</Auth.Provider>;
};
