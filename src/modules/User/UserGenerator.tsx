import React from "react";
import Loader from "@/components/Loader";
import useGetFetch from "@/hooks/useGetFetch";
import UsersList from "./UsersList";
import UserForm from "./UserForm";

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
      <UserForm handleSubmit={handleSubmit} />
      {isLoading ? (
        <Loader />
      ) : (
        <UsersList users={data?.results} info={data?.info} />
      )}
    </>
  );
};
export default UserGenerator;
