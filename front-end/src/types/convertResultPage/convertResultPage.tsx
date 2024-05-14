export interface ConvertResultProps {
  resultData: {
    scripts: { scriptId: number; script: string; timeline: string }[];
    video: { videoId: number; url: string };
    subtitles: { subtitleId: number; subtitle: string; timeline: string }[];
  };
}
