import { BiWorld } from "react-icons/bi";
const Navbar = () => {
  return (
    <div className="text-md font-bold justify-self-start mobile:p-2 desktop:px-8 flex items-center gap-3">
      <BiWorld />
      <h1 className="">Random User Generator</h1>
    </div>
  );
};

export default Navbar;
