import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function product() {
  const router = useRouter();
  const { id } = router.query;
  const URL = `/api/products/${id}`;
  const { data: fish, isLoading } = useSWR(URL, fetcher);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!fish) {
    return;
  }

  return (
    <>
      <h1>Fisch: {fish.name}</h1>
      <p>id: {fish.id}</p>
      <p>description: {fish.description}</p>
      <p>
        price: {fish.price} {fish.currency}
      </p>
      <p>category: {fish.category}</p>
    </>
  );
}
