import React from "react";
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default function Box(props){
    return(
    <div className="bg-gray-100 w-auto h-auto mb-4 ml:m-0">
        <div className="p-2">
            <div className="font-inter text-xl font-extralight text-center">
                {props.title}
            </div>
            <div className="font-inter font-extralight text-gray-700 text-base mx-8 text-justify">
                {props.text["intro"]}
            </div>
            <div className="w-full max-w-2xl mx-auto mt-4">
            {props.plot}
            </div>
            <div className="py-6">
                <hr className="color mx-8"/>
                <div className="font-inter font-extralight text-gray-700 text-base mt-3 mx-8 text-justify">
                    {props.text["discussion"]}
                </div>
            </div>

        </div>
    </div>
    )
}

export function PieBox(props){
    return(
    <div className="bg-gray-100 w-auto h-auto mb-4 ml:m-0">
        <div className="p-2">
        <div className="flex flex-row justify-between">
            <div className="invisible"> </div>
            <div className="font-inter text-xl font-extralight text-center">
                {props.title}
            </div>
            <FormControlLabel
                classes="font-inter font-extralight"
                value="start"
                control={<Switch
                    checked={props.showCost}
                    onChange={()=> props.setCost(!props.showCost)}
                />}
                label="Cost ($)"
                labelPlacement="start"
            />
        </div>
        <div className="font-inter font-extralight text-gray-600 text-base mx-8 text-justify">
            {props.text["intro"]}
        </div>
        <div className="flex justify-center">
            <div className="flex flex-col md:flex-row items-center pt-4 overflow-auto md:gap-0 gap-6">
                    {props.plot1}
                    {props.plot2}
            </div>
        </div>
        <div className="py-6">
            <hr className="color mx-8"/>
            <div className="font-inter font-extralight text-gray-700 text-base mt-3 mx-8 text-justify">
                {props.text["discussion"]}
            </div>
        </div>
        </div>
    </div>
    )
}