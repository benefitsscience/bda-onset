import React, {useState, useEffect} from 'react';
import {Fade} from '@material-ui/core';
import {BrowserRouter as Router, Switch, Route, Link, useParams} from "react-router-dom";


function Child() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();

  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
}

function BSTDashboard() {
  // Initialize hook to regression coefficients
  const [coefficients, setCoefficients] = useState([]);
  const [btnClick, setBtnClick] = useState(false)

  // Specify request details for Flask
  const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: 10})
    };

  // Add effect post-rendering
  useEffect(() => {
    fetch('/regression', requestOptions
    ).then(res => res.json()).then(data => {
      setCoefficients(data.coefficients)
    })
  }, []);


  return (
  // Header section
  <div >
    <div className="flex flex-col justify-center h-auto p-4 w-screen bg-gray-700">
        <span className="font-inter text-6xl text-gray-50 font-normal text-center">
            Product Title
        </span>
        <span className="font-inter text-2xl text-gray-300 font-extralight text-center">
            Add short description of the product
        </span>
    </div>
    {/* Selection bar */}
    <Router>
        <div className="w-screen h-auto bg-gray-100">
            <div className="hidden sm:block">
                <div className="flex flex-shrink 0 place-content-center py-1.5">
                    <a className="font-mono tracking-tighter text-lg text-gray-900 font-light hover:font-normal px-8"
                    href="https://www.benefitsscience.com">BST</a>
                    <p className="font-inter text-lg text-gray-900 font-light hover:font-normal px-8">
                        <Link to="/about">
                            About
                        </Link>
                    </p>
                    <p className="font-inter text-lg text-gray-900 font-light hover:font-normal px-8">
                        <Link to="/blog">
                            Blog
                        </Link>
                    </p>
                    <p className="font-inter text-lg text-gray-900 font-light hover:font-normal px-8">
                        <Link to="/research">
                            Research
                        </Link>
                    </p>
                    <p className="font-inter text-lg text-gray-900 font-light hover:font-normal px-8">
                        <Link to="/contact">
                            Contact
                        </Link>
                    </p>
                </div>
            </div>
            <div className="block sm:hidden flex justify-between items-center">
                    <div className="dropdown relative">
                        <button className="p-1.5" onClick={() => setBtnClick(!btnClick)}>
                            <div className="w-5 h-0.5 bg-gray-800 my-1 mx-2"> </div>
                            <div className="w-5 h-0.5 bg-gray-800 my-1 mx-2"> </div>
                        </button>
                        <Fade in={btnClick} mountOnEnter unmountOnExit timeout={400}>
                        <ul className="absolute text-gray-900 bg-gray-100
                         h-screen w-screen bg-opacity-90 mt-1.5">
                            <hr className="line ml-3 mr-24"></hr>
                            <li className="font-inter font-light hover:font-medium py-2 px-4 block whitespace-nowrap">
                                <Link to="/about">
                                    About
                                </Link>
                            </li>
                            <hr className="ml-4 mr-24"></hr>
                            <li className="font-inter font-light hover:font-medium py-2 px-4 block whitespace-nowrap">
                                <Link to="/blog">
                                    Blog
                                </Link>
                            </li>
                            <hr className="ml-4 mr-24"></hr>
                            <li className="font-inter font-light hover:font-medium py-2 px-4 block whitespace-nowrap">
                                <Link to="/research">
                                    Research
                                </Link>
                            </li>
                            <hr className="ml-4 mr-24"></hr>
                            <li className="font-inter font-light hover:font-medium py-2 px-4 block whitespace-nowrap">
                                <Link to="/contact">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                        </Fade>
                    </div>
                    <a className="font-mono tracking-tighter text-lg text-gray-900 font-light hover:font-normal py-1.5 -ml-5"
                       href="https://www.benefitsscience.com">
                        BST
                    </a>
                    <div className="invisible">
                    </div>
            </div>
            <Switch>
                <Route path="/:id" children={<Child />} />
            </Switch>
        </div>
    </Router>

    {/* Key metrics */}
    <div className="flex flex-col md:flex-row justify-evenly items-center py-12">
        <div className="has-tooltip">
            <span className="tooltip rounded shadow-lg p-1 bg-gray-50 text-blue-400 -mt-8">
                Add extra information here!
            </span>
            <div className="flex-column justify-center pb-3 md:py-0">
                <p className="lining-nums text-center text-6xl text-medium text-gray-900">1</p>
                <p className="text-3xl text-center text-light text-gray-600">Metric name</p>
            </div>
        </div>

        <div className="flex-column justify-center py-3 md:py-0">
            <p className="lining-nums text-center text-6xl text-medium text-gray-900">1</p>
            <p className="text-3xl text-center text-light text-gray-600">Metric name</p>
        </div>

        <div className="flex-column justify-center py-3 md:py-0">
            <p className="lining-nums text-center text-6xl text-medium text-gray-900">1</p>
            <p className="text-3xl text-center text-light text-gray-600">Metric name</p>
        </div>

    </div>

</div>
  );
}

export default BSTDashboard;
