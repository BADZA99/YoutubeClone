import React, { useEffect } from "react";
import {
  DetailsActions,
  DetailsActionsButton,
  MoreVideoContainer,
  StyledWatchVideoContainer,
  StyledWatchVideoContent,
  SubscribeButton,
  UserAccount,
  VideoDescription,
  VideoDetails,
  VideoDetailsAction,
  VideoDetailsInfos,
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
import { RegularVideoPic } from "../RegularVideoItem/RegularVideoItem.styled";
import { HiDotsHorizontal } from "react-icons/hi";
import { PiListPlusFill } from "react-icons/pi";
import { IoArrowRedoOutline } from "react-icons/io5";
import { TiThumbsDown, TiThumbsUp } from "react-icons/ti";

export default function WatchVideoContent() {
  const { videos, fetchVideo, videoToWatchData, isFetchingVideos, text } =
    useAppContext();
  const { id } = useParams();
  document.title = getTitle(videoToWatchData?.url!);

  useEffect(() => {
    if (id) {
      fetchVideo(id);
    }
  }, [id, fetchVideo]);

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
          <VideoDetailsAction>
            <VideoDetailsInfos>
              <RegularVideoPic>
                <img src={videoToWatchData?.image} alt="profil channel pic" />
              </RegularVideoPic>
              <UserAccount>
                <Text className="name">{videoToWatchData?.user.name}</Text>
                <Text className="subscribers">
                  {videoToWatchData?.duration}k {text.subscribers}
                </Text>
              </UserAccount>
              <SubscribeButton>{text.Subscribe}</SubscribeButton>
            </VideoDetailsInfos>
            <DetailsActions>
              <DetailsActionsButton>
                <>
                  <TiThumbsUp size={21} />
                  <Text>{videoToWatchData?.duration}</Text>
                </>
                <span className="divider">&nbsp;</span>
                <TiThumbsDown size={21} />
              </DetailsActionsButton>
              <DetailsActionsButton>
                <IoArrowRedoOutline size={21} />
                {text.share}
              </DetailsActionsButton>
              <DetailsActionsButton>
                <PiListPlusFill size={21} />
                {text.save}
              </DetailsActionsButton>
              <DetailsActionsButton>
                <HiDotsHorizontal size={23} />
              </DetailsActionsButton>
            </DetailsActions>
          </VideoDetailsAction>
          <VideoDescription>
            <Text>{faker.lorem.paragraphs(5)}</Text>
          </VideoDescription>
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
