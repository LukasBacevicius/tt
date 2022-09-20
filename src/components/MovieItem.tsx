import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Root = styled.li`
  display: grid;
  overflow: hidden;
  grid-template-columns: 15% 1fr;
  border-bottom: var(--border);

  @media (min-width: 1330px) {
    border-left: var(--border);
    border-right: var(--border);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  aspect-ratio: 500 / 750;

  @media (max-width: 576px) {
    object-position: 50% 0%;
  }
`;

const ImgWrap = styled.div`
  border-right: var(--border);

  @media (max-width: 576px) {
    max-height: 280px;
  }
`;

const ImgSkeleton = styled(Skeleton)`
  aspect-ratio: 500 / 750;
  width: 100%;
  height: 100%;
`;


const Content = styled.div`
  padding: 32px 20px;
`;

const Title = styled.h2`
  color: var(--black-80);
  font-size: 36px;
  line-height: 40px;
  font-weight: 600;
  margin-bottom: 12px;

  a {
    color: inherit;
    text-decoration: inherit;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Overview = styled.p`
  color: var(--black-80);
  font-size: 20px;
  line-height: 28px;
  margin-bottom: 20px;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const MovieItemSkeleton: React.FC = () => (
  <Root>
    <ImgWrap>
      <ImgSkeleton />
    </ImgWrap>
    <Content>
      <Title>
        <Skeleton width={220} />
      </Title>
      <Overview>
        <Skeleton count={2} />
        <Skeleton width={200} />
      </Overview>
    </Content>
  </Root>
);

export const MovieItem: React.FC<{ movie: any }> = ({ movie }) => (
  <Root>
    <ImgWrap>
      <Img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
    </ImgWrap>
    <Content>
      <Title>
        <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
      </Title>
      <Overview>{movie.overview}</Overview>
    </Content>
  </Root>
);
