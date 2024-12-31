const api_key = "2124a3b8ca342cf446ae57cfd90dd3de";

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=2`,
  requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=horror&page=1&include_adult=false`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=1`,
};

export default requests;
