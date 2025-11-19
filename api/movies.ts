const apiKey =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDdlMjM4MjkyNTU1YmI2MTJkODQxNjY2ODU2Y2VmOSIsIm5iZiI6MTY1OTAxMzYzOS45NjIsInN1YiI6IjYyZTI4YTA3ZDM3MTk3MDA0YzZiN2ViNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.t53YLqCrdK0u292OytiNeHzntnc-YrHsEY3oKEa8DRc';

const headers = {
  accept: 'application/json',
  Authorization: `Bearer ${apiKey}`,
};

export const fetchTopRatedMovies = async () => {
  const url =
    'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
  const options = {
    method: 'GET',
    headers: headers,
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
  }
};

export const fetchMovieDetails = async (id: number) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;

  const options = {
    method: 'GET',
    headers: headers,
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
