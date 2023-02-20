export default function Glass({uB,bB,poster}){
    return (
        <>
        <div className="container hover:scale-110  transition-all ease-in  flex flex-col items-center relative justify-center m-3 ">
            
            {/* <div className="w-full h-6  mb-3">
                <img src={uB} className="w-full h-full"></img>
            </div> */}
            <div className="card rounded-xl transition-all ease-in-out flex relative w-40 h-60 blur-xs bg-gray-700  border-t-white border-l-white ">
                <div className="content">
                    <img className="w-full rounded-xl h-full object-cover" src={poster}></img>
                </div>
            </div>
            {/* <div className="w-full h-6  mt-3">
            <img src={bB} className="w-full h-full"></img>

            </div> */}

        </div>
        
        </>
    )
}