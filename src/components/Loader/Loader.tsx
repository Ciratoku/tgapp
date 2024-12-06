function Loader({ percent }: any) {
  const loadWidth = (percent * 122) / 100; // mb > 100
  return (
    <div className="flex flex-row gap-3">
      <div className="h-5 w-[122px] bg-slate-600 rounded-[4px]">
        <div
          className="h-5 bg-green-500 rounded-[4px]"
          style={{ width: `${loadWidth}px` }}
        ></div>
      </div>
      <p>{percent}%</p>
    </div>
  );
}

export default Loader;
