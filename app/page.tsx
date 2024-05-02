import { Articles } from "./(components)/ArticleList";
import { Article } from "./(components)/Article";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href="/articlesWithInfos" className="mb-32">
        Same with infos
      </Link>
      <div className="container my-24 mx-auto md:px-6">
        <Articles>
          <Article />
        </Articles>
      </div>
    </>
  );
}
