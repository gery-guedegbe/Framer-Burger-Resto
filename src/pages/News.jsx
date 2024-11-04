import { useEffect } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { LatestNewData } from "../constants/index";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const News = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const navigateToArticle = (id) => {
    navigate(`/article/${id}`);
  };

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[1940px] flex-col items-start justify-start">
      <NavBar />

      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="mb-8 flex w-full items-center justify-between"
      >
        <div className="flex w-full flex-col items-start justify-center gap-4 rounded-br-[60px] bg-customYellow p-8 xl:gap-6 xl:p-12">
          <h1 className="text-3xl font-extrabold text-black xl:text-5xl">
            Latest news from Burger Haven
          </h1>
          <p className="text-sm font-semibold text-black/90 xl:text-lg">
            Discover the secrets behind our mouth-watering burgers, and get the
            scoop on exclusive discounts.
          </p>
        </div>
        <div className="w-1/12"></div>
      </motion.div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="grid w-full grid-cols-1 gap-6 p-4 md:grid-cols-2 xl:grid-cols-3"
      >
        {LatestNewData.map((item, index) => (
          <motion.div
            key={index}
            onClick={() => navigateToArticle(item.id)}
            className="flex h-full w-full max-w-sm cursor-pointer flex-col items-start justify-center gap-3 rounded-lg bg-white p-4 transition-transform"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="hero-shadow w-full rounded-3xl object-cover"
            />
            <span className="mt-3 text-lg font-semibold text-black/90">
              {item.createAt}
            </span>
            <p className="text-xl font-bold text-black lg:text-2xl xl:text-3xl">
              {item.title}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <Footer />
    </div>
  );
};

export default News;
