import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import UserGenerator from "@/modules/User/UserGenerator";

const HomePage = () => {
  return (
    <>
      <ToastContainer />
      <div className="h-screen p-10 flex flex-col items-center gap-10 font-primary">
        <h1 className="text-4xl text-center font-bold">
          Random User Generator
        </h1>
        <UserGenerator />
      </div>
    </>
  );
};

export default HomePage;
