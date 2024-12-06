function Card({ name, id, i }: any) {
  return (
    <div className="h-[54px] w-full bg-slate-600 rounded-lg py-2 pl-2 pr-4 flex flex- items-center">
      <div className="w-full flex flex-row gap-3 items-center">
        <div className="bg-gray-100 w-[38px] h-[38px] flex items-center justify-center rounded-[6px]">
          <h1 className="text-base font-bold text-gray-800">
            {name.slice(0, 1)}
          </h1>
        </div>
        <div className="flex flex-col">
          <p className="text-[15px]">{name}</p>
          <p className="text-[13px] opacity-60">{id}</p>
        </div>
      </div>
      <div className="text-xs">{i}</div>
    </div>
  );
}

export default Card;
