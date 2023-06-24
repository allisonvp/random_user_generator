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
      <div className="bg-landing bg-cover min-h-screen">
        <div className="py-8 px-6 min-h-screen h-full grid grid-rows-layout justify-items-center gap-10 font-primary mobile:px-4 mobile:py-6 desktop:m-auto relative">
          <Navbar />
          <UserGenerator />
          <BackToTop />
        </div>
      </div>
    </>
  );
};

export default HomePage;
