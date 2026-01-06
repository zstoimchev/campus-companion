import { NavLink } from "react-router-dom";


const navItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Events", path: "/events" },
    { name: "Study Groups", path: "/groups" },
    { name: "Gemini Tools", path: "/ai" },
];


export default function Sidebar() {
    return (
        <aside className="w-64 bg-white border-r">
            <div className="p-6 font-bold text-xl text-blue-600">GDG Campus</div>
            <nav className="flex flex-col gap-2 px-4">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            `rounded px-4 py-2 text-sm ${
                                isActive
                                    ? "bg-blue-100 text-blue-700"
                                    : "hover:bg-gray-100"
                            }`
                        }
                    >
                        {item.name}
                    </NavLink>
                ))}
            </nav>
        </aside>
    );
}