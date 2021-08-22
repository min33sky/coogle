import { useRouter } from 'next/router';
import React from 'react';

function NoSearchResult() {
  const router = useRouter();

  return (
    <div className="mt-20 text-xl">
      <p>
        <span className="font-bold">{router.query.term}</span>와(과) 일치하는 검색결과가 없습니다.
      </p>
      <p className="mt-4 mb-4">제안:</p>
      <ul>
        <li>• 모든 단어의 철자가 정확한지 확인하세요.</li>
        <li>• 다른 검색어를 사용해 보세요.</li>
        <li>• 더 일반적인 검색어를 사용해보세요.</li>
      </ul>
    </div>
  );
}

export default NoSearchResult;
