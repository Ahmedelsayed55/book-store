import { Disclosure } from "@headlessui/react";

import { IoChevronDownOutline, IoSearch } from "react-icons/io5";
import { IoMicOutline } from "react-icons/io5";

const Search = () => {
  return (
    <div className="flex gap-5 items-start">
      <div className="flex w-full items-stretch">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search"
            className="w-full border text-2xl outline-0 border-gray-300 py-4 px-6 rounded-l-full"
          />
          <IoMicOutline className="absolute right-3 text-3xl top-4.5 text-[#22222280] " />
        </div>
        <button className="py-4 px-6 border border-gray-300 text-3xl text-[#D9176C] rounded-r-full cursor-pointer">
         <IoSearch />
        </button>
      </div>
      {/* Sort by */}
      <Disclosure>
        {({ open }) => (
          <div className=" shadow rounded-2xl text-black w-52  bg-white my-auto">
            <Disclosure.Button className="w-full flex justify-between items-center p-4 font-semibold text-[#22222280]">
             Sort by
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
