import React from 'react'
import { MoreVideoContainer, StyledWatchVideoContent } from './watchVideoContent.styled'
import Categories from '../Categories/Categories'
import { useAppContext } from '../../context/App.context'
import RegularVideoItem from '../RegularVideoItem/RegularVideoItem';

export default function WatchVideoContent() {
    const {videos}=useAppContext();
  return (
    <StyledWatchVideoContent>
        <h1>left side</h1>
        <MoreVideoContainer>
            <Categories/>
            {videos.map((video,index)=><RegularVideoItem smallView video={video} key={index}/>) }
        </MoreVideoContainer>
      
    </StyledWatchVideoContent>
  )
}
