"use client";

import { accessTokenAtom } from "atoms/credentials";
import { useAtomValue } from "jotai";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const accessToken = useAtomValue(accessTokenAtom);

  useEffect(() => {
    router.push(accessToken ? "/playlists" : "/login");
  }, [router, accessToken]);

  return null;
}
