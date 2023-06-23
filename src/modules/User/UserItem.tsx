import { MdLocationPin } from "react-icons/md";
import {
  BsGenderFemale,
  BsGenderMale,
  BsArrowDownCircleFill,
} from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { GrFavorite } from "react-icons/gr";
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
    uuid: string;
    username: string;
  };
  handleOpen: (id: string) => void;
  selectedId: string | null;
}

const UserItem = ({
  gender,
  name,
  email,
  dob,
  picture,
  location,
  login,
  handleOpen,
  selectedId,
}: Props) => {
  return (
    <>
      <div className="w-full p-7 shadow-lg rounded-lg bg-light-purple animate-fade-up animate-once animate-duration-1000 animate-ease-linear mobile:p-3">
        <div className="mobile:grid mobile:grid-cols-list-mobile mobile:gap-3 flex flex-col">
          <div className="flex items-center justify-between">
            <Image
              src={picture.large}
              width={64}
              height={64}
              className="rounded-full shadow-md"
              alt="Picture of the user"
            />
            <div className="flex items-center gap-3 mobile:hidden">
              <p className="text-sm text-light-gray mobile:hidden">
                {dob.age} years
              </p>
              <GrFavorite />
            </div>
          </div>
          <div className="mobile:flex mobile:justify-between mobile:flex-col">
            <div className="mt-5 break-all mobile:mt-0">
              <p className="font-semibold text-lg mobile:text-xs">
                {name.first} {name.last}
              </p>
              <p className="text-xs">@{login.username}</p>
              <p className="hidden mobile:block text-[11px] text-light-gray">
                {dob.age} years
              </p>
            </div>
            <div className="my-3 flex gap-2 mobile:my-2">
              <div className="flex w-fit text-[11px] font-semibold items-center gap-1 shadow-md px-2 py-0.5 rounded-full bg-light-blue text-blue">
                <Flag country={location.country} />
                <p className="mobile:hidden">{location.country}</p>
              </div>
              <div
                className={`flex w-fit text-[11px] font-semibold items-center gap-1 shadow-md px-2 py-0.5 rounded-full ${
                  gender === "male"
                    ? "bg-light-green text-green"
                    : "bg-light-violet text-violet"
                }`}
              >
                {gender === "female" ? (
                  <BsGenderFemale size={13} />
                ) : (
                  <BsGenderMale size={13} />
                )}
                <p className="capitalize mobile:hidden">{gender}</p>
              </div>
            </div>
          </div>
          <div className="hidden mobile:h-full mobile:w-auto mobile:flex mobile:flex-col mobile:gap-8 mobile:items-center mobile:justify-center ">
            <GrFavorite />
            <button
              className="text-light-gray"
              onClick={() => handleOpen(login.uuid)}
            >
              <BsArrowDownCircleFill size={24} />
            </button>
          </div>
        </div>
        <div
          className={`flex flex-col gap-2 mt-4 break-all ${
            login.uuid === selectedId ? "" : "mobile:hidden"
          }`}
        >
          <div className="flex gap-2 items-center text-xs font-semibold text-gray-500">
            <MdLocationPin size={14} />
            {location.state}, {location.city}
          </div>
          <div className="flex gap-2 items-center text-xs font-semibold text-gray-500">
            <HiOutlineMail size={14} />
            {email}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserItem;
