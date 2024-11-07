import Link from "next/link";
import React from "react";
function Footer() {
  return (
    <>
      <div className="flex flex-row items-center text-gray-400 font-mono ">
        <Link href={"/homescreen"}>
        <img src="https://ik.imagekit.io/uditya/Logos/bleet.png?updatedAt=1711403611670" alt="" className="h-[120px] w-[130px]"/>

        </Link>
        <p className="text-3xl">|</p>

        <Link
          href={"https://uditya.dev"}
          target="_blank"
          className="text-xl hover:text-sky-500"
        >
          © uditya.dev
        </Link>
      </div>
    </>
  );
}

export default Footer;
