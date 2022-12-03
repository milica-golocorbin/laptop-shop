import { Link } from "react-router-dom";
import { RiHomeSmileFill } from "react-icons/ri";
import AuthenticatedUserDropdown from "./authenticated-user/auth-user-dropdown";

const Header = () => {
  return (
    <header className="bg-slate-900 text-white w-full h-20">
      <section className="w-11/12 max-w-screen-xl h-full mx-auto flex justify-between items-center">
        <div>
          <Link to="/">
            <RiHomeSmileFill className="text-2xl" />
          </Link>
        </div>
        <nav>
          {/* <AuthenticatedUserDropdown /> */}
          <ul className="flex gap-5 text-xs uppercase font-bold">
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
