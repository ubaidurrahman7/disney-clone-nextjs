"use client";
import getImagePath from "@/lib/getImagePath";
import { Movie } from "@/typings";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

Autoplay.globalOptions = { delay: 8000 };
function CarouselBanner({ movies }: { movies: Movie[] }) {
  const [emblaRef] = useEmblaCarousel({ loop: true, duration: 100 }, [
    Autoplay(),
  ]);
  return (
    <div
      className="o overflow-hidden lg:-mt-40 relative cursor-pointer"
      ref={emblaRef}
    >
      <div className="flex">
        {movies.map((movie) => (
          <div key={movie.id}>hello</div>
        ))}
      </div>
    </div>
  );
}

export default CarouselBanner;
