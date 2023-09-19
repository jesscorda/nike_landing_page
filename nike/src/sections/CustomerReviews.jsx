import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section className="padding-x">
      <h2 className="font-palanquin text-4xl font-bold text-center">
        What Our <span className="text-coral-red">Customers</span> Say?
      </h2>
      <p className="mt-5 text-lg text-slate-gray font-montserrat text-center">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16">
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
