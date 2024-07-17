"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useFetchData from "../../hooks/useFetchData";

interface Source {
  id: string | null;
  name: string;
}

interface Article {
  source: Source;
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string | null;
}

interface ApiResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}

const URL: string =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=579700442f3b4257878e1d4cee6e714d";
const MAX_CONTENT: number = 5;

export default function NewsFeed() {
  const { data } = useFetchData(URL);
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    if (data) {
      setArticles(data.articles);
    }
  }, [data]);

  const listHeadlines = articles.slice(0, MAX_CONTENT).map((article) => {
    return (
      <li key={article.source.id || article.title}>
        <Card>
          <CardHeader>
            <CardTitle>{article.title}</CardTitle>
            <CardDescription>{article.description}</CardDescription>
          </CardHeader>
        </Card>
      </li>
    );
  });

  return (
    <>
      <ul>{listHeadlines}</ul>
    </>
  );
}
