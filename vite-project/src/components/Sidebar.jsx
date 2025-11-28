import React from "react";
import { sidebarIcons } from "../helpers/mock-data";
import { Menu } from "lucide-react";

const Sidebar = ({sidebarOpen, setSidebarOpen
}) => {
  return (
    <div
      className={`${
        sidebarOpen ? "w-72" : "w-20"
      } bg-gradient-to-b from-slate-800 to-slate-900 text-white transition-all duration-300 flex flex-col shadow-xl`}
    >
      <div className="h-20 flex items-center justify-between px-4 border-b border-slate-700">
        {sidebarOpen && (
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            DealerHub
          </h1>
        )}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="hover:bg-slate-700 p-2 rounded-lg transition cursor-pointer"
        >
          <Menu size={24} />
        </button>
      </div>
      <nav className="flex-1 space-y-3 px-3 py-6">
        {sidebarIcons.map((item, i) => (
          <div
            key={i}
            className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer transition transform hover:scale-105 ${
              i === 1
                ? "bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg"
                : "hover:bg-slate-700"
            }`}
          >
            <span className="text-2xl">{item.icon}</span>
            {sidebarOpen && <span className="font-semibold">{item.label}</span>}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
