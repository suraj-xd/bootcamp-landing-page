export default function Elements({title,imgUrl}){
    return(
        <>
        <h2 d ata-shadow='anveshna ' className="text bg-white px-3 py-1  font-extrabold text-sm  sm:text-md md:text-lg lg:text-xl rounded-md text-gray-800 flex justify-start items-center gap-1"> 
                                    <img className="h-5 w-5" src={imgUrl}/>
                                    {title}</h2>
        </>
    )
}