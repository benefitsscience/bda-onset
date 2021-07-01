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
            <div className="font-inter font-extralight text-gray-600 text-base mx-8 pt-8 text-justify">
                If you have any comments or questions, use the box below.
                For urgent matters, you can contact us directly using the information provided.
            </div>
            <div className="flex flex-row flex-wrap place-content-center gap-24 my-8" >
                <FeedbackCard/>
                <ContactCard id={0}/>
            </div>
        </div>
    )
}

export default PageFour
