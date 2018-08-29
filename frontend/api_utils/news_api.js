export const fetchArticles = params => {
  return $.ajax({
    url: `https://min-api.cryptocompare.com/data/v2/news/?lang=EN&${params}`,
    method: "GET"
  });
};

export const fetchCategories = () => {
  return $.ajax({
    url: 'https://min-api.cryptocompare.com/data/news/categories',
    method: 'get'
  });
};

export const fetchSources = () => {
  return $.ajax({
    url: 'https://min-api.cryptocompare.com/data/news/feeds',
    method: 'get'
  });
};