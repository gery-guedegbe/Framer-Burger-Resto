import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import burger_img from "../assets/images/burgers_2.png";
import side_img from "../assets/images/side.png";
import dessert_img from "../assets/images/dessert.png";
import drink_img from "../assets/images/drink.png";
import {
  burgurData,
  sideData,
  dessertData,
  drinkData,
} from "../constants/index.js";
import MenuCard from "./MenuCard.jsx";

const MenuSection = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Définir un état pour la largeur d'écran
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Mettre à jour la largeur d'écran lors du redimensionnement
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Appliquer des transformations différentes selon la taille de l'écran
  const yTransformCard = useTransform(
    scrollYProgress,
    [0, 1],
    screenWidth < 768
      ? ["0%", "-0%"]
      : screenWidth < 1024
        ? ["0%", "-60%"]
        : ["15%", "-15%"],
  );

  const yTransformImg = useTransform(
    scrollYProgress,
    [0, 1],
    screenWidth < 768
      ? ["-2%", "50%"]
      : screenWidth < 1024
        ? ["-8%", "8%"]
        : ["-10%", "10%"],
  );

  return (
    <section
      ref={sectionRef}
      className="flex min-h-screen flex-col items-start gap-8 xl:gap-32"
    >
      <h1 className="mb-4 text-3xl font-extrabold text-black md:mt-6 xl:mb-6 xl:text-5xl">
        Our Menu
      </h1>

      {[
        { img: burger_img, title: "Burgers", data: burgurData },
        { img: side_img, title: "Sides", data: sideData },
        { img: dessert_img, title: "Desserts", data: dessertData },
        { img: drink_img, title: "Drinks", data: drinkData },
      ].map((item, index) => (
        <div
          key={index}
          className={`relative flex w-full flex-col items-start justify-center lg:flex-row ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
        >
          <motion.img
            src={item.img}
            alt={`${item.title} Image`}
            className="relative z-10 flex h-auto w-full max-w-md items-center justify-center rounded-3xl object-cover"
            style={{ y: yTransformImg }}
            transition={{ ease: [0.25, 0.1, 0.25, 1], duration: 0.6 }}
          />

          <motion.div
            className={`z-20 ml-0 mr-0 flex w-full flex-col items-start gap-6 rounded-3xl bg-customYellow px-10 py-6 lg:w-2/3 ${index % 2 === 0 ? "lg:-ml-20" : "lg:-mr-20"}`}
            style={{ y: yTransformCard }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
          >
            <h3 className="text-xl font-extrabold text-black xl:text-2xl">
              {item.title}
            </h3>

            <MenuCard title={item.title} items={item.data} />
          </motion.div>
        </div>
      ))}
    </section>
  );
};

export default MenuSection;
