import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Carousel = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3); // Initialisez à 3 pour les grands écrans

  // Met à jour le nombre d'éléments à afficher en fonction de la largeur de l'écran
  useEffect(() => {
    const updateItemsToShow = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setItemsToShow(3); // Ordinateurs de bureau
      } else if (width >= 768) {
        setItemsToShow(2); // Tablettes
      } else {
        setItemsToShow(1); // Mobiles
      }
    };

    updateItemsToShow();
    window.addEventListener("resize", updateItemsToShow);
    return () => window.removeEventListener("resize", updateItemsToShow);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= data.length - itemsToShow + 1 ? 0 : prevIndex + 1,
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - itemsToShow : prevIndex - 1,
    );
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 50 : -50,
      opacity: 0,
      scale: 0.95,
    }),
  };

  const navigate = useNavigate();

  const navigateToArticle = (id) => {
    navigate(`/article/${id}`);
  };

  return (
    <div className="relative flex h-full w-full items-center overflow-hidden">
      {/* Bouton précédent */}
      <motion.button
        onClick={handlePrevious}
        className="top-50 absolute left-0 z-40 flex items-center justify-center rounded-full bg-black p-2"
        whileHover={{ scale: 1.1 }}
      >
        <MdOutlineKeyboardArrowLeft className="text-3xl text-white" />
      </motion.button>

      {/* Cartes visibles dans le carrousel */}
      <div className="flex w-full flex-row items-center gap-4">
        <AnimatePresence initial={false} custom={currentIndex}>
          {data
            .slice(currentIndex, currentIndex + itemsToShow)
            .map((item, index) => (
              <motion.div
                key={index}
                onClick={() => navigateToArticle(item.id)}
                custom={index}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 200, damping: 20 },
                  opacity: { duration: 0.4 },
                  scale: { type: "spring", stiffness: 200, damping: 20 },
                }}
                whileHover={{ scale: 1.05 }}
                className="flex h-full w-full max-w-md cursor-pointer flex-col items-start justify-center gap-3 rounded-lg p-4"
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
        </AnimatePresence>
      </div>

      {/* Bouton suivant */}
      <motion.button
        onClick={handleNext}
        className="top-50 absolute right-0 z-40 flex items-center justify-center rounded-full bg-black p-2"
        whileHover={{ scale: 1.1 }}
      >
        <MdOutlineKeyboardArrowRight className="text-3xl text-white" />
      </motion.button>
    </div>
  );
};

export default Carousel;
