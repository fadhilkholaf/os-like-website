"use server";

import { getNowPlaying } from "@/lib/spotify";

interface SpotifyArtist {
  name: string;
}

interface SpotifyAlbum {
  name: string;
  artists: SpotifyArtist[];
  images: { url: string }[];
}

interface SpotifyItem {
  name: string;
  album: SpotifyAlbum;
  external_urls: { spotify: string };
}

interface SpotifyResponse {
  is_playing: boolean;
  item: SpotifyItem;
}

export interface NowPlayingData {
  isPlaying: boolean;
  title?: string;
  album?: string;
  artist?: string;
  albumImageUrl?: string;
  songUrl?: string;
}

export async function GET(): Promise<Response> {
  const response = await getNowPlaying();

  if (response.status === 204 || response.status > 400) {
    return new Response(JSON.stringify({ isPlaying: false }), { status: 200 });
  }

  const data: SpotifyResponse = await response.json();

  const nowPlayingData: NowPlayingData = {
    isPlaying: data.is_playing,
    title: data.item.name,
    album: data.item.album.name,
    artist: data.item.album.artists.map((artist) => artist.name).join(", "),
    albumImageUrl: data.item.album.images[0].url,
    songUrl: data.item.external_urls.spotify,
  };

  return new Response(JSON.stringify(nowPlayingData), { status: 200 });
}
