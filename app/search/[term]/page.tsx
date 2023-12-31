import MoviesCarousel from "@/components/MoviesCarousel";
import { getPopularMovies, getSearchMovies } from "@/lib/getMovies";
import { notFound } from "next/navigation";

type Props = {
  params: {
    term: string;
  };
};
async function SearchPage({ params: { term } }: Props) {
  if (!term) notFound();

  const termToUse = decodeURI(term);
  const movies = await getSearchMovies(termToUse);
  const popularMovies = await getPopularMovies();

  return (
    <div className="max-w-7xl max-auto">
      <div className="flex flex-col space-y-5 mt-32 xl:mt-42">
        <h1 className="text-3xl md:text-6xl  px-10">
          Results for <span className="font-bold">{termToUse}</span>
        </h1>
        <MoviesCarousel title="Movies" movies={movies} isVertical />
        <MoviesCarousel title="You may also like" movies={popularMovies} />
      </div>
    </div>
  );
}

export default SearchPage;
