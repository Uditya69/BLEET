"use client";
import React, { useEffect, useRef, useState } from "react";
import Bleets from "./Bleets";
import Typed from "typed.js";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { CgSearch } from "react-icons/cg";

function Blogscreen() {
  const [greet, setGreet] = useState(" sup");
  useEffect(() => {
    const today = new Date();
    const curHr = today.getHours();

    if (curHr < 12) {
      setGreet("Morning");
    } else if (curHr < 18) {
      setGreet("Afternoon");
    } else {
      setGreet("Evening");
    }
  }, []);
  const { user } = useUser();
  console.log(user);
  const username = user ? user.username : "";

  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [`Good ${greet} ${username}`, "Here are some bleets for you!"],
      startDelay: 250,
      typeSpeed: 100,
      backSpeed: 100,
      fadeOut: true,
      loop: false,
    });
    return () => {
      typed.destroy();
    };
  }, [greet, username]);

  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="font-mono text-xl bg-black p-3 rounded-xl bg-opacity-15 flex flex-col items-center justify-between">
          <p>
            <span ref={el} className="text-blue-400" />{" "}
          </p>
        </div>
        <div className="flex items-center justify-between w-full">
          <div>
            {" "}
            <Link href={""} className="underline">
              All
            </Link>{" "}
            <Link href={""} className="">Mine</Link>
          </div>
          <div className="flex items-center gap-2 p-2 pb-0 border-b border-gray-600 ">
            <CgSearch />

            <input
              placeholder="search"
              type="text"
              className="p-2 pb-4 outline-none bg-transparent"
            />
          </div>
        </div>
        <Bleets />
      </div>
    </div>
  );
}

export default Blogscreen;
