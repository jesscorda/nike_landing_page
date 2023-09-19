import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images/index";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 max-container w-full">
      <nav className="flex justify-between">
        <a href="/">
          <img src={headerLogo} alt="header logo" />
        </a>
        <ul className="flex-1 flex gap-16 justify-center items-center font-montserrat leading-normal text-lg text-slate-gray max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="menu button" height={25} width={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
