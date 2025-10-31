"use client"
import React from "react"
import Image from "next/image";
import { redirect, RedirectType } from 'next/navigation'
import { CreateTape } from "./cassette/action";

const TapeImage: React.FC = () => {
  const onClickHandler = async () => {
    const cassette = await CreateTape();
    if (cassette) {
      redirect('/cassette/'+cassette.id, RedirectType.replace)
    } 
  }

  return (
    <div >
      <main>
        <div className="parent">
          <img onClick={onClickHandler} className="cassetteTape" src="/cassette-tape.png"/>
          <h4>Click on the image to start creating your mixtape</h4>
        </div>

      </main>
    </div>
  );
}

export default TapeImage;