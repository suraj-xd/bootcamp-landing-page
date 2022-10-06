import Image from "next/image";
import HeaderIcon from "./HeaderIcon";
import {
  LogoutIcon,
  Reactangle
} from "@heroicons/react/solid";
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { signOut, useSession } from "next-auth/client";
function Header() {
  const [session] = useSession();

  return (
    <header style={{'backgroundColor':'#010B13'}} className="sticky top-0 z-50 flex items-center p-3 lg:px-5 shadow-md ">
      {/* Left */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
        <path d="M5.566 4.657A4.505 4.505 0 016.75 4.5h10.5c.41 0 .806.055 1.183.157A3 3 0 0015.75 3h-7.5a3 3 0 00-2.684 1.657zM2.25 12a3 3 0 013-3h13.5a3 3 0 013 3v6a3 3 0 01-3 3H5.25a3 3 0 01-3-3v-6zM5.25 7.5c-.41 0-.806.055-1.184.157A3 3 0 016.75 6h10.5a3 3 0 012.683 1.657A4.505 4.505 0 0018.75 7.5H5.25z" />
      </svg>
      <h3 className="text-white font-semibold pl-2">Callback.</h3>
      <div className="flex items-center sm:space-x-2 justify-end absolute right-1">
        <Image

          className="rounded-full flex"
          src={session.user.image}
          width="40"
          height="40"
          layout="fixed"
        />
        <p className="lg:inline-flex text-white text-sm whitespace-nowrap font-semibold pr-3">
          {session.user.name}
        </p>
        {/* <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" /> */}

        <LogoutIcon  onClick={() => signOut()} className="icon" />
      </div>
    </header>
  );
}

export default Header;
