
import { LoadingBackDrop, StyledContent } from './Content.styled'
import Categories from '../Categories/Categories'
import { useAppContext } from '../../context/App.context';
import Homepagevideos from '../Homepage videos/Homepagevideos';

export default function Content() {
  const { isFetchingVideos } = useAppContext();
  return (
    <StyledContent>
      <Categories />
      <Homepagevideos/>
      {isFetchingVideos && <LoadingBackDrop />}
    </StyledContent>
  );
}
