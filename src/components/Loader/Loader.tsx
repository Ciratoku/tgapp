function Loader({ percent }: any) {
  const loadWidth = (percent * 122) / 100; // mb > 100
  return (
    <div className="flex flex-row gap-3">
      <div className="h-5 w-[122px] bg-slate-600 rounded-[4px]">
        <div
          className="h-5 rounded-[4px]"
          style={{
            width: `${loadWidth}px`,
            backgroundColor: "rgba(62, 207, 148, 1)",
          }}
        ></div>
      </div>
      <p>{percent}%</p>
    </div>
  );
}

export default Loader;
