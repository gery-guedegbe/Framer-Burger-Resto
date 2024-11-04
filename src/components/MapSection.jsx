import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import map_img from "../assets/images/map.png";
import logo from "../assets/images/logo.svg";

const MapSection = () => {
  const ref = useRef(null);

  // Initialisation des scrolls
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const cardY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section className="flex h-full w-full flex-col items-center justify-between gap-28">
      <h1 className="mb-4 w-full text-start text-3xl font-extrabold text-black md:mt-10 xl:mb-0 xl:text-5xl">
        Visit Us & Book a Table
      </h1>

      <div
        ref={ref}
        className="relative flex w-full flex-col items-center lg:flex-row"
      >
        {/* Section Image de la carte */}
        <motion.div
          className="relative z-10 h-[300px] w-[80%] rounded-3xl bg-cover bg-center lg:h-[400px] lg:w-[40%] lg:rounded-l-3xl"
          style={{
            backgroundImage: `url(${map_img})`,
            y: imgY,
            willChange: "transform",
          }}
          transition={{
            ease: [0.25, 0.1, 0.25, 1],
            duration: 0.5,
          }}
        />

        {/* Section Carte avec information */}
        <motion.div
          className="relative z-20 -mt-20 ml-0 w-full rounded-3xl bg-customYellow p-4 lg:-ml-8 lg:w-[60%] lg:rounded-r-3xl lg:p-10"
          style={{ y: cardY, willChange: "transform" }}
        >
          <motion.img
            src={logo}
            alt="Logo"
            className="mb-4 h-auto w-36 object-cover"
            style={{ willChange: "transform" }}
          />

          <h4 className="text-xl font-extrabold text-black lg:text-2xl xl:text-3xl">
            Welcome to enjoy happiness
          </h4>

          <p className="mt-3 text-sm font-semibold text-black/90 xl:text-lg">
            At Burger Haven, our story began with a simple love for great
            burgers...
          </p>

          <p className="text-sm font-semibold text-black/90 xl:text-lg">
            Join us at Burger Haven and taste the difference passion and quality
            make.
          </p>

          <p className="mt-3 text-lg font-bold text-black xl:text-xl">
            Find us from the heart of New York:
          </p>

          <ul className="mt-3 flex max-w-sm flex-col items-start justify-center gap-2">
            <li className="text-sm font-extrabold text-black">Burger Haven</li>
            <li className="text-sm font-extrabold text-black">
              23 Burger Lane
            </li>
            <li className="text-sm font-extrabold text-black">
              Food City, FC 12345
            </li>
          </ul>

          <div className="mt-6 flex w-full items-center justify-start gap-3">
            <motion.button
              whileHover={{ scale: 0.9 }}
              className="flex items-center justify-center rounded-full bg-black px-4 py-3 text-sm font-semibold text-white outline-none lg:text-lg"
              style={{ willChange: "transform" }}
            >
              Book table
            </motion.button>

            <motion.button
              whileHover={{ scale: 0.9 }}
              className="flex items-center justify-center rounded-full border-2 border-black bg-customYellow px-3 py-3 text-sm font-semibold text-black outline-none lg:text-lg"
              style={{ willChange: "transform" }}
            >
              Explore menu
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MapSection;
