"use client";
import React from "react";
import Lottie from "lottie-react";
import penguin from "@/assets/typing.json";
function CreatePost() {
  return (
    <>
      <div className="flex flex-row  justify-center h-full bg-opacity-25 ">
    <Lottie animationData={penguin} className="h-[25vh] fixed z-0 blur-sm" />
        <div className="h-[88vh] items-center flex flex-col gap-2">
          <form
            className="z-10 flex flex-col gap-y-3 justify-evenly
          border border-gray-400 p-2 w-[40vw] h-fit   rounded-md bg-black bg-opacity-50"
          >
            <label htmlFor="title" className="text-xl p-3">
              What's on your mind today?
            </label>
            <div className="p-2 gap-x-3 gap-y-2 flex flex-row">
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                className=" bg-transparent border-b-[1.5px] border-gray-400"
              />
            </div>
            <div className="p-2 gap-x-3 gap-y-2 flex flex-row">
              <label htmlFor="title">Content: </label>
              <textarea
                id="bleet"
                className=" bg-transparent border-b-[1.5px] border-gray-400"
              />
            </div>

            <button
              type="submit"
              className="self-end mx-5 bg-green-900 p-2 rounded-3xl"
            >
              Post
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreatePost;
