import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const { pathname } = useLocation();

  const menuItems = [
    { label: "Dashboard", path: "/adminpanel" },
    { label: "Create Item", path: "/adminpanel/create" },
    { label: "Orders", path: "/adminpanel/all-orders" },
  ];

  return (
    <aside className="md:w-64 bg-white p-4 shadow-md sticky top-[4.5rem] md:min-h-screen border-r border-indigo-100">
      <nav className="flex flex-col gap-2">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              pathname === item.path
                ? "bg-violet-600 text-white"
                : "text-indigo-700 hover:bg-violet-100"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
