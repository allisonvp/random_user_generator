const Loader = () => {
  const arr = Array.from({ length: 10 }, (_, i) => i + 1);
  return (
    <div className="py-3 grid grid-cols-cards justify-center justify-items-center gap-6 my-10 w-11/12">
      {arr.map((i: number) => (
        <div
          key={i}
          className="w-full py-10 p-7 shadow-lg rounded-lg mobile:flex mobile:flex-row animate-fade animate-once animate-duration-900 animate-ease-in-out bg-light-purple"
        >
          <div className="animate-pulse mb-7 flex items-center justify-between">
            <div className="rounded-full bg-slate-300 h-10 w-10"></div>
            <div className="h-2 w-12 bg-slate-300 rounded col-span-1"></div>
          </div>
          <div className="animate-pulse flex flex-col gap-2">
            <div className="h-4 w-3/5 bg-slate-300 rounded col-span-1"></div>
            <div className="h-1.5 w-1/2 bg-slate-300 rounded col-span-1"></div>
          </div>
          <div className="animate-pulse my-3 flex gap-2">
            <div className="flex w-12 h-3 text-[11px] font-semibold mobile:hidden items-center gap-1 shadow-md px-2 py-0.5 rounded-full bg-light-violet text-violet "></div>
            <div className="flex w-12 h-3 text-[11px] font-semibold mobile:hidden items-center gap-1 shadow-md px-2 py-0.5 rounded-full bg-light-green text-green">
              <p className="capitalize"></p>
            </div>
          </div>
          <div className="animate-pulse flex flex-col gap-2 mt-8 break-all">
            <div className="flex w-4/5 h-2 bg-slate-300 rounded col-span-1 gap-2 items-center text-xs font-semibold text-gray-500 mobile:hidden"></div>
            <div className="flex w-4/5 h-2 bg-slate-300 rounded col-span-1 gap-2 items-center text-xs font-semibold text-gray-500 mobile:hidden"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Loader;
