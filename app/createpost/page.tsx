"use client";
import React, { useEffect, useRef, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/firebase";
import Typed from "typed.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

function CreatePost() {
  const { user } = useUser();
  const username = user ? user.username : "";
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  const handlePost = async (e: any) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "bleet"), {
        username: username,
        title: title,
        content: content,
      });
      console.log("Document written with ID: ", docRef.id);
      setContent("");
      setTitle("");
      toast.success("Post created successfully!");
      router.push("/blogscreen");
    } catch (e) {
      console.error("Error adding document: ", e);
      toast.error("Unable to Create post !");
    }
  };
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [`Yoo ${username}! What's cookin?🧑‍🍳`],
      startDelay: 250,
      typeSpeed: 100,
      backSpeed: 100,
      fadeOut: true,
      loop: false,
    });
    return () => {
      typed.destroy();
    };
  }, [user]);
  return (
    <>
    <ToastContainer/>
      <div className="flex flex-col w-fit  justify-center items-centre m-auto h-full p-5 gap-y-5">
        <div className="items-center m-auto ">
          {" "}
          <span
            ref={el}
            className="bg-gradient-to-r from-slate-300 to-gray-400 bg-clip-text text-transparent p-5 rounded-xl text-2xl self-center font-mono font-bold"
          />{" "}
        </div>
        <div>
          <form
            className="flex flex-col gap-3 border-[1px] bg-black bg-opacity-[6%] border-gray-500 rounded-xl p-5 h-[70vh] w-[80vw]"
            onSubmit={handlePost}
          >
            <div className="w-full flex flex-row items-center">
              <label>•</label>
              <input
                type="text"
                placeholder="Title ✏️"
                className="bg-transparent border-b-[1px] border-gray-600 w-full p-5 text-2xl"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <textarea
              placeholder="Spill the tea☕"
              className="h-full p-10 bg-transparent border-0 text-2xl"
              onChange={(e) => setContent(e.target.value)}
            />
            <button
              type="submit"
              className="p-2 px-2 rounded-2xl text-xl self-end bg-emerald-400 bg-opacity-55"
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
