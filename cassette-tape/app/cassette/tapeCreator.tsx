"use client"
import React from "react"
import Image from "next/image";
import { redirect, RedirectType } from 'next/navigation'
import { CreateTape } from "./action";

export default function TapeCreator({ id }: { id: string }) {

  React.useEffect(() => {
    setTranslate(true);
  }, []);

  let [translate, setTranslate] = React.useState(false);

  return (
    <div >
      <main>
        <div className="bodyParent">
          <img className={`cassetteTape ${translate ? "translateImg" : ""}`} src="/cassette-tape.png" />
          <h4>Click on the image to start creating your mixtape</h4>
        </div>
      </main>
    </div>
  );
}
