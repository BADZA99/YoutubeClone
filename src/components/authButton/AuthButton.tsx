import { StyledAuthButton } from './AuthButton.styled'
import { FaRegUserCircle } from 'react-icons/fa';
import { Text } from '../../utils/text.styled';
import { useAppContext } from '../../context/App.context';

const AuthButton = () => {
 const { text } = useAppContext();

  return (
    <StyledAuthButton>
      <FaRegUserCircle size={22} />
      <Text className="auth"> {text.signIn}</Text>
    </StyledAuthButton>
  );
}

export default AuthButton
