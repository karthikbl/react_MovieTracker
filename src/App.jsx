// /* first version using prop drilling
// import { useState, useEffect } from "react";

// const tempMovieData = [
//   {
//     imdbID: "tt1375666",
//     Title: "Inception",
//     Year: "2010",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//   },
//   {
//     imdbID: "tt0133093",
//     Title: "The Matrix",
//     Year: "1999",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
//   },
//   {
//     imdbID: "tt6751668",
//     Title: "Parasite",
//     Year: "2019",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
//   },
// ];

// const tempWatchedData = [
//   {
//     imdbID: "tt1375666",
//     Title: "Inception",
//     Year: "2010",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//     runtime: 148,
//     imdbRating: 8.8,
//     userRating: 10,
//   },
//   {
//     imdbID: "tt0088763",
//     Title: "Back to the Future",
//     Year: "1985",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
//     runtime: 116,
//     imdbRating: 8.5,
//     userRating: 9,
//   },
// ];

// const average = (arr) =>
//   arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

// export default function App() {
//   const [movies, setMovies] = useState(tempMovieData);
//   return (
//     <>
//       <Navbar movies={movies} />
//       <Main movies={movies} />
//     </>
//   );
// }

// // navbar part begins
// const Search = () => {
//   const [query, setQuery] = useState("");
//   const handleChange = (e) => {
//     setQuery(e.target.value);
//     console.log(e.target.value);
//   };
//   return (
//     <>
//       <input
//         className="search"
//         type="text"
//         placeholder="Search movies..."
//         value={query}
//         // onChange={(e)=> setQuery(e.target.value)}
//         onChange={handleChange}
//       />
//     </>
//   );
// };

// const Logo = () => {
//   return (
//     <>
//       <div className="logo">
//         <span role="img">🍿</span>
//         <h1>usePopcorn</h1>
//       </div>
//     </>
//   );
// };

// const Numresults = ({movies}) => {
//   return (
//     <>
//       <p className="num-results">
//         Found <strong>{movies.length}</strong> results
//       </p>
//     </>
//   );
// };

// const Navbar = ({movies}) => {
//   return (
//     <>
//       <nav className="nav-bar">
//         <Logo />
//         <Search />
//         <Numresults movies={movies} />
//       </nav>
//     </>
//   );
// };
// // navbar part ends

// // Main part begins
// const Main = ({ movies }) => {
//   return (
//     <>
//       <main className="main">
//         <ListBox movies={movies} />
//         <WatchedBox />
//       </main>
//     </>
//   );
// };

// //////////////////
// const ListBox = ({ movies }) => {
//   const [isOpen1, setIsOpen1] = useState(true);

//   return (
//     <>
//       <div className="box">
//         <button
//           className="btn-toggle"
//           onClick={() => setIsOpen1((open) => !open)}
//         >
//           {isOpen1 ? "–" : "+"}
//         </button>
//         {isOpen1 && <MovieList movies={movies} />}
//       </div>
//     </>
//   );
// };

// const MovieList = ({ movies }) => {
//   return (
//     <>
//       <ul className="list">
//         {movies?.map((movie) => (
//           <Movie movie={movie} key={movie.imdbID} />
//         ))}
//       </ul>
//     </>
//   );
// };

// const Movie = ({ movie }) => {
//   return (
//     <>
//       <li>
//         <img src={movie.Poster} alt={`${movie.Title} poster`} />
//         <h3>{movie.Title}</h3>
//         <div>
//           <p>
//             <span>🗓</span>
//             <span>{movie.Year}</span>
//           </p>
//         </div>
//       </li>
//     </>
//   );
// };
// ////////////////////////////

// // watched part begins (right part)
// const WatchedBox = () => {
//   const [watched, setWatched] = useState(tempWatchedData);
//   const [isOpen2, setIsOpen2] = useState(true);

//   return (
//     <>
//       <div className="box">
//         <button
//           className="btn-toggle"
//           onClick={() => setIsOpen2((open) => !open)}
//         >
//           {isOpen2 ? "–" : "+"}
//         </button>
//         {isOpen2 && (
//           <>
//             <WatchedSummary watched={watched} />
//             <WatchedMoviesList watched={watched} />
//           </>
//         )}
//       </div>
//     </>
//   );
// };

// const WatchedSummary = ({ watched }) => {
//   const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
//   const avgUserRating = average(watched.map((movie) => movie.userRating));
//   const avgRuntime = average(watched.map((movie) => movie.runtime));

