export default async function fetchData(endPoint) {
  const response = await fetch(
    `https://musayuksel-quote-server.glitch.me/${endPoint}`
  );
  const data = await response.json();
  // console.log(data)
  return data;
}
