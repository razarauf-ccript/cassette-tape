// app/login/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { generateRandomString } from '../action';
import { redirect } from 'next/navigation';

var spotify_redirect_uri = 'http://127.0.0.1:3000/auth/callback'

export async function GET() {
    var scope = "streaming user-read-email user-read-private"
    var state = generateRandomString(16);

    var auth_query_parameters = new URLSearchParams({
        response_type: "code",
        client_id: process.env.SPOTIFY_CLIENT_ID!,
        scope: scope,
        redirect_uri: spotify_redirect_uri,
        state: state
    })

    return NextResponse.redirect('https://accounts.spotify.com/authorize/?' + auth_query_parameters.toString());
}