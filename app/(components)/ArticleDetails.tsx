"use client";

import Image from "next/image";

import { Article as ArticleInterface } from "@/interfaces/article";

export const ArticleDetails = ({ article }: { article: ArticleInterface }) => {
  return (
    <a href={article?.url} target="_blank">
      <section className="mb-32">
        <div className="flex flex-wrap">
          <div className="w-full shrink-0 grow-0 basis-auto md:w-2/12 lg:w-3/12">
            {article.urlToImage && (
              <Image
                src={article.urlToImage}
                width={500}
                height={500}
                className="mb-6 w-full rounded-lg shadow-lg dark:shadow-black/20"
                alt="Picture of the author"
              />
            )}
          </div>
          <div className="w-full shrink-0 grow-0 basis-auto text-center md:w-10/12 md:pl-6 md:text-left lg:w-9/12">
            <h1 className="mb-4 text-3xl font-bold">{article?.title}</h1>

            {/* <p className="mb-4 text-xs">{article?.publishedAt}</p> */}
            <p className="mb-4 text-xs">Source: {article?.source?.name}</p>

            <p className="mb-6">{article?.description}</p>
          </div>
        </div>
      </section>
    </a>
  );
};
