# Coogle

> Google clone 😀

## Modules

- react
- nextjs
- tailwindcss

## Coding Note

### tailwindcss에서 important 사용하기

아래 코드에서는 `selected`의 값에 따라서 botter-bottom의 색상을 바꿔주려고 한다.
`tailwindcss`의 `jit` mode에서는 built-in important를 지원한다. `!`를 원하는 css 속성 앞에 넣어주면 된다.

```ts
<div
  className={`flex items-center pb-3 space-x-1 border-b-4 border-transparent border-black  cursor-pointer hover:text-blue-500 hover:border-blue-500 ${
    selected && `text-blue-500 !border-blue-500 ` // 여기에 !를 추가
  }`}
>
  <Icon className="h-4" />
  <p className="hidden sm:inline-flex">{title}</p>
</div>
```

### tailwindcss에서 css class를 customize하기

global.css (파일명은 상관없다)의 @tailwind 아래에 `@layer components`를 추가하고 css 속성을 입력한다.

```css
@layer components {
  .btn {
    @apply p-3 bg-[#f8f9fa] rounded-md focus:outline-none hover:shadow-md active:ring-gray-300 ring-gray-200 text-sm text-gray-800 hover:ring-1;
  }
  .link {
    @apply cursor-pointer hover:underline;
  }
}
```

### Input의 value를 다루는 방법

input을 다룰 때 `useState`를 이용해서 관리하는게 보통이다. 여기선 `useRef`를 이용해서 input의 value를 사용하였다.

```ts
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
    }
  },
  []
);
return(){
...
  <form onSubmit={search}>
  <input type="text" ref={searchInputRef} className="flex-grow w-full focus:outline-none" />
  <button type="submit" className="hidden">
    Search
  </button>
</form>;
...
```

### Next에서 URL query값 얻기

Next에서 제공하는 `useRouter` hook을 사용하여 query값을 얻을 수 있다.

```ts
import { useRouter } from 'next/router';

const router = useRouter();
const query = router.query.쿼리의 키;

```

### Sticky 헤더 구현

검색창이 있는 헤더는 항상 최상단에 고정되어야 한다. 이것을 tailwindcss로 구현하려면
`sticky`와 `top-0` 속성을 사용해야 한다. 그런데 이 속성만 사용하면 최상단에 붙어있긴 하지만 투명한 배경이 되는 것을 볼 수 있다. 이것을 해결하려면 `bg-white`와 같은 배경 색상을 넣어주면 된다.

```ts
<header className="sticky top-0 bg-white"></header>
```

### 일정 길이 문장을 잘라주는 css

...와 같이 일정 길이 이상을 잘라주는 tailwindcss의 속성으로 `truncate`가 있다. 이 속성으로는 원하는 길이만큼 자를 수가 없어서 tailwind에서 제공하는 plugin을 사용하면 된다. [참고 링크](https://blog.tailwindcss.com/multi-line-truncation-with-tailwindcss-line-clamp)

### 그룹화

`group` 속성을 이용하여 선택하지 않은 DOM을 건들일 수 있다.

```ts
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
```

### Component에 class 적용하기

component는 `DOM`이 아니라 생성하는 함수이므로 class 속성을 갖고있지 않다. 그래서 class를 사용하기 위해선 props로 class 속성을 받아서 생성하려는 dom에 전달을 해줘야 한다.

```ts
function Avatar({ url, className }: IAvatar) {
  return (
    <div
      className={`relative w-10 h-10 transition transform cursor-pointer hover:scale-110 ${className}`}
    >
      <Image className="rounded-full" loading="lazy" src={url} alt="profile pic" layout="fill" />
    </div>
  );
}
```

### tailwindcss를 Image 컴포넌트에 적용하기

위의 코드에서 Image 태그를 div 태그로 wrap한 것을 볼 수 있다. Nextjs에서 제공하는 Image 컴포넌트는 `width`, `height` 속성을 넣거나 혹은 `layout='fill'`을 반드시 사용해야 에러가 나지 않는다. width, height 속성을 사용할 경우 이미지의 크기를 tailwindcss로 변경할 수 없다. 그래서 layout='fill'을 사용하고 div 태그에 이미지와 관련된 css를 사용하면 해결된다.
