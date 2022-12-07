import { ReactNode } from "react";
import { Link } from "react-router-dom";

type Props = {
  children: ReactNode;
  route: string;
  onClick?: () => void;
};

const MainButton = ({ children, onClick, route }: Props) => {
  return (
    <Link
      to={route}
      className="uppercase text-xs font-semibold bg-gradient-to-br from-cyan-600 to-blue-500 py-2 px-4 rounded-md text-white shadow-md shadow-sky-500 hover:translate-y-0.5"
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default MainButton;
