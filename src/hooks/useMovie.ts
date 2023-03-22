import { renderMoreMovieList } from '../components/MovieList';
import { getMovies, getSearchMovie } from '../api/api';
/*
interface RequestedInfo {
  requestedPage: number;
  keyword?: string;
}

type Values = Pick<IMovieList, 'page' | 'results'>
interface Handlers {
  handlePageTitle: () => void;
  handleNextPage: () => void;
  handleSearchResult: () => void;
}
interface ResponseInfo {
  values: Values,
  handlers: {}
}
*/
// type TMovieFunction = (info: RequestedInfo) =>

export async function usePopularMovie(requestedPage: number) {
  const { page, results } = await getMovies(requestedPage);

  async function handleNextPage() {
    const { results } = await getMovies(page + 1);
    return results;
  }

  return {
    values: { page, results },
    handlers: { handleNextPage },
  };
}

export async function useSearchedMovie(keyword: string, requestedPage: number) {
  const { page, results } = await getSearchMovie(keyword, requestedPage);
  function handleNextPage() {
    renderMoreMovieList(results);
  }

  return {
    values: { page, results },
    handlers: { handleNextPage },
  };
}
