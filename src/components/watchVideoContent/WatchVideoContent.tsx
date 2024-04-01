import React, { useEffect } from "react";
import {
  MoreVideoContainer,
  StyledWatchVideoContainer,
  StyledWatchVideoContent,
  VideoDescription,
  VideoDetails,
  VideoScreen,
} from "./watchVideoContent.styled";
import Categories from "../Categories/Categories";
import { useAppContext } from "../../context/App.context";
import RegularVideoItem from "../RegularVideoItem/RegularVideoItem";
import { useParams } from "react-router-dom";
import { getTitle } from "../../utils/videos";
import { LoadingBackDrop } from "../content/Content.styled";
import ReactPlayer from "react-player";
import { Text } from "../../utils/text.styled";
// mport faker
import { faker } from "@faker-js/faker";


export default function WatchVideoContent() {
  const { videos, fetchVideo, videoToWatchData, isFetchingVideos } =
    useAppContext();
  const { id } = useParams();
  document.title = getTitle(videoToWatchData?.url!);

  useEffect(() => {
    if (id) {
      fetchVideo(id);
    }
  }, [id]);

  if (isFetchingVideos) {
    return <LoadingBackDrop />;
  }
  return (
    <StyledWatchVideoContent>
      <StyledWatchVideoContainer>
        <VideoScreen>
          <ReactPlayer
            width="100%"
            height="100%"
            controls={true}
            value={1}
            muted={false}
            style={{
              height: "100%",
              width: "100%",
            }}
            playing={true}
            url={videoToWatchData?.video_files[0].link}
          />
        </VideoScreen>
        <VideoDetails>
          <Text className="videoScrreenTitle">
            {getTitle(videoToWatchData?.url + "")}
          </Text>
          <VideoDescription><Text>{faker.lorem.paragraphs(5)}</Text></VideoDescription>
        </VideoDetails>
      </StyledWatchVideoContainer>
      <MoreVideoContainer>
        <Categories />
        {videos.map((video, index) => (
          <RegularVideoItem smallView video={video} key={index} />
        ))}
      </MoreVideoContainer>
    </StyledWatchVideoContent>
  );
}
