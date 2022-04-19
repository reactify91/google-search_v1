import { useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import Avatar from "../components/Avatar";
import { MicrophoneIcon, ViewGridIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();
  const inputRefValue = useRef();
  const search = (e) => {
    e.preventDefault();
    const term = inputRefValue.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
  };
  return (
    <div className="flex flex-col justify-between  h-screen">
      <Head>
        <title>Google v2</title>
      </Head>

      <header className="flex w-full p-5 justify-between">
        <div className="flex items-center space-x-4 text-sm text-gray-700">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>
        <div className="flex items-center space-x-4 text-sm text-gray-700">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          <ViewGridIcon className="w-10 h-10 p-2 cursor-pointer rounded-full hover:bg-gray-100" />
          <Avatar />
        </div>
      </header>
      <main>
        <form className="flex flex-col items-center  px-5 py-2">
          <Image
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            width={300}
            height={100}
            alt="google-image"
          />
          <div className="flex mt-5 w-full hover:shadow-lg focus-within:shadow-lg max-w-md sm:max-w-xl lg:max-w-2xl border border-gray-200 px-5 py-3 rounded-full ">
            <SearchIcon className="h-5 mr-3 text-gray-500" />
            <input
              ref={inputRefValue}
              type="text"
              className="focus:outline-none flex-grow "
            />
            <MicrophoneIcon className="h-5 ml-3 text-gray-500" />
          </div>
          <div className="my-8 flex flex-col sm:flex-row w-1/2 gap-2 justify-center items-center sm:gap-4 text-gray-700">
            <button onClick={search} className="btn">
              Google Search
            </button>
            <button onClick={search} className="btn">
              I&rsquo;m Feeling Lucky
            </button>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
}
