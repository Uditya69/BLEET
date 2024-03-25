import Link from "next/link";
import React from "react";
import Image from "next/image";
function Footer() {
  return (
    <>
      <div className="flex flex-row items-center text-gray-400 font-mono ">
        <Link href={"/homescreen"}>
          <Image
            src="https://ik.imagekit.io/uditya/Logos/bleet.png?updatedAt=1711403609222"
            height={100}
            width={100}
            alt=""
          />
        </Link>
        <p className="text-3xl">|</p>

        <Link
          href={"https://uditya.xyz"}
          target="_blank"
          className="text-xl hover:text-sky-500"
        >
          © uditya.xyz
        </Link>
      </div>
    </>
  );
}

export default Footer;
