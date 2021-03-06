import React, { SVGProps } from 'react';

interface IHeaderOption {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  title: string;
  selected?: boolean;
}

/**
 * 헤더의 설정 메뉴
 * @param Icon 아이콘
 * @param title 이름
 * @param selected 현재 선택된 메뉴인지 여부
 * @returns
 */
function HeaderOption({ Icon, title, selected }: IHeaderOption) {
  return (
    <div
      className={`flex items-center pb-3 space-x-1 border-b-4 border-transparent border-black  cursor-pointer hover:text-blue-500 hover:border-blue-500 ${
        selected && `text-blue-500 !border-blue-500 `
      }`}
    >
      <Icon className="h-4" />
      <p className="hidden sm:inline-flex">{title}</p>
    </div>
  );
}

export default HeaderOption;
