import React from "react";
import { Switch, Route } from "react-router-dom";

import HelloWorld from "./homepage/HelloWorld";
import LandingPage from "./homepage/LandingPage";
import ItinerarySchedule from "./itinerary-schedule/ItinerarySchedule";
import PlanMap from "./plan-map/PlanMap";
// import { AuthRoute, ProtectedRoute } from '../utils/routes_utils';
// import SignUpFormContainer from './user/SignUpFormContainer';
// import LogInFormContainer from './session/LogInFormContainer';
// import Page404Container from './404/Page404Container';
// import ComingSoonContainer from './404/ComingSoonContainer';
// import HomeFooter from './homepage/HomeFooter';
// import Home from './homepage/Home';
// import ProductResultsRoot from './productResults/ProductResultsRoot';
// import ProductDetailsContainer from './product_details/ProductDetailsContainer';

const Router = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HelloWorld} />

        <Route path="/home" component={LandingPage} />
        <Route path="/schedule" component={ItinerarySchedule} />
        <Route path="/map" component={PlanMap} />
      </Switch>
    </>
  );
};
export default Router;
