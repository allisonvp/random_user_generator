import { useEffect, useState } from "react";
import { BsArrowUpCircleFill } from "react-icons/bs";

const BackToTop = () => {
  const [backToTopButton, setBackToTopButton] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className="sticky bottom-5 opacity-75 text-brown-400 ml-auto animate-fade animate-once animate-ease-out"
      onClick={scrollUp}
    >
      {backToTopButton && <BsArrowUpCircleFill size={40} />}
    </button>
  );
};

export default BackToTop;
