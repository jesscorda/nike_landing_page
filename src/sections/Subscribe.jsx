import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section className="md:flex items-center max-container justify-between">
      <h2 className="font-palanquin font-bold text-4xl md:w-[40%]">
        Sign Up from <span className="text-coral-red">Updates</span> &
        Newsletter
      </h2>
      <div className="md:flex md:border md:p-3 border-slate-gray rounded-full mt-10">
        <input type="text" placeholder="subscribe@nike.com" className="input" />
        <div className="flex justify-center mt-10 md:block md:m-0">
          <Button label="Sign Up" />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
