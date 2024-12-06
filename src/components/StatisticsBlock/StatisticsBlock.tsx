import Statistics from "../Statistics/Statistics";
function StatisticsBlock() {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="ml-3">Blockchain statistics</h1>
      <Statistics />
    </div>
  );
}

export default StatisticsBlock;
