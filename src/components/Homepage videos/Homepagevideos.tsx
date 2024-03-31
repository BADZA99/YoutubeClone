import React from 'react'
import { StyledHomepagevideos } from './Homepagevideos.styled'
import { useAppContext } from '../../context/App.context'
import { RegularVidThumnailContainer } from './Homepagevideos.styled'
import RegularVideoItem from '../RegularVideoItem/RegularVideoItem';

export default function Homepagevideos() {
        const {videos}=useAppContext();
        const FIRST_VIDEO_SECTION=videos.splice(0,8);
        const SECOND_VIDEO_SECTION=videos.splice(8,20);
        const THIRD_VIDEO_SECTION=videos.splice(20,20);
    return (
        <StyledHomepagevideos>
            <RegularVidThumnailContainer>
                {
                    FIRST_VIDEO_SECTION.map((video,index)=>
                    <RegularVideoItem video={video}/>
                    )
                }
            </RegularVidThumnailContainer>

            
        </StyledHomepagevideos>
    )
}
