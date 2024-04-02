import { memo } from "react";
import { Video } from "./videos";
import VideoItem from "./VideoItem";


const VideoList = memo(function VideoList({ videos }: { videos: Video[] }) {
  return videos.map(video =>
    <VideoItem key={video.id} id={video.id} image={video.image}></VideoItem>
  )
});

export default VideoList