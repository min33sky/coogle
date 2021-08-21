import React from 'react';

interface ISearchResults {
  results: any;
}

function SearchResults({ results }: ISearchResults) {
  console.log('results: ', results);
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
    </div>
  );
}

export default SearchResults;
