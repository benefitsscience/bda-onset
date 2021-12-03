import suggest_img from "../images/feedback.jpg";

function FeedbackCard(){
    return(
        <div className="flex">
            <div className="max-w-sm w-96 bg-gray-100 rounded-2xl shadow-md overflow-hidden">
                <img className="h-36 w-full object-cover" src={suggest_img} alt={"Suggest box"}/>
                <div  className="p-6">
                    <p className="font-inter font-extralight text-2xl text-gray-600">
                        Feedback Box
                    </p>
                    <form>
                        <div className="font-inter font-normal text-base mt-1 mb-2">
                            Problem type
                        </div>
                        <input className="rounded max-h-32 w-full"/>
                        <div className="font-inter font-normal text-base mt-4">
                            Your message
                        </div>
                        <textarea className="rounded h-32 max-h-32 w-full"/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FeedbackCard