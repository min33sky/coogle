import { useRouter } from 'next/router';
import React from 'react';
import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

function PaginationButtons() {
  const router = useRouter();

  const startIndex = Number(router.query.start) || 1;

  return (
    <div className="flex justify-between max-w-lg mb-10 text-blue-700">
      {startIndex >= 2 && (
        <Link href={`/search?term=${router.query.term}&start=${startIndex - 1}`} passHref>
          <div className="flex flex-col items-center flex-grow cursor-pointer hover:underline">
            <ChevronLeftIcon className="h-5" />
            <p>이전</p>
          </div>
        </Link>
      )}
      <Link href={`/search?term=${router.query.term}&start=${startIndex + 1}`} passHref>
        <div className="flex flex-col items-center flex-grow cursor-pointer hover:underline">
          <ChevronRightIcon className="h-5" />
          <p>다음</p>
        </div>
      </Link>
    </div>
  );
}

export default PaginationButtons;
