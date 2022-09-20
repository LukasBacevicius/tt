import styled from "styled-components";

const Root = styled.div`
  margin-bottom: 12px;
`;

const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const ImgWrap = styled.div`
  background: var(--black-20);
  height: 175px;
  border: var(--border);
  margin-bottom: 4px;
`;

const Name = styled.p`
  font-size: 14px;
  line-height: 20px;
`;

interface Props {
  cast: Record<string, string>;
}

const CastItem: React.FC<Props> = ({ cast }) => {
  return (
    <Root>
      <ImgWrap>
        {!!cast.profile_path && (
          <Img
            src={`https://image.tmdb.org/t/p/w138_and_h175_face/${cast.profile_path}`}
          />
        )}
      </ImgWrap>
      <Name>{cast.name}</Name>
    </Root>
  );
};

export default CastItem;
