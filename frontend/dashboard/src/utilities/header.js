function Header(props) {
    return (
        <div className="flex flex-col justify-center h-auto p-2 w-screen bg-gray-700">
                <span className="font-inter text-6xl text-gray-50 font-light text-center pb-1">
                    {props.title}
                </span>
            <span className="font-inter text-2xl text-gray-300 font-extralight text-center">
                    {props.subtitle}
            </span>
        </div>
    )
}

export default Header