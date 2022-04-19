const HeaderOption = ({ Icon, title, selected }) => {
  return (
    <div
      className={`flex items-center cursor-pointer  space-x-1 border-b-4 border-transparent hover:text-blue-500 hover:border-blue-500 pb-2 ${
        selected && "text-blue-500 border-b-blue-500"
      }`}
    >
      <Icon className="h-6" />
      <p className="hidden sm:inline-flex">{title}</p>
    </div>
  );
};

export default HeaderOption;
