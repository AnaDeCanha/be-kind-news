import useSWR from "swr";

// Fetcher function
const fetcher = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("An error occurred while fetching the data.");
  }
  return response.json();
};

const useFetchData = (url: string, options = {}) => {
  const { data, error, mutate } = useSWR(url, fetcher, options);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
};

export default useFetchData;
