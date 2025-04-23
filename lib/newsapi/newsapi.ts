export const fetchNewsApiOnSite = async () => {
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=84bb740d8799425daef10dae2aca3885`;

  const req = new Request(url);
  const res = await fetch(req);
  return await res.json();
};
