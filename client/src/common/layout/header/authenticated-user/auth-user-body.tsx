import { Link } from "react-router-dom";
import { RiProfileFill } from "react-icons/ri";
import { RiLogoutBoxFill } from "react-icons/ri";

type Props = {
  closeDropdown: () => void;
};

const AuthenticatedUserBody = ({ closeDropdown }: Props) => {
  return (
    <div className="absolute right-0 top-12 w-60  z-30 text-slate-900 bg-white flex flex-col gap-4 p-4 text-sm rounded shadow-lg">
      <Link
        to="/"
        onClick={closeDropdown}
        className="uppercase text-sm font-bold flex gap-2 my-5"
      >
        <span>
          <RiProfileFill className="text-xl" />
        </span>
        my profile
      </Link>
      <button
        onClick={closeDropdown}
        className="uppercase text-sm font-bold flex gap-2 mb-5"
      >
        <span>
          <RiLogoutBoxFill className="text-xl" />
        </span>
        logout
      </button>
    </div>
  );
};

export default AuthenticatedUserBody;
