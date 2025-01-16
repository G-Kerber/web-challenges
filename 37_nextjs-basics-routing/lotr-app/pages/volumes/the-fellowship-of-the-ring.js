import Link from "next/link";
import { volumes } from "../../lib/data";
import Image from "next/image";

export default function theFellowshipOfTheRing() {
  const bookTitle = "the-fellowship-of-the-ring";
  const volumesIndex = volumes.findIndex(({ slug }) => slug === bookTitle);
  const volume = volumes.find(({ slug }) => slug === bookTitle);
  const { title, description, books, cover } = volume;
  const volumesLength = Object.values(volumes).length;

  return (
    <>
      <p>
        <Link href={`..`}>Home Page</Link>
      </p>
      <p>
        <Link href={`../volumes`}>Lord of the Rings</Link>
      </p>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        {books.map((book) => {
          return (
            <li>
              {book.ordinal}: {book.title}
            </li>
          );
        })}
      </ul>
      <Image alt="cover" width={140} height={230} src={`/../public${cover}`} />
      <p>
        {volumesIndex > 0 && (
          <Link href={`/volumes/${volumes[volumesIndex - 1].slug}`}>
            previous book
          </Link>
        )}
        {volumesIndex < volumesLength - 1 && (
          <Link href={`/volumes/${volumes[volumesIndex + 1].slug}`}>
            next book
          </Link>
        )}
      </p>
    </>
  );
}
