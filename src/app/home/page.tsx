"use client";

import { PlaylistResource, PlaylistsParams } from "@/types/api/playlists";
import { getMyPlaylists } from "@/utils/api";
import { Card, CardFooter, Image } from "@nextui-org/react";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [items, setItems] = useState<PlaylistResource[]>([]);

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
      maxResults: 50,
    };
    getMyPlaylists(args).then((response) => {
      setItems(response.items);
    });
  }, []);

  return (
    <div className="w-full min-h-full flex flex-col gap-12">
      <div className="w-full grid gap-8 p-24 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {items.map((item) => (
          <Card isPressable isFooterBlurred key={item.id}>
            <Image
              removeWrapper
              className="z-0 w-full h-full object-cover"
              alt={item.snippet.title}
              src={item.snippet.thumbnails.medium.url}
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10">
              <div className="flex flex-col">
                <p className="w-full text-tiny text-white/90 text-left text-ellipsis whitespace-nowrap over">
                  {item.snippet.title}
                </p>
                <p className="text-tiny text-white/70 text-left">
                  {item.contentDetails.itemCount} videos
                </p>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
