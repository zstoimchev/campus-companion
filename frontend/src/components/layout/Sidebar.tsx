import { NavLink } from "react-router-dom";
import {
    LayoutDashboard,
    Calendar,
    Users,
    Sparkles,
    Settings,
    BookOpen,
    LogOut
} from "lucide-react";

const navItems = [
    { name: "Dashboard", path: "/app", icon: LayoutDashboard },
    { name: "Events", path: "/app/events", icon: Calendar },
    { name: "Study Groups", path: "/app/groups", icon: BookOpen },
    { name: "AI Tools", path: "/app/ai", icon: Sparkles },
    { name: "Settings", path: "/app/settings", icon: Settings },
    { name: "Profile", path: "/app/profile", icon: Users },
    { name: "Log Out", path: "/", icon: LogOut },
];

export default function Sidebar() {
    return (
        <aside className="w-73 bg-gray-900 border-r border-gray-800 h-screen sticky top-0">
            <div className="p-6 border-b border-gray-800">
                <h1 className="font-bold text-xl font-mono">
                    <span className="text-blue-500">&lt;</span>
                    <span className="text-white">Campus Companion</span>
                    <span className="text-red-500"> /&gt;</span>
                </h1>
            </div>

            <nav className="flex flex-col gap-2 p-4">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        end={item.path === "/app"} // only exact match for Dashboard
                        className={({ isActive }) =>
                            `flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                                isActive
                                    ? "bg-blue-500 text-white"
                                    : "text-gray-400 hover:bg-gray-800 hover:text-white"
                            }`
                        }
                    >
                        <item.icon className="w-5 h-5" />
                        {item.name}
                    </NavLink>
                ))}
            </nav>
        </aside>
    );
}