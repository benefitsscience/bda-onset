import {Link} from "react-router-dom";
import React, {useState} from "react";
import {Fade} from "@material-ui/core";

// TODO: use `for loop` for each menu option and update `Link` accordingly.
// `Menu` composed of `HorizontalMenu` for large screens, and `VerticalMenu` w/ `Dropdown` for small screens

function HorizontalMenu(props) {
    return(
        <div className="hidden sm:block">
            <div className="flex flex-shrink-0 place-content-center py-1.5">
                <a className="font-mono tracking-tighter text-lg text-gray-900 font-light hover:font-normal px-8"
                   href="https://www.benefitsscience.com">
                    BST
                </a>
                <p className="font-inter text-lg text-gray-900 font-light hover:font-normal px-8">
                    <Link to="/">
                        {props.options[0]}
                    </Link>
                </p>
                <p className="font-inter text-lg text-gray-900 font-light hover:font-normal px-8">
                    <Link to="/blog">
                        {props.options[1]}
                    </Link>
                </p>
                <p className="font-inter text-lg text-gray-900 font-light hover:font-normal px-8">
                    <Link to="/research">
                        {props.options[2]}
                    </Link>
                </p>
                <p className="font-inter text-lg text-gray-900 font-light hover:font-normal px-8">
                    <Link to="/contact">
                        {props.options[3]}
                    </Link>
                </p>
                </div>
            </div>
    )
}

function Dropdown(props) {
    return(
        <Fade in={props.isClicked} mountOnEnter unmountOnExit timeout={400}>
            <ul className="absolute text-gray-900 bg-gray-100
             h-screen w-screen bg-opacity-90 mt-1.5">
                <hr className="color margin" />
                <li className="font-inter font-light hover:font-medium py-2 px-4 block whitespace-nowrap">
                    <Link to="/">
                        {props.options[0]}
                    </Link>
                </li>
                <hr className="margin"/>
                <li className="font-inter font-light hover:font-medium py-2 px-4 block whitespace-nowrap">
                    <Link to="/blog">
                        {props.options[1]}
                    </Link>
                </li>
                <hr className="margin"/>
                <li className="font-inter font-light hover:font-medium py-2 px-4 block whitespace-nowrap">
                    <Link to="/research">
                        {props.options[2]}
                    </Link>
                </li>
                <hr className="margin"/>
                <li className="font-inter font-light hover:font-medium py-2 px-4 block whitespace-nowrap">
                    <Link to="/contact">
                        {props.options[3]}
                    </Link>
                </li>
            </ul>
        </Fade>
    )
}

function VerticalMenu(props) {
    const [isClicked, setIsClicked] = useState(false)
    return(
        <div className="block sm:hidden flex justify-between items-center">
            <div className="relative">
                <button className="p-1.5" onClick={() => setIsClicked(!isClicked)}>
                    <div className="w-5 h-0.5 bg-gray-800 my-1 mx-2"> </div>
                    <div className="w-5 h-0.5 bg-gray-800 my-1 mx-2"> </div>
                </button>
                <Dropdown isClicked={isClicked} options={props.options} />
            </div>
            <a className="font-mono tracking-tighter text-lg text-gray-900 font-light hover:font-normal py-1.5 -ml-5"
               href="https://www.benefitsscience.com">
                BST
            </a>
            <div className="invisible">
            </div>
        </div>
    )
}

function Menu() {
    const options = ["About", "Blog", "Research", "Contact"]
    return(
        <div className="w-screen h-auto bg-gray-100">
            <HorizontalMenu options={options} />
            <VerticalMenu options={options} />
        </div>
    )
}

export default Menu
