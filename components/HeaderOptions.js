import { useState } from "react";
import HeaderOption from "./HeaderOption";
import {
  DotsVerticalIcon,
  MapIcon,
  NewspaperIcon,
  PhotographIcon,
  PlayIcon,
  SearchIcon,
} from "@heroicons/react/outline";
const HeaderOptions = () => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <div
      onClick={() => setIsSelected(false)}
      className="flex w-full justify-evenly text-sm lg:text-base items-center lg:justify-start lg:space-x-48 px-4  py-2 lg:pl-32 border-b-[1px]"
    >
      <div className="flex space-x-6 text-gray-600">
        <HeaderOption Icon={SearchIcon} title="All" />
        <HeaderOption Icon={PhotographIcon} title="Images" />
        <HeaderOption Icon={PlayIcon} title="Videos" />
        <HeaderOption Icon={NewspaperIcon} title="News" />
        <HeaderOption Icon={MapIcon} title="Maps" />
        <HeaderOption Icon={DotsVerticalIcon} title="More" />
      </div>
      <div className="flex space-x-4 text-gray-600 pb-3">
        <p className="link">Setting</p>
        <p className="link">Tools</p>
      </div>
    </div>
  );
};

export default HeaderOptions;
