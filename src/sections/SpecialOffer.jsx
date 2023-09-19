import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2">
      <div className="lg:order-last font-montserrat text-lg text-slate-gray self-center">
        <h2 className="font-palanquin text-4xl font-bold text-black">
          <span className="text-coral-red">Special</span> Offer
        </h2>
        <p className="mt-10">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-10">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-10 flex gap-10">
          <Button label="View Details"></Button>
          <Button
            label="Learn More"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          ></Button>
        </div>
      </div>

      <div className="mt-10 lg:m-0">
        <img src={offer} alt="special offer image" width={800} height={800}/>
      </div>
    </section>
  );
};

export default SpecialOffer;
