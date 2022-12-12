import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  UserContext,
  UserCtxProps,
} from "../../../global/context/user-context";
import { signOut } from "firebase/auth";
import { auth } from "../../../auth/firebase/setup";
// COMPONENTS
import { RiProfileFill } from "react-icons/ri";
import { RiLogoutBoxFill } from "react-icons/ri";
// END OF IMPORTS

type Props = {
  closeDropdown: () => void;
};

const DropdownBody = ({ closeDropdown }: Props) => {
  // react-query-firebase global state
  const { user } = useContext(UserContext) as UserCtxProps;
  // react router dom
  let navigate = useNavigate();

  const logout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <div className="absolute right-0 top-12 w-60  z-30 text-slate-900 bg-white py-4 text-sm rounded shadow-lg">
      <ul className="flex flex-col gap-4">
        <li className="flex justify-start items-center hover:bg-slate-900 hover:text-white">
          {/* TODO: PROTECTED ROUTE */}
          <Link
            to="/"
            onClick={closeDropdown}
            className="flex-1 uppercase text-sm font-bold flex gap-2 px-4 my-4 h-full"
          >
            <span>
              <RiProfileFill className="text-xl" />
            </span>
            my profile ({user.data?.displayName})
          </Link>
        </li>
        <li className="flex justify-start items-center hover:bg-slate-900 hover:text-white">
          {/* Log out button */}
          <button
            onClick={() => {
              closeDropdown();
              logout();
            }}
            className="flex-1 uppercase text-sm font-bold flex gap-2 px-4 my-4 h-full"
          >
            <span>
              <RiLogoutBoxFill className="text-xl" />
            </span>
            logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default DropdownBody;
