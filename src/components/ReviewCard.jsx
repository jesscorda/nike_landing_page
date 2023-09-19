import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex flex-col items-center font-montserrat text-lg text-slate-gray">
      <img className="rounded-full" src={imgURL} alt={`${customerName} image`} width={100} height={100}/>
      <p className="mt-5 text-center">{feedback}</p>
      <span className="mt-5 flex gap-5">
        <img src={star} alt="rating image" /> {rating}
      </span>
      <p className="mt-5 font-palanquin font-bold text-2xl text-black">{customerName}</p>
    </div>
  );
};

export default ReviewCard;
