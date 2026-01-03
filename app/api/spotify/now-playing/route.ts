import { NextResponse } from 'next/server';

const API = process.env.SPOTIFY_API!;
export async function GET() {
  const tokenRes = await fetch(`${API}`);
  const { access_token } = await tokenRes.json();

  const res = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  if (res.status === 204) {
    return NextResponse.json({ playing: false });
  }

  const data = await res.json();
  const item = data.item;
  const simplified = {
    isPlaying: data.is_playing,
    songName: item?.name,
    artists: item?.artists?.map((artist: { name: string }) => artist.name).join(', '),
    albumImage: item?.album?.images?.[0]?.url,
    songUrl: item?.external_urls?.spotify,
    actions: {
      canPlay: !data?.actions?.disallows?.resuming,
      canShuffle: !data?.actions?.disallows?.toggling_shuffle,
      canRepeatContext: !data?.actions?.disallows?.toggling_repeat_context,
      canRepeatTrack: !data?.actions?.disallows?.toggling_repeat_track,
    },
  };
  return NextResponse.json(simplified);
}
