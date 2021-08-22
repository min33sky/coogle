import {
  DotsVerticalIcon,
  MapIcon,
  NewspaperIcon,
  PhotographIcon,
  PlayIcon,
  SearchIcon,
} from '@heroicons/react/outline';
import React from 'react';
import HeaderOption from './HeaderOption';

/**
 * 검색 옵션들을 보여주는 헤더
 * @returns
 */
function HeaderOptions() {
  return (
    <div className="flex w-full text-sm text-gray-700 border-b-[1px] justify-evenly lg:text-base lg:justify-start lg:pl-52 lg:space-x-36">
      {/* Left */}
      <div className="flex space-x-6">
        <HeaderOption Icon={SearchIcon} title="전체" selected />
        <HeaderOption Icon={PhotographIcon} title="이미지" />
        <HeaderOption Icon={MapIcon} title="지도" />
        <HeaderOption Icon={PlayIcon} title="동영상" />
        <HeaderOption Icon={NewspaperIcon} title="뉴스" />
        <HeaderOption Icon={DotsVerticalIcon} title="더보기" />
      </div>

      {/* Right */}
      <div className="flex space-x-4">
        <p className="link">설정</p>
        <p className="link">더보기</p>
      </div>
    </div>
  );
}

export default HeaderOptions;
