import React from 'react';
import NoSearchResult from './NoSearchResult';
import PaginationButtons from './PaginationButtons';

interface ISearchResults {
  results: any;
}

function SearchResults({ results }: ISearchResults) {
  const {
    searchInformation: { formattedTotalResults },
  } = results;

  return (
    <div className="w-full px-3 mx-auto sm:pl-[5%] md:pl-[14%]">
      <p className="mt-3 mb-5 text-base text-gray-600">
        검색 결과: 약 {results?.searchInformation?.formattedTotalResults}개 (
        {results?.searchInformation?.formattedSearchTime}초)
      </p>

      {results.items?.map((result: any) => (
        <div key={result.link} className="max-w-xl mb-8">
          <div className="group">
            <a href={result.link} className="text-sm">
              {result.formattedUrl}
            </a>
            <a href={result.link}>
              <h2 className="text-xl font-medium text-blue-800 truncate group-hover:underline">
                {result.title}
              </h2>
            </a>
          </div>
          <p className="line-clamp-2">{result.snippet}</p>
        </div>
      ))}

      {formattedTotalResults === '0' && <NoSearchResult />}

      {formattedTotalResults !== '0' && <PaginationButtons />}
    </div>
  );
}

export default SearchResults;
