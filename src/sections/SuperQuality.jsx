import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section className="lg:flex w-full justify-between lg:gap-20 items-center">
      <div className="lg:w-1/2">
        <h1 className="font-palanquin text-4xl font-bold leading-none">
          We Provide You <span className="text-coral-red"> Super Quality </span>
          Shoes
        </h1>
        <p className="mt-14 text-lg font-montserrat text-slate-gray">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-10 text-lg font-montserrat text-slate-gray">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-14">
          <Button label="View Details" iconURL={arrowRight} />
        </div>
      </div>
      <img
        className="mt-10 mx-auto lg:m-0 object-contain"
        src={shoe8}
        alt="shoe"
        width={600}
        height={600}
      />
    </section>
  );
};

export default SuperQuality;
