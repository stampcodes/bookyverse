import { useState, useEffect } from "react";
import axios from "axios";

const useSearchBook = (query: string) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      if (query) {
        setLoading(true);
        try {
          const response = await axios.get(
            `https://openlibrary.org/subjects/${query}.json`
          );
          setData(response.data);
          setError(null);
        } catch (err) {
          setError("We couldn't find any books about " + query);
          setData(null);
        } finally {
          setLoading(false);
        }
      } else {
        setData(null);
        setError(null);
      }
    };

    fetchData();
  }, [query]);

  return { data, error, loading };
};

export default useSearchBook;
