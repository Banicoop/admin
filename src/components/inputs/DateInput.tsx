

const DateInput = () => {

  return (
    <div className="flex flex-col w-full">
        <label htmlFor="date" id='date'>Start Date</label>
        <div className="flex flex-col rounded-2xl border-[1px] px-2 py-3 w-full gap-1 items-center justify-between cursor-pointer">
        <input id='date' type="date" className="w-full h-full outline-none text-bgPurple cursor-pointer" />
        {/* <img src="/calendar1.svg" alt="" className="" /> */}
        </div>
    </div>
  )
}

export default DateInput;

date 