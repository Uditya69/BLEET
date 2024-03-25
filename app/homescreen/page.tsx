import Link from "next/link";
import React from "react";

function HomeScreen() {
  return (
    <div className="w-[80vw] flex items-center justify-center m-auto ">
      <div className="p-5 mx-10 flex flex-col items-center justify-center bg-black bg-opacity-10 rounded-2xl">
        <p className="text-4xl font-mono font-bold ">
          <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
            {" "}
            Welcome to Bleet!
          </span>
        </p>
        <span className="text-2xl mt-5 border-t-[1px] p-3 border-gray-600 font-sans bg-gradient-to-r from-neutral-200 to-stone-200 bg-clip-text text-transparent text-center">
          Join our vibrant community where you can share your thoughts in short,
          tweet-like posts! Bleet offers a simple platform for quick
          expressions. Read others' Bleet and start Bleeting your own today!
          Let's get Bleeting!
        </span>
      <div className=" p-5 mx-14 mt-5 flex flex-row text-gray-100">
        <Link
          href={"/blogscreen"}
          className="flex p-2 rounded-xl items-center text-center text-lg m-2 bg-gradient-to-r from-purple-700 to-purple-900 hover:bg-gradient-to-tr transition duration-700 ease-in-out "
        >
          {" "}
          Read Bleets📖
        </Link>
        <Link
          href={"/createpost"}
          className="flex p-2 rounded-xl items-center text-center text-lg m-2  bg-gradient-to-r from-rose-400 to-red-600 hover:bg-gradient-to-tr"
        >
          Bleet Yourself✏️
        </Link>
      </div>
      </div>
    </div>
  );
}

export default HomeScreen;
