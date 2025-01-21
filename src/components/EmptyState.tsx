import React from 'react'

const EmptyState = ({text}: {text: string}) => {
  return (
    <div className="flex flex-col items-center justify-center h-[240px]">
        <img src="/loan/no-referal.png" alt="" className="h-[48px] w-[48px]" />
        <span className="text-[#979797] text-[16px] font-[400]">{text}</span>
    </div>
  )
}

export default EmptyState;
