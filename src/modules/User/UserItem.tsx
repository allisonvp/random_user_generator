import Image from "next/image";
import { MdLocationPin } from "react-icons/md";
import { BsGenderFemale, BsGenderMale } from "react-icons/bs";
import Flag from "@/components/Flags/Flag";
import { colors } from "@/utils/colors";

interface Props {
  gender: string;
  name: {
    first: string;
    last: string;
  };
  email: number;
  dob: {
    age: number;
  };
  picture: {
    large: string;
  };
  location: {
    country: string;
  };
}

const UserItem = ({ gender, name, email, dob, picture, location }: Props) => {
  const color = colors[Math.floor(Math.random() * colors.length)];

  return (
    <div className="w-full shadow-lg rounded-lg text-sm mobile:flex mobile:flex-row">
      <div
        className={`w-full pt-7 pb-3 flex flex-col items-center rounded-t-lg relative ${
          color ? "bg-amber-50" : ""
        }`}
      >
        <div className="flex items-center gap-1.5 shadow-md absolute top-0 right-0 px-3 py-1 rounded-bl-lg rounded-tr-lg bg-amber-50">
          <MdLocationPin className="text-yellow-500" size={18} />
          <p>{location.country}</p>
          <Flag country={location.country} />
        </div>
        <div className="relative mobile:w-16 mobile:h-16">
          <Image
            src={picture.large}
            width={100}
            height={100}
            className="rounded-full translate-y-4 mobile:translate-y-0"
            alt="Picture of the user"
          />
        </div>
      </div>
      <div className="m-6 break-words flex flex-col ">
        <p className="font-semibold">{`${name.first} ${name.last}`}</p>
        <p className=" text-gray-500 mobile:hidden">{email}</p>
        <p>{dob.age} years</p>
        <div className="flex items-center gap-1.5 mobile:hidden">
          {gender === "female" ? <BsGenderFemale /> : <BsGenderMale />}
          <p className="capitalize">{gender}</p>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
