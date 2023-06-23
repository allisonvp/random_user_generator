import { useState } from "react";
import UserItem from "./UserItem";
import { User } from "@/interfaces/User";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
const minEntries = 32;

interface Props {
  users: Array<User>;
  info: {
    results: number;
  };
}

const UsersList = ({ users, info }: Props) => {
  const entries = info?.results;

  const [prev, setPrev] = useState<number>(1);
  const [next, setNext] = useState<number>(
    entries >= minEntries ? minEntries : entries
  );

  const handlePrev = () => {
    if (prev > 1) setPrev(prev - minEntries);
    if (entries >= minEntries)
      setNext(next - minEntries >= minEntries ? next - minEntries : minEntries);
  };

  const handleNext = () => {
    if (prev + minEntries <= entries) setPrev(prev + minEntries);
    setNext(next + minEntries <= entries ? next + minEntries : entries);
  };

  return (
    <>
      {users && users.length !== 0 && (
        <section className="py-3 rounded-md bg-white flex flex-col w-11/12">
          {entries > minEntries && (
            <p className="text-sm self-end text-gray-400">
              Showing
              <span className="font-semibold text-gray-900"> {prev}</span> to
              <span className="font-semibold text-gray-900"> {next}</span> of
              <span className="font-semibold text-gray-900"> {entries} </span>
              Entries
            </p>
          )}
          <div className="grid grid-cols-cards justify-items-center gap-6 my-10">
            {users.slice(prev - 1, next).map((user) => (
              <UserItem key={user.login.uuid} {...user} />
            ))}
          </div>
          {entries > minEntries && (
            <div className="self-center flex">
              <button
                className="flex items-center px-4 py-2 font-medium text-white bg-yellow-500 rounded-l hover:bg-yellow-900 gap-2"
                onClick={handlePrev}
              >
                <BsArrowLeft size={20} />
                Prev
              </button>
              <button
                className="px-4 py-2 font-medium flex items-center border-0 border-l text-white bg-yellow-500 border-white rounded-r hover:bg-yellow-900 gap-2"
                onClick={handleNext}
              >
                Next
                <BsArrowRight size={20} />
              </button>
            </div>
          )}
        </section>
      )}
    </>
  );
};

export default UsersList;