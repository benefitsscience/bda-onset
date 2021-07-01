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
            <div className="flex flex-col mb-12 place-content-center md:flex-row pt-10 gap-4" >
                <FeedbackCard/>
                <ContactCard id={0}/>
            </div>
        </div>
    )
}

export default PageFour
