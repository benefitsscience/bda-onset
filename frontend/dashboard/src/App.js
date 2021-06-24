import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import PageOne from "./pages/page_1/page";
import PageTwo from "./pages/page_2/page";
import PageThree from "./pages/page_3/page";
import PageFour from "./pages/page_4/page";


function BSTDashboard() {

  return (
      <Router>
          <Switch>
              <Route exact path="/">
                  <PageOne title="Product Title" subtitle="Some info" />
              </Route>
              <Route exact path="/blog">
                  <PageTwo title="Blog" subtitle="Some blog details" />
              </Route>
              <Route exact path="/research">
                  <PageThree title="Research" subtitle="Some research details" />
              </Route>
              <Route exact path="/contact">
                  <PageFour title="Contact" subtitle="Some contact details" />
              </Route>

          </Switch>
      </Router>
  );
}

export default BSTDashboard;
