export const fetchArticles = params => {
  let url = "https://min-api.cryptocompare.com/data/news/?";
  for (let i = 0; i < params.length; i++) {
    url += params[i];
    if (i !== params.length - 1) url += "&";
  }

  return $.ajax({
    url,
    method: 'GET'
  });
};