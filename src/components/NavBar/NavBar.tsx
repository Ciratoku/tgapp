import Mining from "../../../assets/Mining.svg?react";
import Send from "../../../assets/Send.svg?react";
import Menu from "../../../assets/Menu.svg?react";

function NavBar() {
  return (
    <nav className="fixed bottom-0 left-0 z-50 w-full bg-slate-950">
      <ul className="h-[84px] flex flex-row justify-between">
        <li className="flex flex-col w-full mt-2 items-center">
          <Mining />
          <p className="text-center text-[11px] text-gray-500">Mining</p>
        </li>
        <li className="flex flex-col w-full mt-2 items-center">
          <Send className="mb-[8px]" />

          {/* <div className="relative"> */}
          {/* <Send className="absolute z-0 top-[5px] right-1 bg-red-400" /> */}
          <p className="text-center text-[11px] text-gray-500">Boost</p>
        </li>
        <li className="flex flex-col w-full mt-2 items-center">
          <Menu />
          <p className="text-center text-[11px] text-gray-500">Token</p>
        </li>
        <li className="flex flex-col w-full mt-2 items-center">
          <Menu />
          <p className="text-center text-[11px] text-gray-500">Token</p>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
