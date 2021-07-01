import React from 'react';
import Header from "../../utilities/header";
import Menu from "../../utilities/menu";
import ContactCard from "../../utilities/contact";
import FeedbackCard from "../../utilities/feedback";

function PageFour(props) {
    return(
        <div>
            <Header title={props.title} subtitle={props.subtitle} />
            <Menu />
            <div className="flex flex-row flex-wrap place-content-center gap-24 my-8" >
                <FeedbackCard/>
                <ContactCard id={0}/>
            </div>
        </div>
    )
}

export default PageFour
