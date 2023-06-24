import { BiWorld } from "react-icons/bi";
const Navbar = () => {
  return (
    <div className="text-xl font-bold justify-self-start mobile:px-2 px-8 flex items-center gap-3 text-brown-500 mobile:text-base">
      <BiWorld size={35} />
      <h1 className="">Random User Generator</h1>
    </div>
  );
};

export default Navbar;
