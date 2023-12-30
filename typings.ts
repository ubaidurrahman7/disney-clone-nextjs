export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: string;
  poster_path: string;
  release_date: string;
  video: boolean;
  vote_avarage: number;
  title: string;
  vote_count: number;
};
export type SearchResults = {
  page: number;
  results: Movie[];
  total_page: number;
  total_results: number;
};

export type Genre = {
  id: number;
  name: string;
};
export type Genres = {
  genres: Genre[];
};
