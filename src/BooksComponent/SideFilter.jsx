import { Disclosure } from "@headlessui/react";
import { LuSettings2 } from "react-icons/lu";
import { IoChevronDownOutline } from "react-icons/io5";

const SideFilter = ({ categories }) => {
  return (
    <div className="w-full lg:w-74 border-r border-gray-300 p-4 flex flex-col gap-7 pt-16">
      <h2 className="text-[#222222] text-2xl flex gap-3 items-center">
        <LuSettings2 />
        Filter
      </h2>
      {/* Categories */}
      {/* Categories */}
      <Disclosure defaultOpen>
        {({ open }) => (
          <div className="shadow bg-white">
            <Disclosure.Button className="w-full flex justify-between items-center p-4 font-semibold text-[#D9176C80]">
              Categories
              <IoChevronDownOutline
                className={`transition-transform ${open ? "rotate-180" : ""}`}
              />
            </Disclosure.Button>

            <Disclosure.Panel className="p-4 text-sm flex flex-col gap-3">
              <div className="w-full flex justify-between items-center">
                <label className="flex gap-3 text-[#222222] text-[14px] cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 border border-gray-700 accent-gray-800"
                  />
                  All Categories
                </label>
                <p className="text-[#22222280] text-[14px]">(1444)</p>
              </div>

              {categories.map((cat, i) => (
                <div
                  key={i}
                  className="w-full flex justify-between items-center"
                >
                  <label className="flex gap-3 text-[#222222] text-[14px] cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 border border-gray-700 accent-gray-800"
                    />
                    {cat.name}
                  </label>
                  <p className="text-[#22222280] text-[14px]">(1444)</p>
                </div>
              ))}

              <p className="text-[14px] text-center text-[#D9176C] cursor-pointer">
                Load More
              </p>
            </Disclosure.Panel>
          </div>
        )}
      </Disclosure>

      {/* Publisher */}
      <Disclosure>
        {({ open }) => (
          <div className=" shadow bg-white">
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

      {/* Year */}
      <Disclosure>
        {({ open }) => (
          <div className=" shadow bg-white">
            <Disclosure.Button className="w-full flex justify-between items-center p-4 font-semibold text-[#222222]">
              Year
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

export default SideFilter;
