import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./Pages/HomePage/homePage";
import { ColorTheme } from "./theme";
import { Auth } from "./Context/auth";
import Header from "./Components/Header/header";
import SignIn from "./Pages/SignInPage/SignIn";
import SignUpPage from "./Pages/SignUpPage/signUp";
import LogOut from './Pages/Logout/logOut';
import Dashboard from "./Pages/Dashboard/dashboard";

const App = () => {
  const [Dark, NonDark] = React.useState(false);
  const [user] = React.useContext(Auth);
  return (
    <BrowserRouter>
      <ColorTheme dark={Dark}>
        <Header clicked={() => NonDark(!Dark)} theme={Dark} user={user.data} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={SignIn} />
          <Route exact path="/signup" component={SignUpPage} />
          <Route exact path='/logout' component={LogOut} />
          <Route path='/user/:userid' render={props => {
            if(!user.data) return <Redirect to='/login' />
            return <Dashboard {...props} />
          }} />
        </Switch>
      </ColorTheme>
    </BrowserRouter>
  );
};

export default App;
