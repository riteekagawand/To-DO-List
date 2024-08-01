import React from "react";
import Link from "next/link";
import { AiOutlineCheckCircle, AiOutlineClockCircle } from "react-icons/ai";
import { MdOutlineStar } from "react-icons/md";

const Header = ({ priorityItems = [], completedItems = [] }) => {
  return (
    <header className="bg-white py-4 shadow-md ">
      <nav className="flex justify-end items-center gap-8 px-4">
        <Link href="/" passHref>
          <span className="text-[#333333] text-lg flex items-center font-medium hover:text-blue-600 cursor-pointer border-b-4 border-transparent hover:rounded hover:border-blue-600">
            <AiOutlineCheckCircle className="mr-2 text-[25px] text-blue-600" />
            All
          </span>
        </Link>
        <Link href="/active" passHref>
          <span className="text-[#333333] text-lg flex items-center font-medium hover:text-red-500 cursor-pointer border-b-4 border-transparent hover:rounded hover:border-red-500">
            <AiOutlineClockCircle className="mr-2 text-[25px] text-red-500" />
            Active
          </span>
        </Link>
        <Link href="/completed" passHref>
          <span className="text-[#333333] text-lg flex items-center font-medium hover:text-green-500 cursor-pointer border-b-4 border-transparent hover:rounded hover:border-green-500">
            <AiOutlineCheckCircle className="mr-2 text-[25px] text-green-500" />
            Completed
            {completedItems?.length > 0 && (
              <span className="ml-1 text-sm bg-blue-500 text-white px-2 py-1 rounded-full">
                {completedItems.length}
              </span>
            )}
          </span>
        </Link>
        <Link href="/priority" passHref>
          <span className="text-[#333333] text-lg flex items-center font-medium hover:text-yellow-500 cursor-pointer border-b-4 border-transparent hover:rounded hover:border-yellow-500">
            <MdOutlineStar className="mr-2 text-[25px] text-yellow-500" />
            Priority
          </span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
