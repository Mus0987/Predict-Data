"use client"
import { useState,FormEvent } from "react";
import { useRouter } from "next/navigation";
export default function Home() {

  const [inputVal,setInputVal] = useState("")
const {push} = useRouter()

  const handleSubmit=(event:FormEvent)=>{
event.preventDefault();
push(`/prediction/${inputVal}`)
  }
  return (
    <div className="flex bg-gray-300 min-h-screen items-center justify-center">
      <div className="bg-white shadow-md rounded-md p-5">
        <h1 className="text-2xl font-semibold text-black">Enter Your Name</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Type your name" onChange={(e)=> setInputVal(e.target.value)} className="text-black w-full p-4 mt-3 rounded border-gray-200"/>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 w-full py-2 px-3 mt-3 rounded shadow-sm focus:ring-opacity-75">Predict Data</button>
      </form>
      </div>
    </div>
  );
}
