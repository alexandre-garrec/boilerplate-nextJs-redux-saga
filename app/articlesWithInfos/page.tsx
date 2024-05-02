import { Articles } from "../(components)/ArticleList";
import { ArticleDetails } from "../(components)/ArticleDetails";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href="/" className="mb-32">
        {"<"} back
      </Link>
      <div className="container my-24 mx-auto md:px-6">
        <Articles>
          <ArticleDetails />
        </Articles>
      </div>
    </>
  );
}
