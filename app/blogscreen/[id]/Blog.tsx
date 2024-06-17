"use client";
import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase";

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
      setBlog(await fetchblog(params.id));
    }
    loadblog();
  }, [params.id]);
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
