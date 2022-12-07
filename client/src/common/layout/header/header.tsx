import { Link } from "react-router-dom";
import { RiHomeSmileFill } from "react-icons/ri";
import AuthenticatedUserDropdown from "./authenticated-user/auth-user-dropdown";

const Header = () => {
  return (
    <header className="w-full h-20 bg-slate-900 text-white text-xs font-semibold text-center uppercase tracking-wide leading-normal">
      <section className="w-11/12 max-w-screen-2xl h-full mx-auto flex justify-between items-center">
        <div>
          <Link aria-label="Application-logo" to="/">
            <RiHomeSmileFill className="text-2xl" />
          </Link>
        </div>
        <nav>
          {/* <AuthenticatedUserDropdown /> */}
          <ul className="flex gap-5">
            <li>
              <Link to="/auth/login">login</Link>
            </li>
            <li>
              <Link to="/auth/create-account">sign up</Link>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
};

export default Header;
