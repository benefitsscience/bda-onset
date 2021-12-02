import {contactDetails} from "../pages/constants";
import contact_img from "../../public/profile.jpg"
import {useState} from "react";


function SkillBox(props){
    return(
        <div className="flex justify-center items-center bg-blue-100 rounded-md shadow-sm
         text-blue-800 font-light p-2">
            {props.skill}
        </div>
    )
}


function ContactCard(props){
    const [isClicked, setIsClicked] = useState(true)

    return(
        <div className="flex">
            <div className="max-w-sm w-96 bg-gray-100 rounded-2xl shadow-md overflow-hidden">
                <img className="h-36 w-full object-cover" src={contact_img} alt={"Profile picture Omid"} />
                <div  className="p-6">
                    <a className="font-inter font-extralight hover:font-normal text-2xl text-gray-600" href={contactDetails[props.id].website}>
                        {contactDetails[props.id].name}
                    </a>
                    <div className="font-inter font-normal text-base mt-1 mb-2">
                        {contactDetails[props.id].title}
                    </div>
                    <div className="font-inter font-extralight text-gray-500 text-sm text-justify">
                        Omid leads the Data Science team at Benefits Science in the development of
                        optimization and machine learning solutions. He specializes in algorithms and solutions
                        for big-data environments affected by uncertainty and subjected to complex risk measures.
                        {!isClicked && (
                            <div className="font-inter font-extralight text-gray-500 text-sm text-justify inline">
                                &nbsp; Add extra details about your profile that can go over multiple lines.
                            </div>
                        )}
                            <div className="inline" onClick={() => setIsClicked(!isClicked)}>
                                {isClicked && (
                                    <div className="font-inter font-normal hover:font-semibold
                                    text-gray-900 text-sm text-justify inline">
                                        &nbsp; More
                                    </div>
                                )}
                                {!isClicked && (
                                    <div className="font-inter font-normal hover:font-semibold
                                     text-gray-900 text-sm text-justify inline">
                                        &nbsp; Less
                                    </div>
                                )}
                            </div>
                    </div>
                    <div className="flex flex-row flex-wrap my-4 gap-2">
                        <SkillBox skill={"Leadership"} />
                        <SkillBox skill={"Optimization"} />
                        <SkillBox skill={"Healthcare"} />
                    </div>
                    <hr />
                    <div className="font-inter font-normal text-base mt-1">
                        E-mail
                    </div>
                    <div className="font-inter font-extralight text-sm text-gray-500">
                        {contactDetails[props.id].email}
                    </div>
                    <div className="font-inter font-normal text-base mt-1">
                        Phone
                    </div>
                    <div className="font-inter font-extralight text-sm text-gray-500">
                        {contactDetails[props.id].phone}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ContactCard