import Image from "next/image";

import { createClient } from '@/utils/supabase/server';

import TapeImage from "./tapeImage";

export default async function Home() {
  const supabaseClient = await createClient();
  // const { data: cassette } = await supabaseClient.from("cassette").select();
  // const { data: cassette, error } = await supabaseClient.from("cassette").insert({cassette_name: "My Mixtape"}).select();
  // if (error) {
  //   console.log(error)
  // }

  // console.log(cassette);

  // if this page is visited
  // create a new cassette with a default name "My Mixtape"
  // Get the ID
  // redirect to mixtape edit page with the ID



  return (
    <div >
      <main >
        <div className="bodyParent">
          <TapeImage />
          {/* <h1>{JSON.stringify(cassette, null, 2)}</h1> */}
          <h3>Click on the image to start creating your mixtape</h3>

        </div>

      </main>
    </div>
  );
}
