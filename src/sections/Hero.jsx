import { useState } from "react";
import { arrowRight } from "../assets/icons";
import Button from "../components/Button";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section className="md:flex w-full padding-x max-container">
      <div className="relative pt-28 xl:w-2/5 lg:w-1/2">
        <p className="font-montserrat text-coral-red text-lg h-10">
          Our Summer collections
        </p>
        <h1 className="py-5 font-bold font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px]">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">
            Nike
          </span> Shoes
        </h1>
        <p className="font-palanquinfont-montserrat text-slate-gray text-lg leading-8 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop now" iconURL={arrowRight} />
        <ul className="mt-16 flex gap-16">
          {statistics.map((stat, index) => (
            <div className="flex flex-col" key={index}>
              <span className="font-bold text-3xl md:text-4xl font-palanquin">
                {stat.value}
              </span>
              <span className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </span>
            </div>
          ))}
        </ul>
      </div>
      <div className="hidden lg:flex relative flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoeImg}
          alt="shoe colletion"
          width={610}
          height={502}
          className="object-contain relative z-10"
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
