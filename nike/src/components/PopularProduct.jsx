import { star } from "../assets/icons";

const PopularProduct = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-col font-montserrat">
      <img className="flex  justify-center items-center" src={imgURL} alt={name} />
        <span className="flex mt-10 text-lg text-slate-gray">
          <img src={star} alt="rating" /> <span className="ml-3">(4.5)</span>
        </span>
        <span className="mt-5 text-xl font-bold">{name}</span>
        <span className="mt-3 text-lg text-coral-red">{price}</span>
    </div>
  );
};

export default PopularProduct;
