"use client";

import { ACCESS_TOKEN_KEY } from "constants/common";
import { useSetAtom } from "jotai";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { accessTokenAtom } from "../../../atoms/credentials";

export default function LoginCallbackPage() {
  const setAccessToken = useSetAtom(accessTokenAtom);
  const router = useRouter();

  useEffect(() => {
    const url = new URL(window.location.href);
    const parsedHash = new URLSearchParams(url.hash.substring(1));
    const accessToken = parsedHash.get(ACCESS_TOKEN_KEY);
    if (accessToken) {
      setAccessToken(accessToken);
      router.replace("/playlists");
    }
  }, [router, setAccessToken]);

  return null;
}
