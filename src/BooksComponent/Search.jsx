import { Disclosure } from "@headlessui/react";

import { IoChevronDownOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { IoMicOutline } from "react-icons/io5";

const Search = () => {
  return (
    <div className="flex gap-5 items-start">
      <div className="flex w-full">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search"
            className="w-full border py-4 px-6 rounded-l-full"
          />
          <IoMicOutline className="absolute right-3 text-2xl top-4" />
        </div>
        <button className="py-4 px-6 border rounded-r-full cursor-pointer">
          <CiSearch />
        </button>
      </div>
      {/* Sort by */}
      <Disclosure>
        {({ open }) => (
          <div className=" shadow  text-black w-52  bg-white my-auto">
            <Disclosure.Button className="w-full flex justify-between items-center p-4 font-semibold text-[#222222]">
              Publisher
              <IoChevronDownOutline
                className={`transition-transform ${open ? "rotate-180" : ""}`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="p-4 text-sm">
              Click the "Sign Up" button in the top right corner and follow the
              registration process.
            </Disclosure.Panel>
          </div>
        )}
      </Disclosure>
    </div>
  );
};

export default Search;
