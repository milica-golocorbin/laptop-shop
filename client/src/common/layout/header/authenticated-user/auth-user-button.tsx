import { RiUserFill } from "react-icons/ri";

type Props = {
  toggleDropdown: () => void;
};

const AuthenticatedUserButton = ({ toggleDropdown }: Props) => {
  return (
    <button
      onClick={toggleDropdown}
      className="flex gap-2 justify-center items-center text-sm font-bold border border-teal-500 rounded-md py-2 px-4"
    >
      <span>
        <RiUserFill className="text-xl mr-2" />
      </span>
      username
    </button>
  );
};

export default AuthenticatedUserButton;
