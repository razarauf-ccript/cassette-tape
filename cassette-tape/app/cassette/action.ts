"use server"

import { createClient } from '@/utils/supabase/server';

export const CreateTape = async () => {

    const supabaseClient = await createClient();
    const { data: Cassete, error } = await supabaseClient.from("cassette").insert({cassette_name: "My Mixtape"}).select().single();
    return Cassete; 

}
