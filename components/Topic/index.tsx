import {Descrtiption, TopicCaption, TopicHeader, TopicTitle} from '~/Topic/styles';
import {TopicProps} from '~/Topic/types';

const Topic = (props: TopicProps) => {
  const {title, caption1, caption2, description} = props;
  return (
    <>
      <TopicHeader>
        <TopicTitle>{title.toUpperCase()}</TopicTitle>
        <TopicCaption>
          <span>{caption1.toUpperCase()}</span>
          <span>{caption2.toUpperCase()}</span>
        </TopicCaption>
      </TopicHeader>
      <Descrtiption>
        {description}
      </Descrtiption>
    </>
  );
};
export default Topic;
