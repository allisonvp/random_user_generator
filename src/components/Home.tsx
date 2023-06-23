import Image from "next/image";

const Home = () => {
  return (
    <div className="w-full desktop:text-6xl mobile:text-2xl text-5xl text-center">
      <div className="flex flex-col gap-8">
        <h1
          className="text-brown-500 animate-fade-right animate-once animate-duration-[3000ms] animate-delay-200 animate-ease-linear
"
        >
          Expand your network
        </h1>
        <h1 className="animate-fade-left animate-once animate-duration-[3000ms] animate-delay-200 animate-ease-linear">
          connect with{" "}
          <span className="font-extrabold desktop:text-7xl mobile:text-2xl text-5xl">
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
      <div className="absolute bottom-0 right-0 opacity-50 animate-fade-up animate-once animate-duration-[800ms] animate-ease-in-out mobile:hidden tablet:w-[320px]">
        <Image
          src="/Images/people.svg"
          width={500}
          height={500}
          alt="people talking"
        ></Image>
      </div>
      <div className="absolute bottom-0 left-0 opacity-50 animate-fade-up animate-once animate-duration-[800ms] animate-ease-in-out mobile:w-[20px] tablet:w-[320px]">
        <Image
          src="/Images/people-2.svg"
          width={500}
          height={500}
          alt="people talking"
        ></Image>
      </div>
    </div>
  );
};

export default Home;
