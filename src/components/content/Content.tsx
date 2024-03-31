
import { LoadingBackDrop, StyledContent } from './Content.styled'
import Categories from '../Categories/Categories'
import { useAppContext } from '../../context/App.context';

export default function Content() {
  const { isFetchingVideos } = useAppContext();
  return (
    <StyledContent>
      <Categories />
      {isFetchingVideos && <LoadingBackDrop />}
    </StyledContent>
  );
}
