// Reference:
// https://developers.google.com/youtube/v3/docs/playlists/list

type PlaylistsPart =
  | "contentDetails"
  | "id"
  | "localizations"
  | "player"
  | "snippet"
  | "status";

type PlaylistsMaxResults =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25
  | 26
  | 27
  | 28
  | 29
  | 30
  | 31
  | 32
  | 33
  | 34
  | 35
  | 36
  | 37
  | 38
  | 39
  | 40
  | 41
  | 42
  | 43
  | 44
  | 45
  | 46
  | 47
  | 48
  | 49
  | 50;

export interface PlaylistsParams {
  part: PlaylistsPart[];
  mine: true;
  maxResults?: PlaylistsMaxResults;
  onBehalfOfContentOwner?: string;
  pageToken?: string;
}

type ThumbnailsType = "default" | "medium" | "high" | "standard";

type PlaylistResource = Readonly<{
  kind: "youtube#playlist";
  etag: string;
  id: string;
  snippet: {
    publishedAt: Date;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      [key in ThumbnailsType]: {
        url: string;
        width: number;
        height: number;
      };
    };
  };
  channelTitle: string;
  localized: {
    title: string;
    description: string;
  };
  status: {
    privacyStatus: "private";
  };
  contentDetails: {
    itemCount: 6;
  };
  player: {
    embedHtml: string;
  };
}>;

export interface PlaylistsResponse {
  kind: "youtube#playlistListResponse";
  etag: string;
  nextPageToken: string;
  prevPageToken: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: PlaylistResource[];
}
