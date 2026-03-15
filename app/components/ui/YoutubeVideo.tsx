import React from "react";

type YoutubeVideoProps = {
  videoId: string;
};

export default function YoutubeVideo({ videoId }: YoutubeVideoProps) {
  return (
    <div className="w-full aspect-video">
      <iframe
        className="w-full h-full rounded-xl"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video"
        allowFullScreen
      ></iframe>
    </div>
  );
}
