import React, { MutableRefObject, useCallback, useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/solid';
import Avatar from './Avatar';
import HeaderOptions from './HeaderOptions';

/**
 * 검색 결과 화면의 헤더
 * @returns
 */
function Header() {
  const router = useRouter();
  const searchInputRef: MutableRefObject<HTMLInputElement | null> = useRef(null);

  const reset = useCallback((e: React.MouseEvent) => {
    if (searchInputRef.current) {
      searchInputRef.current.value = '';
    }
  }, []);

  const search = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (searchInputRef.current) {
        const term = searchInputRef.current.value;
        if (!term) return;

        router.push(`/search?term=${term}`);
      }
    },
    [router]
  );

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex items-center w-full p-6">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
          height={40}
          width={120}
          alt="small_logo"
          className="cursor-pointer"
          onClick={() => router.push('/')}
        />
        <form
          onSubmit={search}
          className="flex items-center flex-grow max-w-3xl px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg"
        >
          <input type="text" ref={searchInputRef} className="flex-grow w-full focus:outline-none" />
          <XIcon
            onClick={reset}
            className="text-gray-500 transition transform cursor-pointer sm:mr-3 h-7 hover:scale-125"
          />
          <MicrophoneIcon className="hidden h-6 mr-3 text-blue-500 border-l-2 sm:inline-flex" />
          <SearchIcon className="hidden h-6 text-blue-500 sm:inline-flex" />
          <button type="submit" className="hidden">
            Search
          </button>
        </form>

        <Avatar
          url="https://picjumbo.com/wp-content/uploads/the-golden-gate-bridge-sunset-1080x720.jpg"
          className="ml-auto"
        />
      </div>

      <HeaderOptions />
    </header>
  );
}

export default Header;
