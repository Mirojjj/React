import { useState, useEffect } from "react";

const Fliter = () => {
  const fruitsData = [
    "apple",
    "banana",
    "mango",
    "kera",
    "black berry",
    "blue berry",
  ];

  const movies = [
    { id: 1, name: "Inception", type: "Movie", genre: "Sci-Fi" },
    { id: 2, name: "Breaking Bad", type: "TV Show", genre: "Drama" },
    { id: 3, name: "The Dark Knight", type: "Movie", genre: "Action" },
    { id: 4, name: "Stranger Things", type: "TV Show", genre: "Horror" },
    { id: 5, name: "The Matrix", type: "Movie", genre: "Sci-Fi" },
    { id: 6, name: "Friends", type: "TV Show", genre: "Comedy" },
  ];
  //user search
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  //movies search by filter
  const [moviesData, setMoviesData] = useState(movies);
  const [typeFilter, setTypeFilter] = useState("All");
  const [typeGenre, setTypeGenre] = useState("All");
  const [moviesFilteredData, setMoviesFilteredData] = useState(movies);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((resoponse) =>
      resoponse
        .json()
        .then(console.log(resoponse))
        .then((data) => {
          setData(data);
        })
    );
  }, []);

  useEffect(() => {
    setFilteredData(
      data.filter((user) => user.name.toLowerCase().includes(query))
    );
  }, [query, data]);

  // const handleFruitSearch = (e) => {
  //   let value = e.target.value.toLowerCase().trim();
  //   setQuery(value);
  //   console.log(value);
  //   if (value === "" || null) {
  //     setFilteredData(data);
  //   }

  //   const filtered = data.filter((user) =>
  //     user.name.toLowerCase().trim().includes(query)
  //   );
  //   setFilteredData(filtered);
  // };
  function handleTypeFilter() {
    if (typeGenre === "All") {
      setMoviesFilteredData(movies);
    }
    if (typeFilter !== "All") {
      setMoviesFilteredData(
        moviesData.filter((movie) => movie.type === typeFilter)
      );
    }

    // if (typeGenre !== "All") {
    //   console.log(typeGenre);
    //   setMoviesFilteredData(
    //     moviesData.filter((movie) => movie.genre === typeGenre)
    //   );
    // }
  }

  useEffect(() => {
    handleTypeFilter();
  }, [typeFilter, typeGenre]);

  return (
    <>
      <div>
        <input
          className=" bg-gray-50 border border-gray-800"
          type="text"
          placeholder="search for user"
          onChange={(e) => setQuery(e.target.value)}
        />
        {filteredData.map((user, index) => (
          <p key={index}>{user.name}</p>
        ))}
      </div>

      <br />
      <hr />
      <br />
      <div className=" text-1xl">
        <h1>filter movies by type or genre</h1>
        <div className="fliter types">
          <div className="by type">
            <label>type </label>
            <select
              class="bg-gray-50 border border-gray-300"
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Movie">Movies</option>
              <option value="TV Show">TV Shows</option>
            </select>
          </div>
          {/* <div className="by filter">
                <select
                  value={typeGenre}
                  onChange={(e) => setTypeGenre(e.target.value)}
                >
                  <option value="All">All</option>
                  <option value="Sci-Fi">Sci-Fi</option>
                  <option value="Drama">Drama</option>
                  <option value="Action">Action</option>
                  <option value="Horror">Horror</option>
                  <option value="Comedy">Comedy</option>
                </select>
              </div> */}
        </div>
        <div className="show movies">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Genre
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {moviesFilteredData.map((movie) => (
                  <tr key={movie.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {movie.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {movie.type}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {movie.genre}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fliter;
