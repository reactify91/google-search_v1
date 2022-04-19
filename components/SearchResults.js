import Link from "next/link";
import PaginationButtons from "./PaginationButtons";
const SearchResults = ({ results }) => {
  console.log(results);
  return (
    <div className="mx-auto w-full px-3 ">
      <p className="text-gray-600 text-md mb-5 mt-3">
        About {results.searchInformation?.formattedTotalResults} results
      </p>
      {results?.items?.map((result) => (
        <div key={result.link} className="max-w-xl mb-8">
          <div className="">
            <Link href={result.link}>
              <a className="text-gray-500 truncate text-lg line-clamp-1 underline">
                {result.formattedUrl}
              </a>
            </Link>
            <Link href={result.link}>
              <a className="text-xl truncate text-blue-500 font-bold">
                {" "}
                {result.title}
              </a>
            </Link>
          </div>
          <p className="line-clamp-2">{result.snippet}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
