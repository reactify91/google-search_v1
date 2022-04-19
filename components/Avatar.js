import Image from "next/image";
const Avatar = () => {
  return (
    <div className="transition-all duration-150 ease-in-out hover:scale-105">
      <Image
        src="/assets/profile.jpeg"
        height={50}
        width={50}
        className="rounded-full cursor-pointer  "
        alt="profile-image"
      />
    </div>
  );
};

export default Avatar;
