import React, {useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import {menuOptions, headerSubtitles} from "./utilities/constants";
import PageOne from "./pages/page_1/template";
import PageTwo from "./pages/page_2/template";
import PageThree from "./pages/page_3/template";
import PageFour from "./pages/page_4/template";
import {clientNames, conditionNames} from "./utilities/constants";


function BSTDashboard() {
    const [client, setClient] = React.useState(clientNames[0])
    const [condition, setCondition] = React.useState(conditionNames[0])
    const [data, setData] = React.useState([])

    // Add effect post-rendering
    useEffect(() => {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({Client: client, Condition: condition})
        };
        fetch('/data', requestOptions
        ).then(res => res.json()).then(data => {
            setData(data)
        })
    }, [client, condition]);

    return (
      <Router>
          <Switch>
              <Route exact path={"/"}>
                  <PageOne title={menuOptions[0]}
                           subtitle={headerSubtitles[0]}
                           client={client}
                           setClient={setClient}
                           condition={condition}
                           setCondition={setCondition}
                           data={data}
                  />
              </Route>

              <Route exact path={"/".concat(menuOptions[1].toLowerCase())}>
                  <PageTwo title={menuOptions[1]}
                           subtitle={headerSubtitles[1]}
                           client={client}
                           setClient={setClient}
                           condition={condition}
                           setCondition={setCondition}
                           data={data["table"]}
                  />
              </Route>

              <Route exact path={"/".concat(menuOptions[2].toLowerCase())}>
                  <PageThree title={menuOptions[2]}
                             subtitle={headerSubtitles[2]}
                             client={client}
                             setClient={setClient}
                             condition={condition}
                             setCondition={setCondition}
                  />
              </Route>

              <Route exact path={"/".concat(menuOptions[3].toLowerCase())}>
                  <PageFour title={menuOptions[3]}
                            subtitle={headerSubtitles[3]}
                            client={client}
                            setClient={setClient}
                            condition={condition}
                            setCondition={setCondition}
                  />
              </Route>
          </Switch>
      </Router>
  );
}

export default BSTDashboard;