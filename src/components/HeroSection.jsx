import { IoMdStar } from "react-icons/io";
import { motion } from "framer-motion";
import hero_img from "../assets/images/hero-img.png";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const stars = Array.from({ length: 5 }, (_, i) => (
    <IoMdStar className="h-5 w-5 object-cover text-[#10003b]" key={i} />
  ));

  const textVariant = {
    hidden: { y: -20, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.3, duration: 0.5, ease: "easeOut" },
    }),
  };

  const imageVariant = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const navigate = useNavigate();

  return (
    <section className="mt-8 flex h-full w-full flex-col items-center justify-start gap-16 xl:flex-row xl:justify-between">
      <div className="flex h-full w-full flex-col items-start justify-center gap-7">
        <motion.div
          className="inline-flex max-w-lg items-center gap-1.5 rounded-full bg-customYellow p-4"
          initial="hidden"
          animate="visible"
          variants={textVariant}
          custom={0}
          style={{ willChange: "transform, opacity" }}
        >
          <span className="text-sm font-bold text-black">Uber Eats :</span>
          <div className="inline-flex items-center gap-1 px-1.5">{stars}</div>
          <span className="text-sm font-bold text-black">(4.9)</span>
        </motion.div>

        <div className="space-y-6">
          <motion.h1
            className="text-4xl font-extrabold text-black xl:text-6xl"
            initial="hidden"
            animate="visible"
            variants={textVariant}
            custom={1}
            style={{ willChange: "transform, opacity" }}
          >
            Bite into Happiness
          </motion.h1>

          <motion.p
            className="text-xl font-semibold text-black"
            initial="hidden"
            animate="visible"
            variants={textVariant}
            custom={2}
            style={{ willChange: "transform, opacity" }}
          >
            Welcome to Burger Haven, where every bite is a step closer to
            happiness.
          </motion.p>
        </div>

        <div className="inline-flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 0.9 }}
            className="flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white outline-none xl:text-lg"
            initial="hidden"
            animate="visible"
            variants={textVariant}
            custom={3}
            style={{ willChange: "transform, opacity" }}
          >
            Book table
          </motion.button>

          <motion.button
            whileHover={{ scale: 0.9 }}
            className="flex items-center justify-center rounded-full border-2 border-black bg-white px-6 py-3 text-sm font-semibold text-black outline-none xl:text-lg"
            initial="hidden"
            animate="visible"
            variants={textVariant}
            custom={4}
            style={{ willChange: "transform, opacity" }}
            onClick={() => navigate("/")}
          >
            Explore menu
          </motion.button>
        </div>
      </div>

      <motion.div
        className="flex h-full w-full items-center justify-center"
        initial="hidden"
        animate="visible"
        variants={imageVariant}
        style={{ willChange: "transform, opacity" }}
      >
        <motion.img
          src={hero_img}
          alt="Hero Image"
          className="hero-shadow h-auto w-full max-w-md rounded-xl object-cover sm:max-w-lg md:max-w-xl lg:max-w-2xl"
          style={{ willChange: "transform, opacity" }}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
