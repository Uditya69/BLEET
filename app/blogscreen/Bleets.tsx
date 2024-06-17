"use client";
import { db } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";
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
    <div className="flex justify-center w-[80vw]  m-auto self-center font-mono">
      <div className=" grid grid-cols-1 items-center">
        {bleets.map((bleet) => (
          <Link href={`/blogscreen/${bleet.id}`}
          target="_blank"
            className="backdrop-blur-sm w-[80vw] transition duration-700 ease-in-out text-gray-400 border-[1px] p-2 px-4 border-gray-600 rounded-lg my-3 bg-black bg-opacity-20 hover:bg-gray-900 hover:hover:text-gray-300 hover:border-blue-300"
            key={bleet.id}
          >
            <h2 className=" text-lg font-bold self-center px-4 p-1 pb-2 border-b-[1px] text-orange-300 border-gray-700">
            • {bleet.username}: {bleet.title}
            </h2>
            <p className="text-md mt-1  p-3 max-h-[40vh] overflow-y-auto ">
              {bleet.content}
            </p>
            
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Bleets;
