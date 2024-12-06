import Card from "../Card/Card";

function Leaderboard() {
  const leaders = [
    { name: "Kate", id: "1" },
    { name: "Mate", id: "2" },
    { name: "Hate", id: "3" },
    { name: "Gate", id: "4" },
    { name: "Date", id: "5" },
    { name: "Mate", id: "2" },
    { name: "Hate", id: "3" },
    { name: "Gate", id: "4" },
    { name: "Date", id: "5" },
  ];
  return (
    <div className="flex flex-col gap-5 pb-[92px]">
      <div className="flex flex-col gap-3">
        <h1 className="ml-3">Me</h1>
        <Card name="Kate" id="123" i={1} />
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="ml-3">Top 100</h1>
        <div className="flex flex-col gap-2">
          {leaders.map((leader, i) => (
            <Card key={i} name={leader.name} id={leader.id} i={i + 1} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
