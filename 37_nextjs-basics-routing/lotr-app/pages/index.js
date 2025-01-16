import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Hello next.js</h1>
      <Link href={`/volumes`}>Lord of the Rings</Link>
    </div>
  );
}
