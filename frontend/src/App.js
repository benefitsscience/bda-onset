import React, {useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import PageOne from "./pages/page_1/template";
import PageTwo from "./pages/page_2/template";
import PageThree from "./pages/page_3/template";
import PageFour from "./pages/page_4/template";
import {menuOptions} from "./pages/constants";
import {clientNames, conditionNames} from "./pages/constants";


function BSTDashboard() {
    // Initialize constants
    const [client, setClient] = React.useState(clientNames[0])
    const [condition, setCondition] = React.useState(conditionNames[0])
    const [data, setData] = React.useState({data:[], explanation: [], isLoaded: false})

    // Fetch data
      useEffect(() => {
        const requestOptions = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({Client: client, Condition: condition})
            };
        fetch('/data', requestOptions)
            .then(res => res.json()).then(data => {
          setData({data: data.data, explanation: data.explanation, isLoaded: true});
        });
      }, [client, condition]);

    console.log(client)
    console.log(data)

    if (data.isLoaded) {
        return (
            <Router>
                <Switch>
                    <Route exact path={"/"}>
                        <PageOne client={client}
                                 setClient={setClient}
                                 condition={condition}
                                 setCondition={setCondition}
                                 data={data.data}
                                 explanation={data.explanation}
                        />
                    </Route>

                    <Route exact path={"/".concat(menuOptions[1].toLowerCase())}>
                        <PageTwo client={client}
                                 setClient={setClient}
                                 condition={condition}
                                 setCondition={setCondition}
                                 data={data.data["table"]}
                        />
                    </Route>

                    <Route exact path={"/".concat(menuOptions[2].toLowerCase())}>
                        <PageThree client={client}
                                   setClient={setClient}
                                   condition={condition}
                                   setCondition={setCondition}
                        />
                    </Route>

                    <Route exact path={"/".concat(menuOptions[3].toLowerCase())}>
                        <PageFour client={client}
                                  setClient={setClient}
                                  condition={condition}
                                  setCondition={setCondition}
                        />
                    </Route>
                </Switch>
            </Router>
        );
    }
    else {
        return (
            <p>Loading</p>
        )
    }
}

export default BSTDashboard;