//   return (
//     <>
//       <div className="summary">
//         <h2>Movies you watched</h2>
//         <div>
//           <p>
//             <span>#️⃣</span>
//             <span>{watched.length} movies</span>
//           </p>
//           <p>
//             <span>⭐️</span>
//             <span>{avgImdbRating}</span>
//           </p>
//           <p>
//             <span>🌟</span>
//             <span>{avgUserRating}</span>
//           </p>
//           <p>
//             <span>⏳</span>
//             <span>{avgRuntime} min</span>
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// const WatchedMoviesList = ({ watched }) => {
//   return (
//     <>
//       <ul className="list">
//         {watched.map((movie) => (
//           <WatchedMovie key={movie.imdbID} movie={movie} />
//         ))}
//       </ul>
//     </>
//   );
// };

// const WatchedMovie = ({ movie }) => {
//   return (
//     <>
//       <li>
//         <img src={movie.Poster} alt={`${movie.Title} poster`} />
//         <h3>{movie.Title}</h3>
//         <div>
//           <p>
//             <span>⭐️</span>
//             <span>{movie.imdbRating}</span>
//           </p>
//           <p>
//             <span>🌟</span>
//             <span>{movie.userRating}</span>
//           </p>
//           <p>
//             <span>⏳</span>
//             <span>{movie.runtime} min</span>
//           </p>
//         </div>
//       </li>
//     </>
//   );
// };

// // Main part ends

// */

// creating component composition using children

import { useState, useEffect, useRef } from "react";
import StarRating from "./StarRating";
import { useMovies } from "./useMovies";
import { useLocalStorageState } from "./useLocalStorageState";
import { useKey } from "./useKey";

const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
const KEY = "3235f3f2";

export default function App() {
  const [query, setQuery] = useState("");
  // const [movies, setMovies] = useState([]);

  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  const { movies, isLoading, error } = useMovies(query, handleCloseMovie);
  const [watched, setWatched] = useLocalStorageState([], "watched");

  // const [watched, setWatched] = useState([]);
  // const [watched, setWatched] = useState(() => {
  //   const storedValue = localStorage.getItem("watched");
  //   return JSON.parse(storedValue);
  // });
  /*
useEffect(()=>{
  console.log('After initial render')
},[])
useEffect(()=>{
  console.log('after every render')
})
useEffect(()=>{
  console.log('D')
},[query])


console.log('during render')
*/

  // using fetch
  // useEffect(() => {
  //   fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${KEY}&s=interstellar`)
  //     .then((res) => res.json())
  //     .then((data) => {console.log(data)
  //        setMovies(data.Search)});
  // }, []);

  function handleSelectMovie(id) {
    setSelectedId((sel) => (id === sel ? null : id));
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }

  function handleAddWatched(movie) {
    setWatched((wat) => [...wat, movie]);
    // localStorage.setItem('watched', JSON.stringify([...watched,movie]))
  }

  function handleDeleteWatched(id) {
    setWatched((wat) => wat.filter((movie) => movie.imdbID !== id));
  }

  // using async await
  // useEffect(() => {
  //   // using cleanup to avoid race condition
  //   const controller = new AbortController();

  //   const fetchMovies = async () => {
  //     try {
  //       setIsLoading(true);
  //       setError("");
  //       const res = await fetch(
  //         `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
  //         { signal: controller.signal }
  //       );
  //       console.log("response is ", res);

  //       if (!res.ok)
  //         throw new Error("something went wrong with fetching movies!");

  //       const data = await res.json();
  //       // if i give console.log(movies), then i get outpit as [] empty array i.e stale state, because setting state is asynchronous, after state is set it does not happen or show immediately
  //       // we see two consolelogs because of strict mode
  //       if (data.Response === "False") throw new Error("Movie not found!");
  //       setMovies(data.Search);
  //       setError("");
  //       console.log(data.Search);
  //       setIsLoading(false);
  //     } catch (err) {
  //       console.error("error from catch block", err.message);

  //       if (err.name !== "AbortError") {
  //         setError(err.message);
  //       }
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   if (query.length < 3) {
  //     setMovies([]);
  //     setError("");
  //     return;
  //   }
  //   handleCloseMovie();
  //   fetchMovies();

  //   // clean up function
  //   return () => {
  //     controller.abort();
  //   };
  // }, [query]);

  return (
    <>
      <Navbar>
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <Numresults movies={movies} />
      </Navbar>
      <Main>
        {/* usage of children */}
        <Box>
          {/* {isLoading ? <Loader /> : <MovieList movies={movies} />} */}
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>

        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMoviesList
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
              />
            </>
          )}
        </Box>

        {/* usage of element */}

        {/* <Box element={<MovieList movies={movies} />} />
        <Box
          element={
            <>
              <WatchedSummary watched={watched} />
              <WatchedMoviesList watched={watched} />
            </>
          }
        /> */}
      </Main>
    </>
  );
}

