import { useNavigate, useParams } from "react-router-dom";
import { LatestNewData } from "../constants/index";
import { motion } from "framer-motion";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useEffect } from "react";

const ArticleDetail = () => {
  const { id } = useParams();
  const navige = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const article = LatestNewData.find((item) => item.id === parseInt(id));

  if (!article) {
    return (
      <div className="flex h-full min-h-screen w-full flex-col items-center justify-between gap-16">
        <NavBar />

        <div className="flex w-full flex-col items-center justify-center gap-4">
          <h1 className="text-3xl font-extrabold text-black xl:text-5xl">
            Article not found
          </h1>
          <button
            onClick={() => navige("/")}
            className="rounded-full border-2 border-black px-3 py-1 text-lg font-semibold text-black"
          >
            Home
          </button>
        </div>

        <Footer />
      </div>
    );
  }

  return (
    <section className="flex h-full min-h-screen w-full flex-col items-start justify-between gap-16 text-start">
      <NavBar />

      <div className="w-full px-8 xl:px-16">
        <motion.img
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          src={article.image}
          alt={article.title}
          className="hero-shadow mb-8 h-80 w-full rounded-3xl object-cover"
        />

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="space-y-6"
        >
          <span className="text-xl font-bold text-black">
            {article.createAt}
          </span>

          <h1 className="text-3xl font-extrabold text-black xl:text-5xl">
            {article.title}
          </h1>

          <p className="text-xl font-bold text-black xl:text-2xl">
            {article.present}
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="space-y-6"
        >
          {article.details.map((section, index) => (
            <div key={index} className="">
              <h3 className="mt-6 text-xl font-extrabold text-black xl:text-3xl">
                {section.section}
              </h3>

              <ul className="mt-4 space-y-4">
                {section.items.map((item, idx) => (
                  <li key={idx} className="flex flex-col items-start gap-3">
                    <p className="text-xl font-semibold text-black">
                      <span className="font-extrabold">{item.name}</span> :
                      <span className="ml-1">{item.description}</span>
                    </p>

                    <span className="text-lg font-semibold text-black">
                      Price : {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>

      <Footer />
    </section>
  );
};

export default ArticleDetail;
