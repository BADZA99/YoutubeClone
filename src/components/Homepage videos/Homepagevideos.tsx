import React from 'react'
import { StyledHomepagevideos } from './Homepagevideos.styled'
import { useAppContext } from '../../context/App.context'
import { RegularVidThumnailContainer } from './Homepagevideos.styled'
import RegularVideoItem from '../RegularVideoItem/RegularVideoItem';
import VideoShort from '../videoShorts/VideoShort';


export default function Homepagevideos() {
        const {videos}=useAppContext();
        const FIRST_VIDEO_SECTION=videos.slice(0,8);
        const SECOND_VIDEO_SECTION=videos.slice(8,20);
        const THIRD_VIDEO_SECTION=videos.slice(20,28);
    return (
      <StyledHomepagevideos>
        <RegularVidThumnailContainer>
          {FIRST_VIDEO_SECTION.map((video, index) => (
            <RegularVideoItem video={video}  key={index} />
          ))}
        </RegularVidThumnailContainer>
        <VideoShort videos={SECOND_VIDEO_SECTION} />
        <RegularVidThumnailContainer>
          {THIRD_VIDEO_SECTION.map((video, index) => (
            <RegularVideoItem video={video} key={index} />
          ))}
        </RegularVidThumnailContainer>
      </StyledHomepagevideos>
    );
}