// Loader component
const Loader = () => {
  return <p className="loader">Loading...</p>;
};

const ErrorMessage = ({ message }) => {
  return (
    <p className="error">
      <span>❌</span> {message}
    </p>
  );
};
// navbar part begins
const Search = ({ query, setQuery }) => {
  // for dom manipulation we have use useEffect,
  //   useEffect(()=>{
  //   const el=document.querySelector(".search")
  //   el.focus()
  // },[])

  // using USEREF HOOK

  const inputEl = useRef(null);

  useKey("Enter", function () {
    if (document.activeElement === inputEl.current) return;
    inputEl.current.focus();
    setQuery("");
  });

  // useEffect(() => {
  //   const callback = (e) => {
  //     if (document.activeElement === inputEl.current) return;

  //     if (e.code === "Enter") {
  //       inputEl.current.focus();
  //       setQuery("");
  //     }
  //   };
  //   document.addEventListener("keydown", callback);
  //   return () => document.removeEventListener("keydown", callback);
  // }, [setQuery]);

  const handleChange = (e) => {
    setQuery(e.target.value);
    console.log(e.target.value);
  };
  return (
    <>
      <input
        className="search"
        type="text"
        placeholder="Search movies..."
        value={query}
        // onChange={(e)=> setQuery(e.target.value)}
        onChange={handleChange}
        ref={inputEl}
      />
    </>
  );
};

const Logo = () => {
  return (
    <>
      <div className="logo">
        <span role="img">🍿</span>
        <h1>usePopcorn</h1>
      </div>
    </>
  );
};

const Numresults = ({ movies }) => {
  return (
    <>
      <p className="num-results">
        Found <strong>{movies?.length}</strong> results
      </p>
    </>
  );
};

const Navbar = ({ children }) => {
  return (
    <>
      <nav className="nav-bar">{children}</nav>
    </>
  );
};
// navbar part ends

// Main part begins
const Main = ({ children }) => {
  return (
    <>
      <main className="main">{children}</main>
    </>
  );
};

//////////////////
const Box = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <div className="box">
        <button
          className="btn-toggle"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? "–" : "+"}
        </button>
        {isOpen && children}
      </div>
    </>
  );
};

/*
const WatchedBox = () => {
  const [watched, setWatched] = useState(tempWatchedData);
  const [isOpen2, setIsOpen2] = useState(true);

  return (
    <>
      <div className="box">
        <button
          className="btn-toggle"
          onClick={() => setIsOpen2((open) => !open)}
        >
          {isOpen2 ? "–" : "+"}
        </button>
        {isOpen2 && (
          <>
            <WatchedSummary watched={watched} />
            <WatchedMoviesList watched={watched} />
          </>
        )}
      </div>
    </>
  );
};

*/

const MovieList = ({ movies, onSelectMovie }) => {
  return (
    <>
      <ul className="list list-movies">
        {movies?.map((movie) => (
          <Movie
            movie={movie}
            key={movie.imdbID}
            onSelectMovie={onSelectMovie}
          />
        ))}
      </ul>
    </>
  );
};

const Movie = ({ movie, onSelectMovie }) => {
  return (
    <>
      <li onClick={() => onSelectMovie(movie.imdbID)}>
        <img src={movie.Poster} alt={`${movie.Title} poster`} />
        <h3>{movie.Title}</h3>
        <div>
          <p>
            <span>🗓</span>
            <span>{movie.Year}</span>
          </p>
        </div>
      </li>
    </>
  );
};
////////////////////////////

