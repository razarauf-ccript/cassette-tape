"use server"

import { createClient } from '@/utils/supabase/server';

export const CreateTape = async (title:String, backgroundColor:String) => {
    const supabaseClient = await createClient();
    const { data: Cassete, error } = await supabaseClient.from("cassette").insert({cassette_name: title, background_color: backgroundColor}).select().single();
    return Cassete; 
}

export const UpdateTape = async (id:number, title:String, backgroundColor:String, note:String, spotifyLink:String, fontColor:string) => {
    const supabaseClient = await createClient();
    // console.log("id = " + id     )
    const { error } = await supabaseClient.from("cassette").update({cassette_name: title, background_color: backgroundColor, note: note, spotify_link: spotifyLink, font_color: fontColor}).eq('id', id);
    // console.log(error); 
    return 1; 
}

export const GetTape = async (id:number) => {
    // console.log("gettape 1 called");
    const supabaseClient = await createClient();
    const { data: Cassete, error } = await supabaseClient.from("cassette").select().eq('id', id).single();
    // console.log(Cassete)
    return Cassete; 
}

