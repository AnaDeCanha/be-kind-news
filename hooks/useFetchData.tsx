import useSWR from "swr";

// Define the fetcher function
const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("An error occurred while fetching the data.");
  }
  return response.json();
};

// Custom hook
const useFetchData = (url, options = {}) => {
  const { data, error, isLoading, mutate } = useSWR(url, fetcher, options);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
};

export default useFetchData;
