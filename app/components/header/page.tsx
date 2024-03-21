import Link from "next/link";
import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { GoPencil } from "react-icons/go";
import { IoReaderOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { UserButton } from "@clerk/nextjs";

function Header() {
  return (
    <div className="flex flex-row gap-x-3 justify-between items-center px-4 bg-black bg-opacity-[15%] ">
      <div>
        <Link href={"/homescreen"} className="items-center">
          <Image src={logo} alt="" width={100} height={10} />
        </Link>
      </div>
      <div className="text-2xl flex flex-row gap-x-5 items-center">
        <Link href={"/createpost"}   className="flex flex-row">
          <div className="flex flex-row items-center gap-x-2">
            Create <GoPencil />
          </div>
        </Link>
        <Link href={"/blogscreen"} >
          <div className="flex flex-row items-center gap-x-2">
            Blogs <IoReaderOutline />
          </div>{" "}
        </Link>
        <Link href={""}>
          {" "}
          <div>
            <UserButton/>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
