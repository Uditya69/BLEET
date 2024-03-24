"use client";
import { db } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";

interface bleet {
  id: string;
  username: string;
  title: string;
  content: string;
}
async function fetchbleet(): Promise<bleet[]> {
  const snapshot = await getDocs(collection(db, "bleet"));
  const data: bleet[] = [];
  snapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() } as bleet);
  });
  return data;
}

function Bleets() {
  const [bleets, setBleets] = useState<bleet[]>([]);

  useEffect(() => {
    async function fetchdata() {
      const data = await fetchbleet();
      setBleets(data);
    }
    fetchdata();
  }, []);

  return (
    <div className="flex justify-center w-[80vw]  m-auto self-center">
       <div className=" grid grid-cols-1 items-center font-thin">
        {bleets.map((bleet) => (
          <div className="backdrop-blur-sm bg-gray-800 min-w-[50vw] border-[1px] border-gray-500 mt-3 w-fit rounded-md flex flex-col self-center m-auto gap-2"  key={bleet.id}>
            <h2 className=" text-lg font-bold self-center text-gray-100 border-b-[1px] border-gray-300 p-2 pb-0">{bleet.title}</h2>
            <p className="text-md text-gray-200 border-y-[1px] border-gray-600 p-3 max-h-[40vh] overflow-y-auto">{bleet.content}</p>
            <p className="self-end text-sm font-semibold text-gray-400 p-2 px-5">By: {bleet.username}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

 
export default Bleets;
