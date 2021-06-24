import React from 'react';
import Header from "../../utilities/header";
import Menu from "../../utilities/menu";

function PageThree(props) {
    return(
        <div>
            <Header title={props.title} subtitle={props.subtitle} />
            <Menu />
        </div>
    )
}

export default PageThree