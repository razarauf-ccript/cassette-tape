import { NextRequest, NextResponse } from "next/server";

export async function GET(req : NextRequest) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");

  if (!code) {
    return NextResponse.json({ error: "Missing code parameter" }, { status: 400 });
  }

  const spotify_client_id = process.env.SPOTIFY_CLIENT_ID;
  const spotify_client_secret = process.env.SPOTIFY_CLIENT_SECRET;
  const redirect_uri = "http://127.0.0.1:3000/auth/callback";

  const authHeader =
    "Basic " + Buffer.from(`${spotify_client_id}:${spotify_client_secret}`).toString("base64");

  try {
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        Authorization: authHeader,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        code,
        redirect_uri,
        grant_type: "authorization_code",
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      return NextResponse.json({ error: `Spotify API error: ${error}` }, { status: 500 });
    }

    const data = await response.json();
    const { access_token } = data;

    console.log(data)
    console.log(access_token);

    // Redirect to homepage (or wherever you want)
    return NextResponse.redirect(new URL("/", req.url));

  } catch (error) {
    console.error("Spotify token exchange error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
