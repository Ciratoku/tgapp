import Loader from "../Loader/Loader";

function Statistics() {
  const data = {
    totalMined: 25,
    generalIssuing: 123,
    blockCreated: 321,
    numberOfHolders: 523,
    hasStarted: 624,
  };
  return (
    <div className="border-solid border border-slate-500 rounded-lg p-3 flex-col gap-2">
      <div className="flex gap-3 flex-row">
        <div className="w-1/2">Total mined</div>
        <Loader percent={data.totalMined} />
      </div>
      <div className="flex gap-3 flex-row">
        <div className="w-1/2">General issuing</div>
        <div>{data.generalIssuing}</div>
      </div>
      <div className="flex gap-3 flex-row">
        <div className="w-1/2">Blocks created</div>
        <div>{data.blockCreated}</div>
      </div>
      <div className="flex gap-3 flex-row">
        <div className="w-1/2">Total number of holders</div>
        <div>{data.numberOfHolders}</div>
      </div>
      <div className="flex gap-3 flex-row">
        <div className="w-1/2">Mining has started</div>
        <div>{data.hasStarted}</div>
      </div>
    </div>
  );
}

export default Statistics;
