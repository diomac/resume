import {StyledContainer} from '~/Container/styles';
import {ContainerProps} from '~/Container/types';

const Container = (props: ContainerProps) => {
  const {children} = props;
  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  );
};
export default Container;
