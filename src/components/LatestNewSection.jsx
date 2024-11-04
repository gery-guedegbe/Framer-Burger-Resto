import { useNavigate } from "react-router-dom";
import { LatestNewData } from "../constants";
import Carousel from "./Carousel";

const LatestNewSection = () => {
  return (
    <section className="full flex w-full flex-col items-start justify-center gap-6 overflow-hidden">
      <h1 className="mb-4 w-full text-start text-3xl font-extrabold text-black md:mt-10 xl:mb-0 xl:text-5xl">
        Latest burger news
      </h1>

      <Carousel data={LatestNewData} />
    </section>
  );
};

export default LatestNewSection;
