import { useState } from "react";
import UserItem from "./UserItem";
import { User } from "@/interfaces/User";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Home from "@/components/Home";

const minEntries = 32;

interface Props {
  users: Array<User>;
  info: {
    results: number;
  };
}

const UsersList = ({ users, info }: Props) => {
  const entries = info?.results;
  const [selectedId, setSelectedId] = useState<string | null>(null);
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

  const handleOpen = (id: string) => {
    setSelectedId((s) => (s !== id ? id : null));
  };

  return (
    <>
      {users && users.length !== 0 ? (
        <section className="rounded-md flex flex-col w-11/12">
          {entries > minEntries && (
            <p className="text-sm self-end text-brown-500 mb-10">
              Showing
              <span className="font-semibold text-gray-700"> {prev}</span> to
              <span className="font-semibold text-gray-700"> {next}</span> of
              <span className="font-semibold text-gray-700"> {entries} </span>
              Entries
            </p>
          )}
          <div className="grid grid-cols-cards justify-center justify-items-center gap-6">
            {users.slice(prev - 1, next).map((user) => (
              <UserItem
                key={user.login.uuid}
                {...user}
                handleOpen={handleOpen}
                selectedId={selectedId}
              />
            ))}
          </div>
          {entries > minEntries && (
            <div className="self-center flex mt-10">
              <button
                className="flex items-center px-4 py-2 font-medium text-white bg-brown-500 opacity-80 hover:bg-brown-400 rounded-l gap-2"
                onClick={handlePrev}
              >
                <BsArrowLeft size={20} />
                Prev
              </button>
              <button
                className="flex items-center px-4 py-2 font-medium text-white bg-brown-500 opacity-80 hover:bg-brown-400 rounded-r gap-2 ml-0.5"
                onClick={handleNext}
              >
                Next
                <BsArrowRight size={20} />
              </button>
            </div>
          )}
        </section>
      ) : (
        <Home />
      )}
    </>
  );
};

export default UsersList;
