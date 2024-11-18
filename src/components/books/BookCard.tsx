import React, { useState } from "react";
import { Book } from "./types.ts";
import loadingGif from "../../assets/imgs/loading.gif";
import { Link } from "react-router-dom";

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <article className="bg-[#42352f] text-gray-200  flex flex-col items-center p-5  rounded-lg card">
      <Link to={`/description${book.key}`} className="flex flex-col h-full">
        <h2 className="font-bold text-xl mb-2 text-center mx-auto my-auto">
          {book.title}
        </h2>
        <p className=" dates text-gray-500 text-base text-center ">
          {book.first_publish_year}
        </p>
        {isLoading && (
          <img
            src={loadingGif}
            alt="Loading..."
            className="w-[300px] h-[400px] bg-cover bg-center rounded-lg "
          />
        )}
        {book.cover_id && (
          <img
            src={`https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg`}
            alt={book.title}
            onLoad={handleImageLoad}
            style={{ display: isLoading ? "none" : "block" }}
            className="w-[300px] h-[400px] rounded-lg flex mx-auto self-end"
          />
        )}
      </Link>
    </article>
  );
};

export default BookCard;
