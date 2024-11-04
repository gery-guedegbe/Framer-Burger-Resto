import { motion } from "framer-motion";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const PageNotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const textVariant = {
    hidden: { y: -20, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.3, duration: 0.5, ease: "easeOut" },
    }),
  };

  const navigate = useNavigate();

  return (
    <section className="flex h-full min-h-screen w-full flex-col items-center justify-between gap-28 text-start">
      <NavBar />

      <div className="w-full space-y-4 px-6 xl:px-10">
        <h1 className="text-3xl font-extrabold text-black xl:text-5xl">
          Oops.. Something went wrong
        </h1>
        <p className="text-sm font-semibold text-black/90 xl:text-lg">
          Luckily our burgers are delicious, go take a look.
        </p>
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

      <Footer />
    </section>
  );
};

export default PageNotFound;
