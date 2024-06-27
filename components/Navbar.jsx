import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-green-500 px-8 py-3 rounded-[50px]">
      <Link className="text-white font-bold" href={"/"}>
       <p className="text-[30px]">To Do List</p>
      </Link>
      <Link className="bg-slate-800 p-2 mr-6 hover:rounded-[50px] border border-white" href={"/addTodo"}>
        <p className="text-white">Add Topic</p>
      </Link>
    </nav>
  );
}