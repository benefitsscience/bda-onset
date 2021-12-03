import {Link} from "react-router-dom";
import React, {useState} from "react";
import {Fade} from "@material-ui/core";
import {menuOptions, clientNames, conditionNames} from "../pages/constants";


function HorizontalMenu(props) {
    const itemsLayout = [];
    let url = "/";
    for (const [index, value] of props.menuOptions.entries()) {
        if(index>0){
            url = "/".concat(value.toLowerCase())
        }
        itemsLayout.push(
            <p className="font-inter text-lg text-gray-900 font-light hover:font-normal px-8">
                <Link to={url}>
                    {value}
                </Link>
            </p>
        )
    }
    return(
        <div className="hidden ml:block">
            <div className="flex flex-shrink-0 place-content-center py-1.5">
                <ClientMenu
                    client={props.client}
                    setClient={props.setClient}
                    clientOptions={props.clientOptions}
                />
                {itemsLayout}
                <ConditionMenu
                    condition={props.condition}
                    setCondition={props.setCondition}
                    conditionOptions={props.conditionOptions}
                />
                </div>
            </div>
    )
}


function VerticalMenu(props) {
    const [isClicked, setIsClicked] = useState(false)
    return(
        <div className="block ml:hidden flex justify-between items-center py-1.5">
            <div className="relative">
                <button className="p-1.5 focus:outline-none" onClick={() => setIsClicked(!isClicked)}>
                    <div className="w-5 h-0.5 bg-gray-800 my-1 mx-2"> </div>
                    <div className="w-5 h-0.5 bg-gray-800 my-1 mx-2"> </div>
                </button>
                <Dropdown isClicked={isClicked} options={props.menuOptions} />
            </div>
            <ClientMenu client={props.client}
                        setClient={props.setClient}
                        clientOptions={props.clientOptions}
            />
            <ConditionMenu
                    condition={props.condition}
                    setCondition={props.setCondition}
                    conditionOptions={props.conditionOptions}
            />
            <div className="invisible">
            </div>
        </div>
    )
}


function ClientMenu(props){
    const [isClicked, setIsClicked] = useState(false)
    return (
        <div className="block">
                <button className="focus:outline-none" onClick={() => setIsClicked(!isClicked)}>
                    <div className="flex flex-row items-center font-inter text-lg text-gray-900
                                    font-medium hover:font-bold pr-8">
                        {props.client}&nbsp;
                        <div className="w-5 overflow-hidden">
                            <div className=" h-2 w-2 bg-black -rotate-45 transform origin-top-left"></div>
                        </div>
                    </div>
                </button>
                <ClientDropdown isClicked={isClicked}
                                options={props.clientOptions}
                                setClient={props.setClient}
                />
        </div>
    )
}


function ConditionMenu(props){
    const [isClicked, setIsClicked] = useState(false)
    return (
        <div className="block">
                <button className="focus:outline-none" onClick={() => setIsClicked(!isClicked)}>
                    <div className="flex flex-row items-center font-inter text-lg text-gray-900
                                    font-medium hover:font-bold pr-8">
                        {props.condition}&nbsp;
                        <div className="w-5 overflow-hidden">
                            <div className=" h-2 w-2 bg-black -rotate-45 transform origin-top-left"></div>
                        </div>
                    </div>
                </button>
                <ConditionDropdown isClicked={isClicked}
                                options={props.conditionOptions}
                                setCondition={props.setCondition}
                />
        </div>
    )
}


function Dropdown(props) {
    const itemsLayout = []
    for (const [index, value] of props.options.entries()) {
        if(index===0){
            itemsLayout.push(
                <div>
                    <hr className="color margin" />
                    <li className="font-inter font-light hover:font-medium py-2 px-4 block whitespace-nowrap">
                        <Link to="/">
                            {value}
                        </Link>
                    </li>
                </div>
            )
        }
        else{
            let url = "/".concat(value.toLowerCase())
            itemsLayout.push(
                <div>
                    <hr className="margin"/>
                    <li className="font-inter font-light hover:font-medium py-2 px-4 block whitespace-nowrap">
                        <Link to={url}>
                            {value}
                        </Link>
                    </li>
                </div>
            )
        }
    }
    return(
        <Fade in={props.isClicked} mountOnEnter unmountOnExit timeout={450}>
            <ul className="absolute text-gray-900 bg-gray-100 h-screen w-screen bg-opacity-90 mt-1.5 z-50">
                {itemsLayout}
            </ul>
        </Fade>
    )
}


function ClientDropdown(props) {
    const itemsLayout = []
    for (const [, value] of props.options.entries()) {
        itemsLayout.push(
            <div>
                <hr className="margin" />
                <li className="font-inter font-light hover:font-medium py-2 px-4 block whitespace-nowrap">
                    <button className="focus:outline-none" onClick={() => props.setClient(value)}>
                        {value}
                    </button>
                </li>
            </div>
        )
    }
    return(
        <Fade in={props.isClicked} mountOnEnter unmountOnExit timeout={450}>
            <ul className="absolute text-gray-900 bg-gray-100 h-auto w-auto mt-1.5 z-50 -ml-1.5">
                {itemsLayout}
            </ul>
        </Fade>
    )
}


function ConditionDropdown(props) {
    const itemsLayout = []
    for (const [, value] of props.options.entries()) {
        itemsLayout.push(
            <div>
                <hr className="margin" />
                <li className="font-inter font-light hover:font-medium py-2 px-4 block whitespace-nowrap">
                    <button className="focus:outline-none" onClick={() => props.setCondition(value)}>
                        {value}
                    </button>
                </li>
            </div>
        )
    }
    return(
        <Fade in={props.isClicked} mountOnEnter unmountOnExit timeout={450}>
            <ul className="absolute text-gray-900 bg-gray-100 h-auto w-auto mt-1.5 z-50 -ml-1.5">
                {itemsLayout}
            </ul>
        </Fade>
    )
}


function Menu(props) {
    return(
        <div className="w-screen h-auto bg-gray-100">
            <HorizontalMenu menuOptions={menuOptions}
                            clientOptions={clientNames}
                            client={props.client}
                            setClient={props.setClient}
                            conditionOptions={conditionNames}
                            condition={props.condition}
                            setCondition={props.setCondition}
            />
            <VerticalMenu menuOptions={menuOptions}
                          clientOptions={clientNames}
                          client={props.client}
                          setClient={props.setClient}
                          conditionOptions={conditionNames}
                          condition={props.condition}
                          setCondition={props.setCondition}
            />
        </div>
    )
}

export default Menu
