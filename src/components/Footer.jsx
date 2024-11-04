import logo from "../assets/images/logo.svg";
import facebook_icon from "../assets/icons/facebook-icon.png";
import x_icon from "../assets/icons/twitter-icon.png";
import instagram_icon from "../assets/icons/instagram-icon.png";

const Footer = () => {
  return (
    <footer className="relative flex min-h-screen w-full flex-col items-center justify-between rounded-tl-[60px] rounded-tr-[60px] bg-customYellow p-8 lg:rounded-tl-[130px] lg:rounded-tr-[130px] xl:p-16">
      <div className="flex h-full w-full flex-col gap-8 lg:flex-row">
        {/* Left Section */}
        <div className="flex w-full flex-col items-start justify-between gap-8 lg:w-1/2">
          <div className="flex flex-col items-start gap-4 xl:gap-6">
            <img
              src={logo}
              alt="Logo"
              className="h-auto w-32 object-cover md:w-48 lg:w-64"
            />

            <h3 className="text-xl font-bold text-black lg:text-2xl xl:text-4xl">
              Bite into Happiness
            </h3>
          </div>

          <ul className="flex items-center gap-3">
            <li>
              <img
                src={instagram_icon}
                alt="Instagram Icon"
                className="h-5 w-5 object-cover md:h-6 md:w-6"
              />
            </li>

            <li>
              <img
                src={facebook_icon}
                alt="Facebook Icon"
                className="h-5 w-5 object-cover md:h-6 md:w-6"
              />
            </li>

            <li>
              <img
                src={x_icon}
                alt="Twitter Icon"
                className="h-5 w-5 object-cover md:h-6 md:w-6"
              />
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex w-full flex-col gap-8 border-t border-black pt-8 lg:w-1/2 lg:border-l lg:border-t-0 lg:px-8 lg:pt-0">
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-semibold text-black lg:text-xl">
              Opening Hours:
            </h4>

            <p className="text-base font-semibold text-black/80 lg:text-lg">
              Mon - Thu: 11:00 AM - 9:00 PM
            </p>

            <p className="text-base font-semibold text-black/80 lg:text-lg">
              Fri - Sat: 11:00 AM - 10:00 PM
            </p>

            <p className="text-base font-semibold text-black/80 lg:text-lg">
              Sun: 12:00 PM - 8:00 PM
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-semibold text-black lg:text-xl">
              Contact Us:
            </h4>

            <p className="text-base font-semibold text-black/80 lg:text-lg">
              (555) 987-6543
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-semibold text-black lg:text-xl">
              Location:
            </h4>

            <p className="text-base font-semibold text-black/80 lg:text-lg">
              Burger Haven
            </p>

            <p className="text-base font-semibold text-black/80 lg:text-lg">
              123 Burger Lane
            </p>

            <p className="text-base font-semibold text-black/80 lg:text-lg">
              Food City, FC 12345
            </p>
          </div>
        </div>
      </div>

      <span className="mt-10 w-full text-start text-base font-semibold text-black/80">
        © 2024 – Géry GUEDEGBE
      </span>
    </footer>
  );
};

export default Footer;
