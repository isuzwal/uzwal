// app/api/spotify/callback/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get('code');
  if (!code) return NextResponse.json({ error: 'No code provided' }, { status: 400 });

  const client_id = process.env.SPOTIFY_ID!;
  const client_secret = process.env.SPOTIFY_SECRET!;
  const redirect_uri = 'http://127.0.0.1:3000/api/spotify/callback';

  const basicAuth = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

  const params = new URLSearchParams();
  params.append('grant_type', 'authorization_code');
  params.append('code', code);
  params.append('redirect_uri', redirect_uri);

  const tokenRes = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basicAuth}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: params.toString(),
  });

  const data = await tokenRes.json();

  return NextResponse.json(data);
}
