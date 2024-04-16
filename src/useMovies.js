import { useState, useEffect } from "react";

const KEY = "3235f3f2";

export function useMovies(query, callback) {
  const [movies, setMovies] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    callback?.();

    // using cleanup to avoid race condition
    const controller = new AbortController();

    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
          { signal: controller.signal }
        );
        console.log("response is ", res);

        if (!res.ok)
          throw new Error("something went wrong with fetching movies!");

        const data = await res.json();
        // if i give console.log(movies), then i get outpit as [] empty array i.e stale state, because setting state is asynchronous, after state is set it does not happen or show immediately
        // we see two consolelogs because of strict mode
        if (data.Response === "False") throw new Error("Movie not found!");
        setMovies(data.Search);
        setError("");
        console.log(data.Search);
        setIsLoading(false);
      } catch (err) {
        console.error("error from catch block", err.message);

        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }

    fetchMovies();

    // clean up function
    return () => {
      controller.abort();
    };
  }, [query]);

  return { movies, isLoading, error };
}
