import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import Header from '../components/Header';
import SearchResults from '../components/SearchResults';
import ResponseMock from '../Response';

/**
 * 검색 결과 페이지
 * @param param0
 * @returns
 */
function Search({ results }: { results: any }) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{router.query.term} - Search Result</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Search Results */}
      <SearchResults results={results} />
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const useDummyData = true;
  const API_KEY = process.env.API_KEY;
  const CONTEXT_KEY = process.env.CONTEXT_KEY;
  const startIndex = context.query.start || '0';

  //? Google API 호출 제한때문에 Mock 객체를 사용하였다.
  if (useDummyData) {
    const data = ResponseMock;
    return {
      props: {
        results: data,
      },
    };
  }

  try {
    //? Google API 호출
    const { data } = await axios.get(
      `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
    );

    return {
      props: {
        results: data,
      },
    };
  } catch (error) {
    console.error('error', error);
  }

  return {
    props: {},
  };
}

export default Search;
