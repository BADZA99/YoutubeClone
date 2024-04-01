import React, { useState } from 'react'
import { useAppContext } from '../../context/App.context';
import ReactPlayer from 'react-player';
import { StyledshortVideoItem, StyledshortVideoThumbnail } from './ShortVideoItem.styles';
import { Video } from 'pexels';
import { Text } from '../../utils/text.styled';
import { getTitle } from '../../utils/videos';

interface IShortVideoItemProps {
  video: Video;
}
const ShortVideoItem = ({ video }: IShortVideoItemProps) => {
  const [playTrailer, setPlayTrailer] = useState(false);
  const { isMenuSmall } = useAppContext();
  const TITLE_LENGTH = 50;
  return (
    <StyledshortVideoItem
      onMouseOver={() => setPlayTrailer(true)}
      onMouseOut={() => setPlayTrailer(false)}
    >
      <StyledshortVideoThumbnail $isMenuSmall={isMenuSmall}>
        {playTrailer ? (
          <ReactPlayer
            width="100%"
            height="100%"
            controls={false}
            value={1}
            muted={false}
            style={{
              height: "100%",
              width: "100%",
            }}
            playing={playTrailer}
            url={video.video_files[0].link}
          />
        ) : (
          <img src={video.image} alt="thumnail" />
        )}
      </StyledshortVideoThumbnail>
      <Text className="videoItemTitle">
        {getTitle(video.url).slice(0, TITLE_LENGTH)}
        {getTitle(video.url).length > TITLE_LENGTH && "..."}
      </Text>
      <Text className="details">
        {video.duration}M views
      </Text>
    </StyledshortVideoItem>
  );
};

export default ShortVideoItem;
