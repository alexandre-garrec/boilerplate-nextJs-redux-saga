export const getArticlesWithQuery = (text: string) =>
  `https://newsapi.org/v2/everything?q=${text}&apiKey=${process.env.API_KEY}`;

export const getArticles = () =>
  `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.API_KEY}`;
