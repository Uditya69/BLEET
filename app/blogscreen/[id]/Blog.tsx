"use client";
import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase";
import Loader from "@/app/components/shared/loader";

interface Blog {
  id: string;
  title: string;
  content: string;
  username: string;
  img?: string;
}
async function fetchblog(blogid: string): Promise<Blog> {
  const docRef = doc(db, "bleet", blogid);
  const docSnap = await getDoc(docRef);
  return { id: docSnap.id, ...docSnap.data() } as Blog;
}

function Blog(params: { id: string }) {
  const [blog, setBlog] = useState<Blog | null>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function loadblog() {
      const data=await fetchblog(params.id);  
      if(data){
        setLoading(false);
        setBlog(data);
      }
    }
    loadblog();
  }, [params.id]);

  if(loading){
    return(
      <div className="flex flex-col justify-center items-center">
        <Loader/>
        <p className="text-2xl text-gray-400">Loading...</p>
      </div>
    )
  }
  return (
    <div className="p-5">
      <div className="flex flex-row m-auto items-center justify-between text-2xl font-bold mb-[5%]">
        <div>{blog?.title}</div>
        <div className="text-sm">By:{blog?.username}</div>
      </div>
      <div>{blog?.content}</div>
    </div>
  );
}

export default Blog;
