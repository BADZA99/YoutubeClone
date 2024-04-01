import { Video } from "pexels";
import {
  MoreLessButton,
  MoreLessContainer,
  ShortsVideosContainer,
  StyledVideoShortContainer,
  VideoShortHeading
} from "./VideoShort.styled";
import { SiYoutubeshorts } from "react-icons/si";
import { Text } from "../../utils/text.styled";
import { useAppContext } from "../../context/App.context";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
// import { StyledshortVideoItem } from "../Short video item/ShortVideoItem.styles";
import ShortVideoItem from "../Short video item/ShortVideoItem";


interface IVideoShortsProps{
    videos:Video[];
}

const VideoShort = ({videos}: IVideoShortsProps)=> {
  const {text}=useAppContext();
  const [showLess,setShowLess]=useState(true);
  // const [videoList,setvideoList]=useState(true);
  const videoList = showLess
    ? videos.slice(0, videos.length / 2)
    : videos.slice(0, videos.length);
  return (
    <StyledVideoShortContainer>
      <VideoShortHeading>
        <SiYoutubeshorts size={25} color="red" />
        <Text>{text.shorts}</Text>
      </VideoShortHeading>
      <ShortsVideosContainer>
        {videoList.map((video, index) => (
          <ShortVideoItem video={video} key={index} />
        ))}
      </ShortsVideosContainer>
      <MoreLessContainer>
        <MoreLessButton onClick={() => setShowLess(!showLess)}>
          <Text>{showLess ? text.showMore : text.showLess}</Text>
          <Text>
            {showLess ? (
              <IoIosArrowDown className="icon" size={20} />
            ) : (
              <IoIosArrowUp className="icon" size={20} />
            )}
          </Text>
        </MoreLessButton>
      </MoreLessContainer>
    </StyledVideoShortContainer>
  );
}

export default VideoShort;
