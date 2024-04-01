import Slider from "react-slick";
import VideoItem from "./VideoItem";
import { Video } from "./videos";


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const VideoCarousel = ({ videos }: { videos: Video[] }) => {
  return (
    <Slider {...settings}>
      {videos.map((video) => {
        return <VideoItem id={video.id} image={video.image} key={video.id}></VideoItem>
      })}
    </Slider>
  )
}

export default VideoCarousel