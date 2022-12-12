import { useState } from "react";
// COMPONENTS
import DropdownBody from "./dropdown-body";
import { RiUserFill } from "react-icons/ri";
// END OF IMPORTS

const Dropdown = () => {
  // local state
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      {/* Backdrop under the dropdown body */}
      {isDropdownOpen && (
        <div
          onClick={() => setIsDropdownOpen(false)}
          className="fixed top-0 z-0 w-full h-full left-0"
        />
      )}
      <div className="relative">
        {/* Dropdown button */}
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex gap-2 justify-center items-center bg-slate-800 p-2 rounded-full tracking-widest shadow-md 
      shadow-sky-500"
        >
          <RiUserFill className="text-xl" />
        </button>
        {/* Dropdown body */}
        {isDropdownOpen && (
          <DropdownBody closeDropdown={() => setIsDropdownOpen(false)} />
        )}
      </div>
    </>
  );
};

export default Dropdown;
