import React from 'react';
import Header from "../../utilities/header";
import Menu from "../../utilities/menu";
import ContactCard from "../../utilities/contact";

function PageFour(props) {
    return(
        <div>
            <Header title={props.title} subtitle={props.subtitle} />
            <Menu />
            <div className="m-12" >
                <ContactCard id={0}/>
            </div>
        </div>
    )
}

export default PageFour
