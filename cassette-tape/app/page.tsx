"use client"
import TapeImage from "./tapeRedirector"
import React from "react";
import { useSearchParams } from "next/navigation";

const Home = () => {

  return (
    <div >
      <main>
          <TapeImage />
      </main>
    </div>
  );
}

export default Home;