interface Subtitles {
  subtitleId: number;
  subtitle: string;
  timeline: string;
}

interface Video {
  videoId: number;
  url: string;
}

interface Scripts {
  scriptId: number;
  script: string;
  timeline: string;
}

interface ResultData {
  scripts: Scripts[];
  video: Video;
  subtitles: Subtitles[];
}

export interface ResultDataProps {
  resultData: ResultData;
}
