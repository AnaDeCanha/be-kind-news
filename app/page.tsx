"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import useSWR from "swr";

export default function Home() {
  const URL =
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=579700442f3b4257878e1d4cee6e714d";
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR(URL, fetcher);

  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <Button>Start</Button>
      {data && <Card>ARTICLES</Card>}
    </>
  );
}
