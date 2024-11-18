import { useState, useEffect } from "react";
import axios from "axios";

const useSearchBook = (bookkey: string | undefined) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      if (bookkey) {
        setLoading(true);
        try {
          const response = await axios.get(
            `https://openlibrary.org/works/${bookkey}.json`
          );
          setData(response.data);
          console.log(response.data);
          setError(null);
        } catch (err) {
          setError("We couldn't find any books about " + bookkey);
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
  }, [bookkey]);

  return { data, error, loading };
};

export default useSearchBook;
