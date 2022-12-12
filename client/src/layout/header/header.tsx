import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext, UserCtxProps } from "../../global/context/user-context";
// COMPONENTS
import AuthLinks from "./links-for-auth/auth-links";
import Dropdown from "./authenticated-user/dropdown";
import { RiHomeSmileFill } from "react-icons/ri";
// END OF IMPORTS

const Header = () => {
  // react-query-firebase global state
  const { user } = useContext(UserContext) as UserCtxProps;
  return (
    <header className="w-full h-20 bg-slate-900 text-white text-xs font-semibold text-center uppercase tracking-wide leading-normal">
      <section className="w-11/12 max-w-screen-2xl h-full mx-auto flex justify-between items-center">
        <div>
          <Link aria-label="Application-logo" to="/">
            <RiHomeSmileFill className="text-2xl" />
          </Link>
        </div>
        <nav>
          {user.data === undefined || user.data === null ? (
            <AuthLinks />
          ) : (
            <Dropdown />
          )}
        </nav>
      </section>
    </header>
  );
};

export default Header;
