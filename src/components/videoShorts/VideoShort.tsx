import { Video } from "pexels";
import {
  MoreLessButton,
  MoreLessContainer,
  StyledVideoShortContainer,
  VideoShortHeading
} from "./VideoShort.styled";
import { SiYoutubeshorts } from "react-icons/si";
import { Text } from "../../utils/text.styled";
import { useAppContext } from "../../context/App.context";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface IVideoShortsProps{
    videos:Video[];
}

const VideoShort = ({videos}: IVideoShortsProps)=> {
  const {text}=useAppContext();
  const [showLess,setShowLess]=useState(true)
  return (
    <StyledVideoShortContainer>
      <VideoShortHeading>
        <SiYoutubeshorts size={25} color="red" />
        <Text>{text.shorts}</Text>
      </VideoShortHeading>
      <MoreLessContainer>
        <MoreLessButton
        onClick={()=>setShowLess(!showLess)}
        >
          <Text>
            {
              showLess?text.showLess:text.showMore
            }
          </Text>
          <Text>
           
            {
              showLess? <IoIosArrowDown className="icon" size={20}/>:<IoIosArrowUp className="icon" size={20}/>
            }
          </Text>
        </MoreLessButton>
       </MoreLessContainer> 

    </StyledVideoShortContainer>
  );
}

export default VideoShort;
