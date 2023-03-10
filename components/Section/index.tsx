import {SectionProps} from '~/Section/types';
import {StyledSection} from '~/Section/styles';

const Section = (props: SectionProps) => {
  const {children} = props;
  return (
    <StyledSection>
      {children}
    </StyledSection>
  );
};
export default Section;
