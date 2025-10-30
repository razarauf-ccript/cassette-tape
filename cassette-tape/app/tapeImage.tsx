"use client"
import React from "react"
import Image from "next/image";
import { createClient } from '@/utils/supabase/server';

const TapeImage: React.FC = () => {

  let [translate, setTranslate] = React.useState(false);

  return (
    <div >
      <main>
        <div className="bodyParent">
          <img onClick={() => {setTranslate(true)}} className={`cassetteTape ${translate ? "translateImg" : ""}`} src="/cassette-tape.png"/>
          <h4>Click on the image to start creating your mixtape</h4>
        </div>

      </main>
    </div>
  );
}

export default TapeImage;