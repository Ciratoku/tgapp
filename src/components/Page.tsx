import { useEffect, useState } from "react";
import { retrieveLaunchParams } from "@telegram-apps/sdk-react";

import { useParams } from "react-router-dom";
import Wrapper from "./Wrapper/Wrapper";
import Statistics from "./StatisticsBlock/StatisticsBlock";
import Leaderboard from "./Leaderboard/Leaderboard";
import NavBar from "./NavBar/NavBar";

export function Page() {
  const { id } = useParams();
  const { initData } = retrieveLaunchParams();
  const [data, setData] = useState({
    achievement: "",
    links: [],
    channels: [],
    channelsInfo: [],
    services: [],
    contacts: [],
  });
  const [isLoaded, setisLoaded] = useState(false);
  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API || "";
    fetch(`${apiUrl}/user/${id || initData?.startParam || initData?.user?.id}`)
      .then((response) => response.json())
      .then((response) => {
        setData(response);
        setisLoaded(true);
        console.log(data);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    isLoaded && (
      <Wrapper>
        <Statistics />
        <Leaderboard />
        <NavBar />
      </Wrapper>
    )
  );
}
