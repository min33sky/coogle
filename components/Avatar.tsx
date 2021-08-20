import React from 'react';
import Image from 'next/image';

interface IAvatar {
  url: string;
  className?: string; //? Custom Component에는 class 속성이 없어서 prop으로 받은 후 전달해준다.
}
/**
 * 아바타 컴포넌트
 * https://stackoverflow.com/questions/64846858/how-to-use-tailwind-css-with-next-js-image
 * @param param0
 * @returns
 */
function Avatar({ url, className }: IAvatar) {
  return (
    <div
      className={`relative w-10 h-10 transition transform cursor-pointer hover:scale-110 ${className}`}
    >
      <Image className="rounded-full" loading="lazy" src={url} alt="profile pic" layout="fill" />
    </div>
  );
}

export default Avatar;
