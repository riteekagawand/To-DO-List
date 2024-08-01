import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-3 rounded-3xl">
      <Link className="text-white font-bold" href={"/"}>
       <p className="text-[30px] text-white">To Do List</p>
      </Link>
      <Link className="bg-gray-200 p-2 mr-6 rounded-2xl  hover:bg-gray-400 border hover:border-white" href={"/addTodo"}>
      <p className="text-[20px] text-slate-800 hover:text-white hover:border-white">Add To Do&apos;s</p>
      </Link>
    </nav>
  );
}