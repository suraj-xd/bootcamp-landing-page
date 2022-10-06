import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, ShareIcon, StarIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { useSession } from "next-auth/client";
import { useEffect, useId, useRef, useState } from "react";
import { db, storage } from "../firebase";
import firebase from "firebase";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
//
//
import useGeoLocation from "./useGeolocation";


//
var l = 0;
var n = 0;
function InputBox() {
  const [isFav, setFav] = useState(false);
  const [isPublic, setPublic] = useState(false);
  //
  const [session] = useSession();
  const currentUser = session.user.email;
  const location = useGeoLocation();
  const inputRef = useRef(null);
  const [imageToPost, setImageToPost] = useState(null);
  const filepickerRef = useRef(null);
  const sendPost = (e) => {
    e.preventDefault();


    if (!location.loaded) { return; }
    if (!inputRef.current.value) return;

    const uid = uuidv4();
    if (isPublic) {
      try {
        console.log("in Public")
        db.collection("public")
          .add({
            message: inputRef.current.value,
            name: session.user.name,
            email: session.user.email,
            image: session.user.image,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            latitude: location.coordinates.lat,
            longitude: location.coordinates.lng,
            uuid: uid,
          })
          .then((doc) => {
            if (imageToPost) {
              const uploadTask = storage
                .ref(`${"public"}/${doc.id}`)
                .putString(imageToPost, "data_url");

              removeImage();

              uploadTask.on(
                "state_changed",
                null,
                (error) => {
                  // ERROR function
                  console.log(error);
                },
                () => {
                  // COMPLETE function
                  storage
                    .ref("public")
                    .child(doc.id)
                    .getDownloadURL()
                    .then((url) => {
                      db.collection("public").doc(doc.id).set(
                        {
                          postImage: url,
                        },
                        { merge: true }
                      );
                    });
                }
              );
            }
          });
      } catch {
        location = useGeoLocation();
      }
    }
    try {

      db.collection(currentUser)
        .add({
          message: inputRef.current.value,
          name: session.user.name,
          email: session.user.email,
          image: session.user.image,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          latitude: location.coordinates.lat,
          longitude: location.coordinates.lng,
          uuid: uid,
          favorite: isFav
        })
        .then((doc) => {
          if (imageToPost) {
            const uploadTask = storage
              .ref(`${currentUser}/${doc.id}`)
              .putString(imageToPost, "data_url");

            removeImage();

            uploadTask.on(
              "state_changed",
              null,
              (error) => {
                // ERROR function
                console.log(error);
              },
              () => {
                // COMPLETE function
                storage
                  .ref(currentUser)
                  .child(doc.id)
                  .getDownloadURL()
                  .then((url) => {
                    db.collection(currentUser).doc(doc.id).set(
                      {
                        postImage: url,
                      },
                      { merge: true }
                    );
                  });
              }
            );
          }
        });
    } catch {
      location = useGeoLocation();
    }
    setFav(false);
    setPublic(false);
    inputRef.current.value = "";
  };


  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result);
    };
  };

  const removeImage = () => {
    setImageToPost(null);
  };

  return (
    <div style={{ 'backgroundColor': '#7b9c98' }} className="  rounded-2xl shadow-md  font-medium mt-2">
      <div className="flex space-x-4 p-4 items-center">
        {/* <Image
          className="rounded-full"
          src={session.user.image}
          width={40}
          height={40}
          layout="fixed"
        /> */}
        <form className="flex flex-1 ">
          <input style={{ 'backgroundColor': '#526966' }}
            className="rounded-full h-12 flex-grow px-5 text-white focus:outline-none"
            type="text"
            placeholder={`Wanna create a memory here, ${session.user.name}?`}
            ref={inputRef}
          />
          <button className=" rounded-2xl p-3 ml-2 bg-white text-black hover:bg-gray-200" onClick={sendPost}>
            Post
          </button>
        </form>

        {/* {imageToPost && (
          <div
            onClick={removeImage}
            className="flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer"
          >
            <img className="h-10 object-contain " src={imageToPost} alt="" />
            <p className="text-xs text-red-500 text-center">Remove</p>
          </div>
        )} */}
      </div>

      <div className="flex justify-evenly p-1">
        {/* <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div> */}

        <div
          onClick={() => filepickerRef.current.click()}

          className="inputIcon"
        >
          <CameraIcon className="h-7 text-green-400" />
          <p className="text-xs sm:text-sm text-white xl:text-base">Add Photo/Video</p>
          <input
            onChange={addImageToPost}
            ref={filepickerRef}
            type="file"
            hidden
          />
        </div>
        <div
          style={{ 'backgroundColor': !isPublic ? "" : '#010B13' }}
          onClick={() => setPublic(!isPublic)}
          className="inputIcon"
        >
          <ShareIcon className="h-7 text-blue-700" />
          <p className="text-xs sm:text-sm text-white xl:text-base">Make It Public</p>

        </div>
        <div
          style={{ 'backgroundColor': !isFav ? "" : '#010B13' }}
          onClick={() => setFav(!isFav)}
          className="inputIcon"
        >
          <StarIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm text-white xl:text-base">Add To Favorites</p>

        </div>

        {/* <div className="inputIcon">
          <EmojiHappyIcon className="h-7 text-yellow-300" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </div> */}
      </div>
    </div>
  );
}

export default InputBox;
