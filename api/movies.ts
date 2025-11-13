export const fetchTopRatedMovies = () => {
  const url = 'https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDdlMjM4MjkyNTU1YmI2MTJkODQxNjY2ODU2Y2VmOSIsIm5iZiI6MTY1OTAxMzYzOS45NjIsInN1YiI6IjYyZTI4YTA3ZDM3MTk3MDA0YzZiN2ViNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.t53YLqCrdK0u292OytiNeHzntnc-YrHsEY3oKEa8DRc',
    },
  };

  fetch(url, options)
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((err) => console.error(err));
};
