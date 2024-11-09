import React, { FC, MouseEventHandler } from 'react';

type ISearch = {
  onClick: MouseEventHandler<HTMLDivElement>;
  placeholder: string;
}

const Search:FC<ISearch> = ({onClick, placeholder}) => {
  return (
    <div className="flex items-center border-[1px] rounded-full px-5 py-3 gap-3 bg-[#fafafa]" onClick={onClick}>
      <img src="/search.svg" alt="" className="" />
      <input type="text" className="w-[260px] outline-none bg-inherit text-[13px]" placeholder={placeholder} />
    </div>
  )
}

export default Search;
