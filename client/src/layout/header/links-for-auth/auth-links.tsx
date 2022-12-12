import { Link } from "react-router-dom";
// END OF IMPORTS

const AuthLinks = () => {
  return (
    <ul className="flex gap-5">
      <li className="flex justify-start items-center hover:text-amber-500">
        <Link to="/auth/login" className="flex-1 h-full">
          login
        </Link>
      </li>
      <li className="flex justify-start items-center hover:text-amber-500">
        <Link to="/auth/create-account" className="flex-1 h-full">
          sign up
        </Link>
      </li>
    </ul>
  );
};

export default AuthLinks;
