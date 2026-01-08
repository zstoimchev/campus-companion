import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

interface HeaderProps {
    variant?: "light" | "dark";
}

const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Events", path: "/events" },
    { name: "Groups", path: "/groups" },
    { name: "AI", path: "/ai" },
];

export default function Header({ variant = "dark" }: HeaderProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const isDark = variant === "dark";

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 ${
            isDark ? "bg-gray-900/95 text-white" : "bg-white text-gray-900"
        } backdrop-blur-md border-b ${isDark ? "border-gray-800" : "border-gray-200"}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <NavLink to="/" className="flex items-center space-x-2 group">
            <span className="text-xl sm:text-2xl font-mono font-bold">
              <span className="text-blue-500">&lt;</span>
              <span className={`${isDark ? "text-white" : "text-gray-900"} group-hover:text-blue-500 transition-colors`}>
                GDG Campus
              </span>
              <span className="text-red-500"> /&gt;</span>
            </span>
                    </NavLink>

                    {/* Desktop Nav */}
                    <nav className="hidden md:block">
                        <ul className="flex items-center space-x-8">
                            {navItems.map((item) => (
                                <li key={item.path}>
                                    <NavLink
                                        to={item.path}
                                        end={item.path === "/"}
                                        className={({ isActive }) =>
                                            `font-medium transition-colors ${
                                                isActive
                                                    ? "text-blue-500"
                                                    : isDark ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"
                                            }`
                                        }
                                    >
                                        {item.name}
                                    </NavLink>
                                </li>
                            ))}
                            <li>
                                <NavLink
                                    to="/login"
                                    className="inline-flex items-center px-6 py-2.5 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium transition-all"
                                >
                                    Join Community
                                </NavLink>

                            </li>
                        </ul>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className={`md:hidden p-2 rounded-lg transition-colors ${
                            isDark ? "hover:bg-gray-800" : "hover:bg-gray-100"
                        }`}
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Nav */}
                {mobileMenuOpen && (
                    <div className={`md:hidden py-4 border-t ${isDark ? "border-gray-800" : "border-gray-200"}`}>
                        <ul className="space-y-2">
                            {navItems.map((item) => (
                                <li key={item.path}>
                                    <NavLink
                                        to={item.path}
                                        end={item.path === "/"}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={({ isActive }) =>
                                            `block px-4 py-3 rounded-lg transition-colors ${
                                                isActive
                                                    ? "bg-blue-500 text-white"
                                                    : isDark ? "hover:bg-gray-800" : "hover:bg-gray-100"
                                            }`
                                        }
                                    >
                                        {item.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </header>
    );
}