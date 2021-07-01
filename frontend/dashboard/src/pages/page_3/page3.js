import React from 'react';
import Header from "../../utilities/header";
import Menu from "../../utilities/menu";
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

function PageThree(props) {
    return(
        <div>
            <Header title={props.title} subtitle={props.subtitle} />
            <Menu />
            <div className="font-inter font-extralight text-3xl text-gray-700 text-center my-4">
                Why Momentum Really Works
            </div>
            <div className="font-inter font-extralight text-gray-600 text-base mx-16 text-justify">
                Here’s a popular story about momentum: gradient descent is a man walking down a hill.
                He follows the steepest path downwards; his progress is slow, but steady.
                Momentum is a heavy ball rolling down the same hill. The added inertia acts both as a smoother
                and an accelerator, dampening oscillations and causing us to barrel through narrow valleys,
                small humps and local minima.
                <br />
                <br />
                This standard story isn’t wrong, but it fails to explain many important behaviors of momentum.
                In fact, momentum can be understood far more precisely if we study it on the right model.
                <br />
                <br />
                One nice model is the convex quadratic. This model is rich enough to reproduce momentum’s
                local dynamics in real problems, and yet simple enough to be understood in closed form.
                This balance gives us powerful traction for understanding this algorithm.
                <br />
                <br />
                <hr className="color"/>
                <br />
                We begin with gradient descent. The algorithm has many virtues, but speed is not one of them.
                It is simple -- when optimizing a smooth function f we make a small step  in the gradient
                <BlockMath math="w^{k+1} = w^k - \alpha \Delta f(w^k)"/>
            </div>

        </div>
            )
    }

export default PageThree