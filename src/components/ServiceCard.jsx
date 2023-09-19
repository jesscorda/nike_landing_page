const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex flex-col rounded-[20px] shadow-3xl px-10 py-16">
      <div className="rounded-full p-2 bg-coral-red w-10">
        <img src={imgURL} alt={label} width={24} height={48} />
      </div>
      <h2 className="font-palanquin font-bold text-3xl mt-5">{label}</h2>
      <p className="font-montserrat text-slate-gray mt-5">{subtext}</p>
    </div>
  );
};

export default ServiceCard;
