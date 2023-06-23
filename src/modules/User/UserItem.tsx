import clsx from "clsx";
import { MdLocationPin } from "react-icons/md";
import { BsGenderFemale, BsGenderMale } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import Image from "next/image";
import Flag from "@/components/Flags/Flag";

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
    state: string;
    city: string;
  };
  login: {
    username: string;
  };
}
const colors = [
  "orange-400",
  "yellow-400",
  "green-400",
  "emerald-400",
  "sky-400",
  "purple-400",
];

const UserItem = ({
  gender,
  name,
  email,
  dob,
  picture,
  location,
  login,
}: Props) => {
  const color = colors[Math.floor(Math.random() * colors.length)];
  const generatePropColor = (type: "border" | "from" | "bg") => {
    return `${type}-${color}`;
  };

  return (
    <div className="w-full p-7 shadow-lg rounded-lg mobile:flex mobile:flex-row bg-cards animate-fade-up animate-once animate-duration-1000 animate-ease-linear">
      <div className="mb-5 flex items-center justify-between">
        <Image
          src={picture.large}
          width={64}
          height={64}
          className={clsx([
            "rounded-full shadow-md",
            generatePropColor("border"),
          ])}
          alt="Picture of the user"
        />
        <p className="text-sm text-light-gray mobile:hidden">{dob.age} years</p>
      </div>
      <div>
        <p className="font-semibold text-lg">
          {name.first} {name.last}
        </p>
        <p className="text-xs">@{login.username}</p>
      </div>
      <div className="my-3 flex gap-2">
        <div className="flex w-fit text-[11px] font-semibold mobile:hidden items-center gap-1 shadow-md px-2 py-0.5 rounded-full bg-light-violet text-violet ">
          <Flag country={location.country} />
          <p>{location.country}</p>
        </div>
        <div className="flex w-fit text-[11px] font-semibold mobile:hidden items-center gap-1 shadow-md px-2 py-0.5 rounded-full bg-light-green text-green">
          {gender === "female" ? (
            <BsGenderFemale size={13} />
          ) : (
            <BsGenderMale size={13} />
          )}
          <p className="capitalize">{gender}</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-6 break-all">
        <div className="flex gap-2 items-center text-xs font-semibold text-gray-500 mobile:hidden">
          <MdLocationPin size={14} />
          {location.state}, {location.city}
        </div>
        <div className="flex gap-2 items-center text-xs font-semibold text-gray-500 mobile:hidden">
          <HiOutlineMail size={14} />
          {email}
        </div>
      </div>
    </div>
  );
};

export default UserItem;
