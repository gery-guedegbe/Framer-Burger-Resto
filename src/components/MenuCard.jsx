import { motion } from "framer-motion";
import ParallaxEffect from "./ParallaxEffect";

const MenuCard = ({ title, items }) => (
  <ParallaxEffect>
    <div className="space-y-8">
      {items.map((item, index) => (
        <div
          key={item.id || index}
          className="inline-flex w-full items-start gap-6"
        >
          <motion.img
            src={item.image}
            alt={item.type}
            className="h-auto w-16 object-cover md:w-20 lg:w-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          />
          <div className="flex flex-col items-start">
            <span className="text-lg font-extrabold text-black">
              {item.price}
            </span>
            <h4 className="text-lg font-extrabold text-black">{item.type}</h4>
            <p className="max-w-xl font-semibold text-black/90">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </ParallaxEffect>
);

export default MenuCard;
