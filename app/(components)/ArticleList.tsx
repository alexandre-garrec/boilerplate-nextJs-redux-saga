"use client";

import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, ReactNode } from "react";
import { loadData } from "@/store/actions";
import { ERROR, LOADING } from "@/utils/status";

import { Article as ArticleInterface } from "@/interfaces/article";

export const Articles = ({ children }: { children: ReactNode }) => {
  const { data: articles, status } = useSelector(
    (state: any) => state.articles
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadData());
  }, [dispatch]);

  if (status === LOADING) return <>loading</>;
  if (status === ERROR) return <>error</>;

  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          dispatch(loadData(e.target.value));
        }}
        className="block mb-7 w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />

      {articles.map((article: ArticleInterface, id: number) =>
        React.Children.map(
          children,
          (child: ReactNode) =>
            child && React.cloneElement(child, { article: article })
        )
      )}
    </>
  );
};
