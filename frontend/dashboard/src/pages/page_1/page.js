import React from 'react';
import Header from "../../utilities/header";
import Menu from "../../utilities/menu";
import Metric from "../../technicals/key-metric";

function PageOne(props) {
    return(
        <div>
            <Header title={props.title} subtitle={props.subtitle} />
            <Menu />
            <Metric />
        </div>
    )
}

export default PageOne
