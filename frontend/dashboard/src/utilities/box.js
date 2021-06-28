function Box(props){
    return(
    <div className="flex bg-gray-200 w-auto h-96 justify-center items-center">
        <div className="font-inter text-xl font-extralight">
            {props.text}
        </div>
    </div>
    )
}

export default Box