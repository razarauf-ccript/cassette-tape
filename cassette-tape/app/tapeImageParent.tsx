"use client"

import Image from "next/image";
import { createClient } from '@/utils/supabase/server';

import TapeImage from "./tapeImage";

const TapeImageParent: React.FC = () => {
  const handleChildButtonClick = (message: string) => {
    console.log(message); // Logs "Hello from Child!"
  }

  return (
    <div >
      <main>
        <div className="bodyParent">
          <TapeImage onButtonClick={handleChildButtonClick} />
          <h4>Click on the image to start creating your mixtape</h4>
        </div>

      </main>
    </div>
  );
}

export default TapeImageParent;