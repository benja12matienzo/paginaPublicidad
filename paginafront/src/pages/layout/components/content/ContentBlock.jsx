import { useState, useEffect, useRef } from "react";

export default function ContentBlock({ imagen, texto }) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      setScrollDirection(window.scrollY > lastScrollY ? "down" : "up");
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`flex items-center p-4 mb-6 bg-neutral-800 rounded-xl shadow-md transition-transform duration-700 ease-in-out`}
      style={{
        transform: visible
          ? "translateX(0)"
          : scrollDirection === "down"
          ? "translateX(-100%)"
          : "translateX(100%)",
        opacity: visible ? 1 : 0,
      }}
    >
      <img
        src={imagen}
        alt={texto}
        className="w-32 h-32 object-cover rounded-lg mr-4 flex-shrink-0"
      />
      <p className="text-gray-300 text-lg">{texto}</p>
    </div>
  );
}
