"use client"
import React from "react";
import { useState } from "react";

const page = () => {
  const [username, setusername] = useState("")
  return (
    <div>
      <>
        <form>
          <h1 className="mb-5 text-2xl">Enter Your Name:</h1>
          <input
            type="text"
            className="border-2 border-zinc-800 px-4 py-2 text-xl"
            value={username}
            onChange={(e)=>{
              setusername(e.target.value) 
              console.log(username)
            }}
          />
        </form>
      </>
    </div>
  );
};

export default page;
