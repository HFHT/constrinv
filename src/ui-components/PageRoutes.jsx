import React, {  } from "react";
import { Switch, Route } from "react-router-dom";

import { Profile } from "../pages/Profile";
import { Orders } from "../pages/Orders";
import { Pallet } from "../pages/Pallet";
import { PrintQR } from "../pages/PrintQR";
import { Shipment } from "../pages/Shipment";

export function PageRoutes() {

  return (
    <Switch>
      <Route path="/pallet">
        <Pallet />
      </Route>
      <Route path="/printQR">
        <PrintQR />
      </Route>
      <Route path="/orders">
        <Orders />
      </Route>
      <Route path="/shipment">
        <Shipment />
      </Route>
      <Route path="/">
        <Profile />
      </Route>
    </Switch>
  )
}