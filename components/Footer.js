import { GlobeIcon } from "@heroicons/react/solid";
const Footer = () => {
  return (
    <footer className="grid w-full divide-y-[1px] divide-gray-300 text-sm text-gray-500">
      <div className="text-left p-3">
        <p>Deutchland</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 items-center lg:grid-flow-row-dense">
        <div className="flex gap-x-2  justify-center items-center  md:col-span-2 lg:col-span-1 lg:col-start-2">
          <GlobeIcon className="h-6 text-green-600" />
          CO₂-neutral seit 2007
        </div>
        <div className="flex justify-center space-x-8 whitespace-nowrap text-xs md:justify-self-start lg:col-start-1">
          <div className="link">Advertising</div>
          <div className="link">Business</div>
          <div className="link">How Search Works?</div>
        </div>
        <div className="flex justify-center space-x-8 whitespace-nowrap text-xs md:justify-self-end lg:col-start-3">
          <div className="link">Privacy</div>
          <div className="link">Terms</div>
          <div className="link">Settings</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
