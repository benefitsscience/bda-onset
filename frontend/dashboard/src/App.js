import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import {menuOptions, headerSubtitles} from "./utilities/constants";
import PageOne from "./pages/page_1/page";
import PageTwo from "./pages/page_2/page";
import PageThree from "./pages/page_3/page";
import PageFour from "./pages/page_4/page";


function BSTDashboard() {

  return (
      <Router>
          <Switch>
              <Route exact path={"/"}>
                  <PageOne title={menuOptions[0]} subtitle={headerSubtitles[0]} />
              </Route>

              <Route exact path={"/".concat(menuOptions[1].toLowerCase())}>
                  <PageTwo title={menuOptions[1]} subtitle={headerSubtitles[1]} />
              </Route>

              <Route exact path={"/".concat(menuOptions[2].toLowerCase())}>
                  <PageThree title={menuOptions[2]} subtitle={headerSubtitles[2]} />
              </Route>

              <Route exact path={"/".concat(menuOptions[3].toLowerCase())}>
                  <PageFour title={menuOptions[3]} subtitle={headerSubtitles[3]} />
              </Route>
          </Switch>
      </Router>
  );
}

export default BSTDashboard;
