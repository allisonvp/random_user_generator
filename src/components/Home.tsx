import Image from "next/image";

const Home = () => {
  return (
    <div className="w-full mobile:text-lg laptop:text-4xl tablet:text-3xl text-5xl text-center flex flex-col mobile:items-center tablet:items-center">
      <div className="flex flex-col items-center justify-center gap-8 mobile:gap-4 h-1/2">
        <h1
          className="text-brown-500 animate-fade-right animate-once animate-duration-[3000ms] animate-delay-200 animate-ease-linear
"
        >
          Expand your network
        </h1>
        <h1 className="animate-fade-left animate-once animate-duration-[3000ms] animate-delay-200 animate-ease-linear">
          connect with{" "}
          <span className="font-extrabold text-5xl mobile:text-2xl tablet:text-4xl">
            +2000
          </span>{" "}
          people
        </h1>
        <h1
          className="text-brown-500 animate-fade-right animate-once animate-duration-[3000ms] animate-delay-200 animate-ease-linear
"
        >
          get more opportunities
        </h1>
      </div>
      <div className="flex justify-between h-1/2">
        <div className="animate-fade-up animate-once animate-duration-[800ms] animate-ease-in-out mt-auto h-full">
          <Image
            src="/Images/people-2.svg"
            width={0}
            height={0}
            sizes="100vw"
            alt="people talking"
            style={{ width: "100%", height: "100%" }}
          ></Image>
        </div>
        <div className="animate-fade-up animate-once animate-duration-[800ms] animate-ease-in-out tablet:hidden mobile:hidden mt-auto h-full">
          <Image
            src="/Images/people.svg"
            width={0}
            height={0}
            sizes="100vw"
            alt="people talking"
            style={{ width: "100%", height: "100%" }}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Home;
