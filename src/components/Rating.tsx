import styled from "styled-components";

interface Props {
  rating: number;
  votes: number;
}

const Container = styled.div`
  display: grid;
  grid-gap: 12px;
  grid-template-columns: 160px 1fr;
  align-items: center;
  margin-bottom: 20px;
`;

const Root = styled.div<{ rating?: number }>`
  width: 100%;
  max-width: 160px;
  position: relative;
`;

const RatingInner = styled.div<{ rating?: number }>`
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(10, 16px);
  grid-gap: 0;
  width: ${(props) => (props?.rating ?? 10) * 10}%;
  position: relative;

  &:first-of-type {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const Details = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: var(--black-80);
`;

const RatingItem = styled.span<{ empty?: boolean }>`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: ${(props) =>
    props.empty ? "var(--black-20)" : "var(--black-100)"};
`;

const Rating: React.FC<Props> = ({ rating, votes }) => {
  return (
    <Container>
      <Root>
        <RatingInner>
          {[...new Array(10)].map((_, index) => {
            return <RatingItem key={index} empty />;
          })}
        </RatingInner>
        <RatingInner rating={Math.round(rating * 10) / 10}>
          {[...new Array(10)].map((_, index) => (
            <RatingItem key={index} />
          ))}
        </RatingInner>
      </Root>
      <Details>
        {rating} • {votes} vote{votes !== 1 && "s"}
      </Details>
    </Container>
  );
};

export default Rating;
