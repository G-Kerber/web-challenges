import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to Next.js API Routes!</h1>
      <Link href={`/api/products`}>/api/products</Link>
      <Link href={`/api/products/1`}>/api/products/1</Link>
      <Link href={`/api/products/2`}>/api/products/2</Link>
      <Link href={`/products`}>/products</Link>
    </div>
  );
}
