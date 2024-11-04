import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleIsToggled = () => {
    setIsToggled((prev) => !prev);
  };

  const controlHeader = () => {
    if (typeof window !== "undefined" && !isToggled) {
      if (window.scrollY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlHeader);
    return () => {
      window.removeEventListener("scroll", controlHeader);
    };
  }, [lastScrollY, isToggled]);

  const linkVariant = {
    hidden: { y: -50, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.4, duration: 0.6 },
    }),
  };

  return (
    <AnimatePresence>
      {showHeader && (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="sticky top-0 z-50 h-auto w-full border-b-2 border-b-customYellow bg-white/60 px-4 py-2 backdrop-blur-lg xl:px-8 xl:py-4"
        >
          <nav className="flex w-full items-center justify-between">
            <img
              src={logo}
              alt="Logo"
              className="z-50 h-auto w-44 cursor-pointer object-cover xl:w-64"
              onClick={() => window.location.reload()}
            />

            <div className="hidden items-center gap-4 lg:flex">
              <ul className="inline-flex items-center gap-4">
                <li className="px-4 py-2 text-lg font-bold outline-none">
                  <a href="/" className="">
                    Menu
                  </a>
                </li>

                <li className="px-4 py-2 text-lg font-bold outline-none">
                  <Link to="/news">News</Link>
                </li>
              </ul>

              <button className="flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white outline-none">
                Book table
              </button>
            </div>

            <button
              onClick={handleIsToggled}
              className="z-50 flex flex-col items-center justify-center gap-2 lg:hidden"
            >
              <motion.div
                initial={{ x: 0 }}
                animate={
                  isToggled ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }
                }
                className="h-1 w-9 rounded-lg bg-black"
              ></motion.div>

              <motion.div
                initial={{ x: 0 }}
                animate={
                  isToggled ? { rotate: -45, y: -2 } : { rotate: 0, y: 0 }
                }
                className="h-1 w-9 rounded-lg bg-black"
              ></motion.div>
            </button>

            <AnimatePresence>
              {isToggled && (
                <motion.div
                  initial={{ opacity: 0, y: "-100%" }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: "-100%" }}
                  transition={{
                    duration: 0.3,
                    type: "spring",
                    stiffness: 300,
                    damping: 24,
                  }}
                  className="fixed inset-0 z-10 flex h-screen w-full flex-col items-start justify-start overflow-hidden bg-customYellow p-4 lg:hidden"
                >
                  <ul className="mt-20 flex flex-col items-start justify-start gap-4">
                    <motion.li
                      initial="hidden"
                      animate="visible"
                      variants={linkVariant}
                      custom={0}
                      className="text-2xl font-bold outline-none"
                    >
                      <a href="/" className="">
                        Menu
                      </a>
                    </motion.li>

                    <motion.li
                      initial="hidden"
                      animate="visible"
                      variants={linkVariant}
                      custom={1}
                      className="text-2xl font-bold outline-none"
                    >
                      <Link to="/news">News</Link>
                    </motion.li>

                    <motion.li
                      initial="hidden"
                      animate="visible"
                      variants={linkVariant}
                      custom={2}
                      className="text-2xl font-bold outline-none"
                    >
                      <a href="#" className="">
                        Book Table
                      </a>
                    </motion.li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </nav>
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default NavBar;
