import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { House, CircleUserRound, SquarePen, Sparkles, Compass } from "lucide-react";
import AI from "../ai/DraggablePostBox";

export default function Sidebar() {
  const location = useLocation();
  const [modal, setModal] = useState(false);

  const items = [
    { id: "home", icon: House, path: "/" },
    { id: "profile", icon: CircleUserRound },
    { id: "write", icon: SquarePen, path: "/write" },
    { id: "discover", icon: Compass },
    { id: "spark", icon: Sparkles },
  ];

  return (
    
    <aside className="w-30 min-w-20 flex-none h-screen bg-gray-50 border-r border-gray-200 p-4">
      <nav className="flex flex-col gap-2">
        {items.map(({ id, icon: Icon, path }) => {
          if (id === "spark") {
            return (
              <button
                key={id}
                onClick={() => setModal(!modal)}
                className={`flex flex-col items-center gap-3 px-3 py-2 rounded-md text-sm font-medium
                  text-gray-600 hover:bg-gray-100`}
              >
                <Icon className="w-5 h-5" />
              </button>
            );
          } else if (path) {
            return (
              <Link
                key={id}
                to={path}
                className={`flex flex-col items-center gap-3 px-3 py-2 rounded-md text-sm font-medium
                  ${location.pathname === path ? "bg-gray-200 text-gray-900" : "text-gray-600 hover:bg-gray-100"}`}
              >
                <Icon className="w-5 h-5" />
              </Link>
            );
          } else {
            return (
              <button
                key={id}
                className="flex flex-col items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-gray-600 cursor-not-allowed"
              >
                <Icon className="w-5 h-5" />
              </button>
            );
          }
        })}
      </nav>

      {modal && (
        <div className="mt-4">
          <AI />
        </div>
      )}
    </aside>
  );
}