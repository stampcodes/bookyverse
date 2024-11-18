import useDetailsBook from "../../hooks/useDetailsBook";
import { useParams } from "react-router-dom";
import loadingGif from "../../assets/imgs/loading.gif";
const BookDetails = () => {
  const { bookkey } = useParams();
  const { data, error, loading } = useDetailsBook(bookkey);

  return (
    <>
      <main className="flex flex-col items-center p-4 bgAll">
        {data && (
          <>
            <article className="w-[100%] lg:w-[80%] xl:w-[40%]  bg-[#42352f] text-gray-200  flex flex-col items-center p-5  rounded-lg">
              <h2 className="font-bold text-xl mb-2">{data.title}</h2>
              <p className="dates text-gray-500 mb-3">
                {data.first_publish_date}
              </p>
              {data.description ? (
                <p>{data.description}</p>
              ) : (
                <p>Description not found!</p>
              )}
            </article>
          </>
        )}
        {loading && (
          <img src={loadingGif} alt="Loading..." className="rounded-xl" />
        )}
        {error && (
          <img src={loadingGif} alt="Loading..." className="rounded-xl" />
        )}
      </main>
    </>
  );
};

export default BookDetails;
