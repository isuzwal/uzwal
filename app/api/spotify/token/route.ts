import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const refreshToken = process.env.REFRESH_TOKEN!;
  const client_id = process.env.SPOTIFY_ID!;
  const client_secret = process.env.SPOTIFY_SECRET!;

  const basicAuth = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

  const params = new URLSearchParams();
  params.append('grant_type', 'refresh_token');
  params.append('refresh_token', refreshToken);

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
