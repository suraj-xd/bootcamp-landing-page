import { db } from "../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import Post from "./Post";
import { useSession } from "next-auth/client";
import { isPointWithinRadius } from "geolib";
import useGeoLocation from "./useGeolocation";
import { useEffect, useState } from "react";
//
//
function Posts({ genre, posts }) {
  console.log(genre)
  const [session] = useSession();
  const currentUser = session.user.email;
  // example
  const [docid, setDocid] = useState([]);
  var location = useGeoLocation();
  const getLocation = (doc) => {
    try {

      const latitudeDb = doc.data().latitude;
      const longitudeDb = doc.data().longitude;
      if (latitudeDb != undefined && longitudeDb != undefined && typeof (location.coordinates.lng) !== undefined && typeof (location.coordinates.lng) !== undefined) {
        const ans = isPointWithinRadius(
          { latitude: Number(latitudeDb), longitude: Number(longitudeDb) },
          { latitude: location.coordinates.lat, longitude: location.coordinates.lng },
          500
        );
        return doc.data().uuid;
      }
      return false;
    } catch {
      location = useGeoLocation();
    }
  }
  // const getQuery = async ()=>{
  //   if(!docid.length) return;
  //   const [mypost, loading, error] = useCollection(
  //     db.collection(currentUser).orderBy("timestamp", "desc")
  //   );
  //   mypost?.docs.map((post) => console.log(post))
  // }
  //

  const [realtimePosts, loading, error] = useCollection(
    db.collection(currentUser).orderBy("timestamp", "desc")
  );
  const [publicPosts, load, err] = useCollection(
    db.collection('public').orderBy("timestamp", "desc")
  );

  location = useGeoLocation();
  useEffect(() => {
    try {
      db.collection(currentUser).get().then((snapShot) => {
        setDocid([]);
        snapShot.docs.map((doc) => {
          const timestampOwn = getLocation(doc);
          if (timestampOwn) {
            setDocid((prev) => { return [...prev, timestampOwn] });
          }
        })
      })
    } catch {
      location = useGeoLocation();
    }
  }, [realtimePosts])
  return (
    <div>

      {docid && genre == 'feed'
        &&
        realtimePosts?.docs.map((post) => (
          docid.map((uid) => (
            post.data().uuid == uid &&
            <Post
              key={post.id}
              name={post.data().name}
              message={post.data().message}
              email={post.data().email}
              timestamp={post.data().timestamp}
              image={post.data().image}
              postImage={post.data().postImage}
              favorite={post.data().favorite}
              genre={genre}
            />
          ))
        ))}
      {genre == 'favorite'
        &&
        realtimePosts?.docs.map((post) => post.data().favorite && (
          <Post
            key={post.id}
            name={post.data().name}
            message={post.data().message}
            email={post.data().email}
            timestamp={post.data().timestamp}
            image={post.data().image}
            postImage={post.data().postImage}
            favorite={post.data().favorite}
            genre={genre}

          />
        ))
      }
      {genre == 'public'
        &&
        publicPosts?.docs.map((post) => 
                <Post
                key={post.id}
                name={post.data().name}
                message={post.data().message}
                email={post.data().email}
                timestamp={post.data().timestamp}
                image={post.data().image}
                postImage={post.data().postImage}
                favorite={post.data().favorite}
                genre={genre}

                />
              
         
        )
      }

    </div>
  );
}

export default Posts;
