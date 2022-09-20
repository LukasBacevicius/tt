import Skeleton from "react-loading-skeleton";
import { MainHeader } from "components/Typography";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { ContainerStyle } from "styles/global";
import Rating from "components/Rating";

import CastItem from "components/CastItem";

const Container = styled.div`
  ${ContainerStyle()}
  padding: 48px var(--box-padding) 0;
  display: grid;
  grid-gap: 32px;
  grid-template-columns: 1fr 32%;

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const Title = styled(MainHeader)`
  font-weight: 700;
  margin-bottom: 12px;
`;

const Overview = styled.p`
  color: var(--black-60);
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 40px;
`;

const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  aspect-ratio: 500 / 750;
  border: var(--border);
`;

const ImgWrap = styled.div`
  overflow: hidden;
`;

const Main = styled.main`
  @media (max-width: 576px) {
    order: 2;
  }
`;

const SectionHeading = styled.h3`
  font-size: 36px;
  line-height: 40px;
  font-weight: 600;
  color: var(--black-100);
  margin-bottom: 16px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 12px;

  @media (max-width: 922px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Aside = styled.aside``;

const MovieSkeleton: React.FC = () => {
  return (
    <Container>
      <Main>
        <Title>
          <Skeleton />
        </Title>
        <Rating votes={0} rating={0} />
        <Overview>
          <Skeleton count={3} />
        </Overview>
      </Main>
      <Aside>
        <ImgWrap>
          <Skeleton />
        </ImgWrap>
      </Aside>
    </Container>
  );
};

const Movie = () => {
  const params = useParams();

  const fetchMovie = async (id?: string) => {
    if (!id) return;

    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=0534448269ed9cf9d7d60bf1e42c3ee7`
    );
    return response.json();
  };

  const { data, isLoading } = useQuery(params?.id ?? "", () =>
    fetchMovie(params.id)
  );

  const fetchCredits = async (id?: string) => {
    if (!id) return;

    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=0534448269ed9cf9d7d60bf1e42c3ee7`
    );
    return response.json();
  };

  const { data: dataCredits, isLoading: isCreditsLoading } = useQuery(
    `${params?.id ?? ""}_credits`,
    () => fetchCredits(params.id)
  );

  if (isLoading || isCreditsLoading) {
    return <MovieSkeleton />;
  }

  return (
    <Container>
      <Main>
        <Title>{data?.title}</Title>
        <Rating votes={data?.vote_count} rating={data?.vote_average} />
        <Overview>{data?.overview}</Overview>
        <SectionHeading>Cast</SectionHeading>
        <Grid>
          {dataCredits.cast.map((c: any) => (
            <CastItem cast={c} />
          ))}
        </Grid>
      </Main>
      <Aside>
        <ImgWrap>
          <Img
            src={`https://image.tmdb.org/t/p/original/${data?.poster_path}`}
          />
        </ImgWrap>
      </Aside>
    </Container>
  );
};

export default Movie;
