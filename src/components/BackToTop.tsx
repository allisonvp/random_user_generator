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
      className="fixed opacity-75 bottom-5 right-5 text-brown-400 animate-fade animate-once animate-ease-out"
      onClick={scrollUp}
    >
      {backToTopButton && <BsArrowUpCircleFill size={40} />}
    </button>
  );
};

export default BackToTop;
