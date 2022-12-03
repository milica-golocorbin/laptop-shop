import { useState } from "react";
import AuthenticatedUserButton from "./auth-user-button";
import AuthenticatedUserBody from "./auth-user-body";

const AuthenticatedUserDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <>
      {/* BACKDROP UNDER THE DROPDOWN BODY */}
      {isDropdownOpen && (
        <div
          onClick={closeDropdown}
          className="fixed top-0 z-0 w-full h-full left-0"
        />
      )}
      <div className="relative">
        <AuthenticatedUserButton toggleDropdown={toggleDropdown} />
        {isDropdownOpen && (
          <AuthenticatedUserBody closeDropdown={closeDropdown} />
        )}
      </div>
    </>
  );
};

export default AuthenticatedUserDropdown;
