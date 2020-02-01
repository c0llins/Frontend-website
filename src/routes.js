import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Contact from "./pages/Contact";
import Error404 from "./pages/Error404";
import Index from "./pages/Index";
import Property from "./pages/Property";
export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/property/:id" component={Property} />
        <Route path="/contact" component={Contact} />
        <Route path="*" component={Error404} />
      </Switch>
    </BrowserRouter>
  );
}
