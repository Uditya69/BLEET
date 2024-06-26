import Link from "next/link";
import React from "react";
import { GoPencil } from "react-icons/go";
import { IoReaderOutline } from "react-icons/io5";
import { SignInButton, SignedOut, UserButton } from "@clerk/nextjs";

function Header() {
  return (
    <div className="flex flex-row gap-x-3 justify-between items-center px-4  backdrop-blur-md bg-opacity-[25%] w-[80vw] text-gray-300">
      <div>
        <Link href={"/homescreen"} className="items-center">
          <img src="https://ik.imagekit.io/uditya/Logos/bleet.png?updatedAt=1711403611670" alt="" className="h-[120px] w-[130px]"/>
        </Link>
      </div>
      <div className="text-2xl flex flex-row gap-x-5 items-center h">
        <Link href={"/blogscreen"} className="hover:text-teal-200">
          <div className="flex flex-row items-center gap-x-2 ">
            <IoReaderOutline size={35} />
          </div>{" "}
        </Link>
        <Link
          href={"/createpost"}
          className="flex flex-row hover:text-orange-300"
        >
          <div className="flex flex-row items-center gap-x-2">
            <GoPencil size={35} />
          </div>
        </Link>
        <Link href={""}>
          {" "}
          <div className="">
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  userButtonAvatarBox: { height: "50px", width: "50px" },
                },
              }}
            />
            <SignedOut>
              <SignInButton afterSignInUrl="/" mode="modal" />
            </SignedOut>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
