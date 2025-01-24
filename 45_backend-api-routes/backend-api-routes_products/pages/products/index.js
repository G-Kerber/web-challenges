import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());
const URL = "/api/products";

export default function product() {
  const { data, isLoading } = useSWR(URL, fetcher);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <>
      <h1>Liste von Fischen</h1>
      <ul>
        {data.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </>
  );
}
