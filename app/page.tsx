"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import useApi from "@/hooks/useApi";

interface YourDataType {
  // Define the structure of your data here
  id: number;
  name: string;
  // Other fields...
}

export default function Home() {
  const url =
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=579700442f3b4257878e1d4cee6e714d";
  // useApi(url);
  const { data, error, loading } = useApi<YourDataType[]>(url);

  return (
    <>
      <Button>Start</Button>
      {data && <Card />}
    </>
  );
}
