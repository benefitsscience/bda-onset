import React from 'react';
import Header from "../../utilities/header";
import Menu from "../../utilities/menu";
import ContactCard from "../../utilities/contact";
import FeedbackCard from "../../utilities/feedback";
import {content} from "./content";

function PageFour(props) {
    return(
        <div>
            <Header title={content["title"]} subtitle={content["subtitle"]} />
            <Menu
              client={props.client}
              setClient={props.setClient}
              condition={props.condition}
              setCondition={props.setCondition}
            />
            <div className="font-inter font-extralight text-gray-600 text-base mx-8 pt-8 text-justify">
                If you have any comments or questions, use the box below.
                For urgent matters, you can contact us directly using the information provided.
            </div>
            <div className="flex flex-row flex-wrap justify-center md:gap-24 my-8 gap-12">
                <FeedbackCard/>
                <ContactCard contacts={content["contactDetails"]} id={0}/>
            </div>
        </div>
    )
}

export default PageFour
