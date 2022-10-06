import Image from "next/image";

function Post({ name, message, email, postImage, image, timestamp }) {
  return (
    <div className="flex flex-col">
      <div style={{ 'backgroundColor': '#240f2d' }} className="p-5  mt-5 rounded-t-2xl shadow-sm">
        <div className="flex items-center space-x-2">
          <img className="rounded-full" src={image} width={40} height={40} />
          <div>
            <p className="font-medium text-gray-200">{name}</p>
            {timestamp ? (
              <p className="text-xs text-gray-400">
                {new Date(timestamp?.toDate()).toLocaleString()}
              </p>
            ) : (
              <p className="text-xs text-gray-400">Loading</p>
            )}
          </div>
        </div>

        <p className="pt-4 text-white">{message}</p>
      </div>
      {postImage && (
        <div className="relative h-56 md:h-96 bg-white">
          <Image src={postImage} objectFit="cover" layout="fill" />
        </div>
      )}

      {/* Post Footer */}
      {/* <div style={{ 'backgroundColor': '#240f2d' }} className="sticky flex justify-between items-center rounded-b-2xl  shadow-md   ">

        <div className="inputIcon p-3 rounded-none rounded-bl-2xl rounded-br-2xl ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#240f2d" className="w-6 h-6 ">
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
          </svg>
          <p style={{ 'color': '#240f2d' }} className="text-xs sm:text-base ">Heart It!</p>
        </div>

      </div> */}
    </div>
  );
}

export default Post;
