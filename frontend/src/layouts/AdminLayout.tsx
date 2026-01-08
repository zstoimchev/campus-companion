import { Outlet, NavLink } from "react-router-dom";
import { useState } from "react";
import {
    Calendar, Settings, BarChart3,
    LogOut, Menu, X, Sparkles, BookOpen
} from "lucide-react";

const navigationItems = [
    { to: "/admin", label: "Dashboard", icon: BarChart3 },
    { to: "/admin/events", label: "Events", icon: Calendar },
    { to: "/admin/groups", label: "Study Groups", icon: BookOpen },
    { to: "/admin/ai", label: "AI Tools", icon: Sparkles },
    { to: "/admin/settings", label: "Settings", icon: Settings },
];

export default function AdminLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    return (
        <div className="min-h-screen bg-gray-950 text-white">
            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 h-full bg-gray-900 border-r border-gray-800 transition-all duration-300 z-50 ${
                    sidebarOpen ? "w-64" : "w-20"
                }`}
            >
                <div className="flex items-center justify-between p-4 border-b border-gray-800">
                    {sidebarOpen && (
                        <span className="text-xl font-bold">
              <span className="text-blue-500">&lt;</span>
              GDG Admin
              <span className="text-red-500"> /&gt;</span>
            </span>
                    )}
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="p-2 hover:bg-gray-800 rounded-lg"
                    >
                        {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>

                <nav className="p-4 space-y-2">
                    {navigationItems.map((item) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            end={item.to === "/admin"}
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                                    isActive
                                        ? "bg-blue-500 text-white"
                                        : "text-gray-400 hover:bg-gray-800 hover:text-white"
                                } ${!sidebarOpen ? "justify-center" : ""}`
                            }
                        >
                            <item.icon className="w-5 h-5 shrink-0" />
                            {sidebarOpen && <span>{item.label}</span>}
                        </NavLink>
                    ))}
                </nav>

                <div className="absolute bottom-0 w-full p-4 border-t border-gray-800">
                    <button
                        className={`flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-gray-800 rounded-lg w-full transition-colors ${
                            !sidebarOpen ? "justify-center" : ""
                        }`}
                    >
                        <LogOut className="w-5 h-5 shrink-0" />
                        {sidebarOpen && "Logout"}
                    </button>
                </div>
            </aside>

            {/* Main */}
            <main
                className={`transition-all duration-300 ${
                    sidebarOpen ? "ml-64" : "ml-20"
                }`}
            >
                <header className="bg-gray-900 border-b border-gray-800 px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl font-bold">Admin Panel</h1>
                            <p className="text-sm text-gray-400">Welcome back!</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-red-500 flex items-center justify-center font-bold text-sm">
                            ZS
                        </div>
                    </div>
                </header>
                <div className="p-6">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}