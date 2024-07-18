import useSWR from "swr";

const URL = "";

const fetcher = (query: string) =>
  fetch(URL, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ query }),
  })
    .then((res) => res.json())
    .then((json) => json.data);

type Data = {
  students: {
    name: string;
  }[];
};

export default function Index() {
  const { data, error, isLoading } = useSWR<Data>(
    "{ students { name } }",
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!data) return null;

  const { students } = data;

  return (
    <div>
      {students.map((user, index) => (
        <div key={index}>{user.name}</div>
      ))}
    </div>
  );
}
