import Link from "next/link";
import { introduction, volumes } from "../../lib/data";

export default function HomePage() {
  return (
    <div>
      <p>
        <Link href={`..`}>Home Page</Link>
      </p>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        {volumes.map((volume) => {
          return (
            <li key={volume.title}>
              <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
