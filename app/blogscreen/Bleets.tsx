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
    <div>
       <div>
        {bleets.map((bleet) => (
          <div className="bg-blue-400 border-2 m-2" key={bleet.id}>
            <h2 className="bg-purple-600">{bleet.title}</h2>
            <p className="bg-yellow-600">{bleet.content}</p>
            <p className="bg-red-700">Author: {bleet.username}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

 
export default Bleets;
