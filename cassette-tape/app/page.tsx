import Image from "next/image";

import { createClient } from '@/utils/supabase/server';

export default async function Home() {
  const supabaseClient = await createClient();
  const { data: cassette } = await supabaseClient.from("cassette").select();

  console.log(cassette)

  return (
    <div >
      <main>

        <h1>{JSON.stringify(cassette, null, 2)}</h1>
      </main>
    </div>
  );
}
