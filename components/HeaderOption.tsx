import React, { SVGProps } from 'react';

interface IHeaderOption {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  title: string;
  selected?: boolean;
}

function HeaderOption({ Icon, title, selected }: IHeaderOption) {
  return (
    <div
      className={`flex items-center pb-3 space-x-1 border-b-4 cursor-pointer hover:text-blue-500 hover:border-blue-500 ${
        selected && `text-blue-500 border-blue-500`
      }`}
    >
      <Icon className="h-4" />
      <p className="hidden sm:inline-flex">{title}</p>
    </div>
  );
}

export default HeaderOption;
