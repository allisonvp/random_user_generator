import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import UserGenerator from "@/modules/User/UserGenerator";
import Navbar from "@/components/Navbar";
import BackToTop from "@/components/BackToTop";

const HomePage = () => {
  return (
    <>
      <ToastContainer />
      <div className="h-full py-8 grid grid-rows-layout justify-items-center gap-10 font-primary mobile:p-4 mobile:py-6 desktop:w-11/12 desktop:m-auto tablet:w-10/12 tablet:m-auto">
        <Navbar />
        <UserGenerator />
        <BackToTop />
      </div>
    </>
  );
};

export default HomePage;