///Selected movie///////////////
const MovieDetails = ({ selectedId, onCloseMovie, onAddWatched, watched }) => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState("");

  const countRef = useRef(0);

  useEffect(() => {
    if (userRating) countRef.current = countRef.current + 1;
  }, [userRating]);

  // use useEffect for ref, we cannot mutate ref in render logic.(ref is persisited across renders , does not trigger rerender when updated.. )

  const isWatched = watched.map((movie) => movie.imdbID).includes(selectedId);
  const watchedUserrating = watched.find(
    (movie) => movie.imdbID === selectedId
  )?.userRating;
  // const test=watched.find((movie)=>movie.imdbID===selectedId)
  //   console.log("test is",test)

  // working of find method in arrays
  // const arr=[34,56,5,7,9,0]
  // const test=arr.find((ele)=>ele>34)
  // console.log("test is",test)

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  // console.log(title)

  function handleAdd() {
    const newWatchedMovie = {
      imdbID: selectedId,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ").at(0)),
      userRating,
      countRatingDecesions: countRef.current,
    };

    onAddWatched(newWatchedMovie);
    onCloseMovie();
  }

  useKey("Escape", onCloseMovie);

  // use Effect for escape key
  // useEffect(() => {
  //   const callBa = (e) => {
  //     if (e.code === "Escape") {
  //       onCloseMovie();
  //       console.log("CLOSING..");
  //     }
  //   };

  //   document.addEventListener("keydown", callBa);

  //   return () => {
  //     document.removeEventListener("keydown", callBa);
  //   };
  // }, [onCloseMovie]);

  console.log(title, year, genre);
  useEffect(() => {
    const getMovieDetails = async () => {
      setIsLoading(true);
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
      );
      const data = await res.json();
      console.log("data from getMovieDetails", data);
      setMovie(data);
      setIsLoading(false);
    };
    getMovieDetails();
  }, [selectedId]);

  // VERY IMPORTANT explaination: initially the state const [movie, setMovie] = useState({}); will be empty so we get undefined,if we console.log(title) also,  but after first useeffect is run, we do setMovie(data); so we get movie details. But the below useEffect i.e is second one will also run and will mount on initial render only, so it will be always undefined.To overcome this issue we have to lisien to title in dependancy array so that, in first useeffect when movie is set we get  title details, and second useeffect will listen to title changes and rerender, so that correct title is shown..
  useEffect(() => {
    if (!title) return;
    document.title = `Movie | ${title}`;

    // using cleanup function to remove movie name in title after component is unmounted
    return function () {
      document.title = "popcorn";
      console.log(`clean up effect for movie ${title}`);
    };
  }, [title]);

  return (
    <div className="details">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={onCloseMovie}>
              {" "}
              &larr;{" "}
            </button>
            <img src={poster} alt={`poster of ${title} movie`} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐</span>
                {imdbRating} IMDB rating
              </p>
            </div>
          </header>

          <section>
            <div className="rating">
              {!isWatched ? (
                <>
                  <StarRating
                    maxRating={10}
                    size={24}
                    onSetRating={setUserRating}
                  />
                  {userRating > 0 && (
                    <button className="btn-add" onClick={handleAdd}>
                      +Add to list
                    </button>
                  )}
                </>
              ) : (
                <p>
                  you rated this movie {watchedUserrating} <span>⭐</span>
                </p>
              )}
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      )}
    </div>
  );
};

// watched part begins (right part)

const WatchedSummary = ({ watched }) => {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));
  // const test = watched.map((movie) => movie.runtime)
  // console.log("test is",test)

  return (
    <>
      <div className="summary">
        <h2>Movies you watched</h2>
        <div>
          <p>
            <span>#️⃣</span>
            <span>{watched.length} movies</span>
          </p>
          <p>
            <span>⭐️</span>
            <span>{avgImdbRating.toFixed(2)}</span>
          </p>
          <p>
            <span>🌟</span>
            <span>{avgUserRating.toFixed(2)}</span>
          </p>
          <p>
            <span>⏳</span>
            <span>{avgRuntime.toFixed(2)}</span>
          </p>
        </div>
      </div>
    </>
  );
};

const WatchedMoviesList = ({ watched, onDeleteWatched }) => {
  return (
    <>
      <ul className="list">
        {watched.map((movie) => (
          <WatchedMovie
            key={movie.imdbID}
            movie={movie}
            onDeleteWatched={onDeleteWatched}
          />
        ))}
      </ul>
    </>
  );
};

const WatchedMovie = ({ movie, onDeleteWatched }) => {
  return (
    <>
      <li>
        <img src={movie.poster} alt={`${movie.title} poster`} />
        <h3>{movie.title}</h3>
        <div>
          <p>
            <span>⭐️</span>
            <span>{movie.imdbRating}</span>
          </p>
          <p>
            <span>🌟</span>
            <span>{movie.userRating}</span>
          </p>
          <p>
            <span>⏳</span>
            <span>{movie.runtime} </span>
          </p>
          <button
            className="btn-delete"
            onClick={() => onDeleteWatched(movie.imdbID)}
          >
            X
          </button>
        </div>
      </li>
    </>
  );
};

// Main part ends
