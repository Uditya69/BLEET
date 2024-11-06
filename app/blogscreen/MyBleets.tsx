"use client";
import { db } from "@/firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Loader from "../components/shared/loader";
import { useUser } from "@clerk/nextjs";
import { toast } from "react-toastify";

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

interface BleetsProps {
  searchTerm?: string;
}

function MyBleets({ searchTerm = "" }: BleetsProps) {
  const [bleets, setBleets] = useState<bleet[]>([]);
  const [loading, setLoading] = useState(true);
  const [showDeleteDialog, setShowDeleteDialog] = useState<bleet | null>(null);
  const { user } = useUser();
  const currentUsername = user ? user.username : "";

  useEffect(() => {
    async function fetchdata() {
      const data = await fetchbleet();
      if (data) {
        const userBleets = data.filter((bleet) => bleet.username === currentUsername);
        setBleets(userBleets);
        setLoading(false);
      }
    }
    if (currentUsername) {
      fetchdata();
    }
  }, [currentUsername]);

  const handleRightClick = (e: React.MouseEvent, bleet: bleet) => {
    e.preventDefault();
    setShowDeleteDialog(bleet);
  };

  const handleDelete = async () => {
    if (showDeleteDialog) {
      await deleteDoc(doc(db, "bleet", showDeleteDialog.id));
      setBleets((prevBleets) => prevBleets.filter((b) => b.id !== showDeleteDialog.id));
      toast.success("Bleet deleted successfully!");
      setShowDeleteDialog(null);
      
    }
  };

  const filteredBleets = searchTerm
    ? bleets.filter((bleet) =>
        [bleet.content, bleet.title, bleet.username]
          .some((field) => field.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    : bleets;

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center">
        <Loader />
        <p className="text-2xl text-gray-400">Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center w-[80vw] m-auto self-center">
      <div className="grid grid-cols-1 items-center">
        {filteredBleets.map((bleet) => (
          <Link
            href={`/blogscreen/${bleet.id}`}
            target="_blank"
            className="backdrop-blur-sm w-[80vw] transition duration-700 ease-in-out text-gray-400 border-[1px] p-2 px-4 border-gray-600 rounded-lg my-3 bg-black bg-opacity-20 border-opacity-50 hover:text-gray-300 hover:border-gray-500"
            key={bleet.id}
            onContextMenu={(e) => handleRightClick(e, bleet)}
          >
            <h2 className="text-lg font-bold self-center px-4 p-1 pb-2 border-b-[1px] text-orange-300 border-gray-700">
              • {bleet.username}: {bleet.title}
            </h2>
            <p className="text-md mt-1 p-3 max-h-[40vh] overflow-y-auto">
              {bleet.content}
            </p>
          </Link>
        ))}
      </div>

      {showDeleteDialog && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className=" bg-black p-4 rounded-lg shadow-lg">
            <p className="text-lg mb-4">Are you sure you want to delete this bleet?</p>
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white px-4 py-2 rounded mr-2"
            >
              Delete
            </button>
            <button
              onClick={() => setShowDeleteDialog(null)}
              className="bg-gray-600 px-4 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyBleets;
