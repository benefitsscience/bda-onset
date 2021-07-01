import DiscreteSlider from "../technicals/slider";


export default function Box(props){
    return(
    <div className="bg-gray-100 w-auto h-auto mb-4 md:m-0">
        <div className="p-2">
            <div className="font-inter text-xl font-extralight text-center">
                {props.text}
            </div>
            <div className="font-inter font-extralight text-gray-700 text-base mx-8 text-justify">
                Add concise description of the plot, and/or explanation of interactive sliders, buttons etc.
            </div>
            <div className="font-inter font-light text-gray-900 text-base mx-8 my-2">
                Slider
                <DiscreteSlider />
            </div>
            <div className="w-10/12 max-w-2xl mx-auto mt-4">
            {props.plot}
            </div>
            <div className="py-6">
                <hr className="color mx-8"/>
                <div className="font-inter font-extralight text-gray-700 text-base mt-3 mx-8 text-justify">
                    This is some extra space to draw conclusions, or give recommendations.
                </div>
            </div>

        </div>
    </div>
    )
}

export function Box1(props){
    return(
    <div className="bg-gray-50 w-auto h-auto mb-4 md:m-0">
        <div className="p-2">
            <div className="font-inter text-xl font-extralight text-center">
                {props.text}
            </div>
            <div className="font-inter font-extralight text-gray-600 text-base mx-8 text-justify">
                Add concise description of the plot, and/or explanation of interactive sliders, buttons etc.
            </div>
            <div className="w-10/12 max-w-2xl mx-auto mt-4">
            {props.plot}
            </div>
            <div className="py-6">
                <hr className="color mx-8"/>
                <div className="font-inter font-extralight text-gray-700 text-base mt-3 mx-8 text-justify">
                    This is some extra space to draw conclusions, or give recommendations.
                </div>
            </div>
        </div>
    </div>
    )
}