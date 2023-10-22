"use client";

import { PlaylistsParams } from "@/types/api/playlists";
import { getMyPlaylists } from "@/utils/api";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    const args: PlaylistsParams = {
      part: [
        "contentDetails",
        "id",
        "localizations",
        "player",
        "snippet",
        "status",
      ],
      mine: true,
    };
    getMyPlaylists(args);
  });

  return <h1>Home</h1>;
}
