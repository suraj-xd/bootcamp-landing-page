import { signIn } from "next-auth/client";

function Login() {
  return (
    <div className="main">
      
    <div className="flex items-center justify-center h-screen">

      <h1
        className="p-5 w-20  bg-black rounded-3xl text-white text-center  cursor-pointer"
        onClick={signIn}
        >
        Login
      </h1> 
      <h4
        className="m-2 pl-3"
        
        >
        using 
      </h4> 
      <div className="inline-flex p-3 m-2 cursor-pointer">
<img className="h-9 w-9 m-1"
  src="https://cdn-icons-png.flaticon.com/512/104/104093.png"
  height={400}
  width={400}
  objectFit="contain"
  onClick={signIn}
></img> 
 <img
 className="h-9 w-9 m-1"
 src="https://cdn-icons-png.flaticon.com/512/20/20837.png"
 height={400}
 width={400}
 onClick={signIn}
 objectFit="contain"
></img>
 </div>
      
    </div>
 </div>
  );
}

export default Login;
