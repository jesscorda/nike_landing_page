import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="text-white grid grid-cols-1 lg:grid-cols-2 lg:gap-30 font-montserrat text-lg max-container">
      <div>
        <img
          src={footerLogo}
          alt="logo"
          width={150}
          height={46}
          className="m-0"
        />
        <p className="mt-5">
          Get shoes ready for the new term at your nearest Nike store. Find Your
          perfect Size In Store. Get Rewards
        </p>
        <div className="mt-10 flex gap-5">
          {socialMedia.map((icon, index) => (
            <div className="rounded-full p-2 bg-white w-10" key={index}>
              <img src={icon.src} alt={icon.alt} />
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-flow-col-1 md:grid-flow-col gap-10 mt-10 md:m-0">
        {footerLinks.map((footerSection, index) => (
          <div key={index}>
            <h3 className="font-semibold text-2xl" key={index}>
              {footerSection.title}
            </h3>
            <ul className="mt-10 flex flex-col gap-3">
              {footerSection.links.map((link, index) => (
                <li key={index}>
                  {link.name} <a href={link.link}></a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
