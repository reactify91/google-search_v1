import Image from "next/image";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";
const SearchHeader = () => {
  const router = useRouter();
  const searchInputRef = useRef();
  const [inputVal, setInputVal] = useState("");
  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
    searchInputRef.current.value = "";
  };
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex flex-col gap-y-4 sm:flex-row  sm:gap-y-0 w-full p-6 items-center justify-between">
        <Image
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
          width={121}
          height={40}
          className="cursor-pointer"
          alt="search-image"
          onClick={() => router.push("/")}
        />

        <form
          onSubmit={search}
          className="flex flex-grow border min-w-[300px] border-gray-200 rounded-full shadow-lg hover:shadow-xl max-w-3xl px-6 py-3 mx-10 items-center"
        >
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow w-full focus:outline-none"
            onChange={(e) => setInputVal(e.target.value)}
          />
          {inputVal.length > 0 && (
            <XIcon
              className="h-6 sm:mr-3 cursor-pointer text-gray-500 hover:scale-105"
              onClick={() => (searchInputRef.current.value = "")}
            />
          )}

          <MicrophoneIcon className="h-6 mr-3 cursor-pointer text-blue-500 hover:scale-105 hidden md:inline-flex border-l-2 pl-4 border-gray-500" />
          <SearchIcon className="h-6 mr-3 cursor-pointer text-blue-500 hover:scale-105 hidden md:inline-flex  border-gray-500" />
          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </form>
        <div className="absolute top-4 right-4 sm:static ">
          <Avatar />
        </div>
      </div>
      <HeaderOptions />
    </header>
  );
};

export default SearchHeader;
