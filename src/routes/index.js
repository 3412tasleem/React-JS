// Init
import React from "react";
import { Route, Switch } from "react-router-dom";

// Routes
import Home from "../containers/Home.js";
import Subscritions from "../components/common/Subscritions";
import Shorts from "../components/common/Shorts.js";
import Library from "../components/common/Library.js";
const index = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/subscriptions" component={Subscritions} />
      <Route exact path="/shorts" component={Shorts} />
      <Route exact path="/library" component={Library} />
    </Switch>
  );
};

export default index;
