import useSearchBook from "../../hooks/useSearchBook";
import { useState } from "react";
import BookCard from "./BookCard";
import loadingGif from "../../assets/imgs/loading.gif";
import { Book } from "./types.ts";

const BookList: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const { data, error, loading } = useSearchBook(query);

  return (
    <>
      <main className="flex flex-col items-center p-4 bgAll">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a category..."
          className="w-[60%] lg:w-[80%] 2xl:w-[60%] p-2 border-2 mb-4 rounded-lg bg-gray-200"
        />

        {data && data.works && data.works.length > 0 ? (
          <div className="w-[100%] lg:w-[90%] 2xl:w-[60%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.works.map((book: Book) => (
              <BookCard key={book.key} book={book} />
            ))}
          </div>
        ) : (
          <p className="text-center bg-gray-200 p-4 rounded-lg">
            No book found.
          </p>
        )}

        {loading && (
          <img
            src={loadingGif}
            alt="Loading..."
            className="w-[300px] h-[300px] bg-cover bg-center rounded-lg mt-6 "
          />
        )}
        {error && (
          <p className="text-center bg-red-500 p-4 rounded-lg mt-5">{error}</p>
        )}
      </main>
    </>
  );
};

export default BookList;
