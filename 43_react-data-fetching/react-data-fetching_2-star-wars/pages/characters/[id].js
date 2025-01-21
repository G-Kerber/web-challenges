import useSWR from "swr";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";

export default function Character() {
  const router = useRouter();
  const { id } = router.query;
  console.log("id_", id);
  const URL = `https://swapi.py4e.com/api/people/${id}`;
  const { data: people, isLoading, error } = useSWR(URL, fetcher);

  async function fetcher(URL) {
    const response = await fetch(URL);
    if (!response.ok) {
      const error = new Error("An error occurred while fetching the data.");
      error.info = await response.json();
      error.status = response.status;
      throw error;
    }
    return response.json();
  }

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  console.log("people_", people);
  return (
    <Layout>
      <Card
        id={id}
        name={people.name}
        height={people.height}
        eyeColor={people.eye_color}
        birthYear={people.birth_year}
      />
    </Layout>
  );
}
