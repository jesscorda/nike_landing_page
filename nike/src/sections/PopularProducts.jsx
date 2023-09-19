import PopularProduct from "../components/PopularProduct";
import { products } from "../constants";

const PopularProducts = () => {
  return (
    <section className="max-container">
      <h1 className="font-montserrat text-4xl font-bold">
        Our <span className="text-coral-red">Popular</span> Products
      </h1>
      <p className="mt-6 font-montserrat text-slate-gray">
        Experience top-notch quality and style with our sought-after selections.
        Discover a world of comfort, design, and value
      </p>
      <div className="mt-10 w-full gap-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product, index) => (
          <PopularProduct key={index} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
