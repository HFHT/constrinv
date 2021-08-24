import { Switch, Route } from "react-router-dom";

import { Profile } from "../pages/Profile";
import { Logout } from "../pages/Logout";
import { ProfileWithMsal } from "../pages/ProfileWithMsal";
import { ProfileRawContext } from "../pages/ProfileRawContext";


export function PageRoutes() {
    return (
      <Switch>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/profileWithMsal">
          <ProfileWithMsal />
        </Route>
        <Route path="/profileRawContext">
          <ProfileRawContext />
        </Route>
        <Route path="/logout">
          <Logout />
        </Route>
        <Route path="/">
          <Profile />
        </Route>
      </Switch>
    )
  }