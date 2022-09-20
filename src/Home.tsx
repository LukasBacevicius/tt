import React from "react";
import { useInfiniteQuery } from "react-query";
import InfiniteScroll from "react-infinite-scroller";
import "react-loading-skeleton/dist/skeleton.css";
import styled from "styled-components";

import { MainHeader } from "components/Typography";
import { MovieItem, MovieItemSkeleton } from "components/MovieItem";
import { ContainerStyle } from "styles/global";

const Header = styled.header`
  ${ContainerStyle()}
  padding: 0 var(--box-padding);
  margin-top: 48px;
  margin-bottom: 48px;
`;

const List = styled.ul`
  ${ContainerStyle()}
  list-style-type: none;
  display: grid;

  @media (min-width: 1330px) {
    padding: 0 var(--box-padding);
  }

  & > div:first-of-type {
    border-top: var(--border);
  }
`;

const Home: React.FC = () => {
  const fetchMovies = async (page: Number) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=0534448269ed9cf9d7d60bf1e42c3ee7&language=en-US&page=${page}`
    );
    return response.json();
  };

  const { data, fetchNextPage } = useInfiniteQuery(
    "movies",
    ({ pageParam = 1 }) => fetchMovies(pageParam),
    {
      getNextPageParam: (lastPage) => lastPage.page + 1,
    }
  );

  return (
    <>
      <Header>
        <MainHeader>Popular movies</MainHeader>
      </Header>
      <List>
        <InfiniteScroll
          pageStart={1}
          loadMore={() => {
            fetchNextPage();
          }}
          hasMore
          loader={
            <>
              <MovieItemSkeleton />
              <MovieItemSkeleton />
              <MovieItemSkeleton />
            </>
          }
        >
          {data?.pages?.map((p: any) => (
            <div key={p.page}>
              {p?.results.map((m: any) => (
                <MovieItem key={m.id} movie={m} />
              ))}
            </div>
          ))}
        </InfiniteScroll>
      </List>
    </>
  );
};

export default Home;
