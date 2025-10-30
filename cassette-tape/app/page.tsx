import Image from "next/image";

import { createClient } from '@/utils/supabase/server';

import TapeImage from "./tapeImage"

const supabaseClient = await createClient();


const Home: React.FC = () => {

  // const { data: cassette } = await supabaseClient.from("cassette").select();
  // const { data: cassette, error } = await supabaseClient.from("cassette").insert({cassette_name: "My Mixtape"}).select();
  // if (error) {
  //   console.log(error)
  // }

  return (
    <div >
      <main >
        <div className="bodyParent">
          <TapeImage/>
          {/* <h1>{JSON.stringify(cassette, null, 2)}</h1> */}
        </div>

      </main>
    </div>
  );
}

export default Home;