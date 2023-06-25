import React from "react";
import useGetFetch from "@/hooks/useGetFetch";
import UsersList from "./UsersList";
import UserForm from "./UserForm";
import UserFilters from "./UserFilters";
import Loader from "@/components/Loader";

const UserGenerator = () => {
  const { data, isLoading, fetchData } = useGetFetch();

  const handleSubmit = (number: string | number, gender: string) => {
    if (!number || !gender) return;
    fetchData(
      `https://randomuser.me/api/?results=${number}&gender=${gender}&inc=login,gender,name,email,dob,picture,nat,location`
    );
  };

  return (
    <>
      <div>
        <UserForm handleSubmit={handleSubmit} />
        <UserFilters className={data ? "" : "hidden"} />
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <UsersList users={data?.results} info={data?.info} />
      )}
    </>
  );
};
export default UserGenerator;
