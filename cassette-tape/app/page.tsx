"use client"
import Image from "next/image";
import { createClient } from '@/utils/supabase/server';
import TapeImage from "./tapeRedirector"
import React from "react";
import Login from "./login";
// import WebPlayback from "./WebPlayback";
import { useSearchParams } from "next/navigation";

// const supabaseClient = await createClient();

const Home = () => {

  // const { data } = await supabaseClient.from("cassette").select();
  // const cassette : Cassete[] = data || [];
  // console.log(cassette)

  // const { data: cassette, error } = await supabaseClient.from("cassette").insert({cassette_name: "My Mixtape"}).select();
  // if (error) {
  //   console.log(error)
  // }

  // const searchParams = useSearchParams();
  
  // 3. Client reads the data from the URL
  // const tmptoken = searchParams.get('token');

  // console.log(searchParams);

  // const [token, setToken] = React.useState(tmptoken);

  React.useEffect(() => {

    // async function getToken() {
    //   const response = await fetch('/auth/token');
    //   const json = await response.json();
    //   setToken(json.access_token);
    // }

    // getToken();

  }, []);

  return (
    <div >
      <main>
          <TapeImage />
          {/* { (token === '' || token === null) ? <Login/> : <WebPlayback token={token} /> } */}
      </main>
    </div>
  );
}

export default Home;