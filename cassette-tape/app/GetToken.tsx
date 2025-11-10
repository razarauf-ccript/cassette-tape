"use client"
import Image from "next/image";
import { createClient } from '@/utils/supabase/server';
import TapeImage from "./tapeRedirector"
import React from "react";
import Login from "./login";
import WebPlayback from "./WebPlayback";

// const supabaseClient = await createClient();

const GetToken = async () => {

  // const { data } = await supabaseClient.from("cassette").select();
  // const cassette : Cassete[] = data || [];
  // console.log(cassette)

  // const { data: cassette, error } = await supabaseClient.from("cassette").insert({cassette_name: "My Mixtape"}).select();
  // if (error) {
  //   console.log(error)
  // }

  const [token, setToken] = React.useState('');

  React.useEffect(() => {

    async function getToken() {
      const response = await fetch('/auth/token');
      const json = await response.json();
      setToken(json.access_token);
    }

    getToken();

  }, []);

  return (
    <div >
      <main>
          { (token === '') ? <Login/> : <WebPlayback token={token} /> }
      </main>
    </div>
  );
}

export default GetToken;