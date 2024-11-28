/* eslint-disable @typescript-eslint/no-unused-vars */
import { FaTrashAlt } from "react-icons/fa";

export default function Home() {
  const todos: string[] = [
    "Create Guest Experience",
    "Document current CI/CD process",
    "Perform Code Review for final Pillow-Talk release",
    "Implement new Color Palette from Design Team",
    "Fix image uploading process for guest check-in",
    "Provide on-boarding documentation",
  ];

  return (
    <main className="bg-slate-950 min-h-screen  text-white pt-10">
      <section className="flex flex-col">
        <h1 className="text-center text-4xl font-bold mb-10">
          Chores ToDo List
        </h1>
        <div className="flex flex-col gap-6 mt-10  justify-between p-20">
          {todos.map((todo) => (
            <div
              className="flex justify-between items-center  p-4 rounded-lg shadow-md"
              key={todo}
            >
              <div className="flex items-center gap-12">
                <input type="checkbox" />
                <p className="text-xl">{todo}</p>
              </div>
              <button
                className="text-red-300 hover:text-red-700 focus:outline-none border-2 bg-none rounded-md p-4"
                aria-label="Delete todo"
              >
                <FaTrashAlt />
              </button>
            </div>
          ))}
        </div>
        <hr className="mt-8" />
        <section className="flex flex-col  justify-center mt-8 px-20 pb-20">
          <h1 className="text-4xl font-bold text-center">Done : 0</h1>

          <div className="flex flex-col items-start mt-[35px] gap-4">
            <p className="text-lg">Add todo</p>
            <input
              type="text"
              className="mt-2 w-full h-10 rounded-lg border border-gray-300 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-300 p-2 rounded-lg text-black font-bold  mt-4 w-28 text-lg">
              ADD TASK
            </button>
          </div>
        </section>
      </section>
    </main>
  );
}
