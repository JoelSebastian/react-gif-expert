export const getGifs = async (category) => {
  const apiKey = '6dgDGThTRffmXHrOzR126cP2uMNFcAm2';
  const limit = 10;
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=${limit}`;
  const res = await fetch(url);
  const { data = [] } = await res.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  return gifs;
};
