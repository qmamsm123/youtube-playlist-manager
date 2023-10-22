import { PlaylistsParams, PlaylistsResponse } from "@/types/api/playlists";
import { ACCESS_TOKEN_KEY } from "constants/common";
import { PLAYLISTS } from "constants/endpoints";

const withParams = (url: string, args: object) => {
  const urlObject = new URL(url);
  Object.entries(args).forEach(([key, value]) => {
    if (typeof value === "object" && value.join) {
      (value as any[]).forEach((item) =>
        urlObject.searchParams.append(key, item),
      );
    } else {
      urlObject.searchParams.append(key, `${value}`);
    }
  });
  return urlObject.toString();
};

const withAPIKey = (url: string) => {
  const urlObject = new URL(url);
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_CLIENT_ID;
  if (apiKey) {
    urlObject.searchParams.append("key", apiKey);
    return urlObject.toString();
  } else {
    throw new Error("환경변수에서 API KEY를 가져오지 못 했습니다.");
  }
};

export const getMyPlaylists = async (args: PlaylistsParams) => {
  const accessToken = sessionStorage.getItem(ACCESS_TOKEN_KEY);
  if (accessToken) {
    const response = await fetch(withAPIKey(withParams(PLAYLISTS, args)), {
      method: "get",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: "application/json",
      },
    });
    if (response.ok) {
      const data = (await response.json()) as PlaylistsResponse;
      return data;
    } else {
      throw new Error("API 응답이 올바르지 않습니다.");
    }
  } else {
    throw new Error("세션 스토리지에서 엑세스 토큰을 가져오지 못 했습니다.");
  }
};
