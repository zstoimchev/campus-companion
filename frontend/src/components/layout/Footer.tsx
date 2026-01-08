import { NavLink } from "react-router-dom";

interface FooterProps {
    variant?: "light" | "dark";
}

const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Events", path: "/events" },
    { name: "Study Groups", path: "/groups" },
    { name: "AI Tools", path: "/ai" },
];

export default function Footer({ variant = "dark" }: FooterProps) {
    const isDark = variant === "dark";

    return (
        <footer className={`${isDark ? "bg-gray-900 text-white" : "bg-white text-gray-900"} border-t ${
            isDark ? "border-gray-800" : "border-gray-200"
        }`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* About */}
                    <div className="md:col-span-2">
                        <h3 className="text-xl font-mono font-bold mb-4">
                            <span className="text-blue-500">&lt;</span>
                            <span>GDG Campus</span>
                            <span className="text-red-500"> /&gt;</span>
                        </h3>
                        <p className={`${isDark ? "text-gray-400" : "text-gray-600"} mb-4 max-w-md`}>
                            A peer-to-peer learning platform for students at University of Primorska.
                            Join our community to learn, build, and grow together.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold mb-4 text-blue-500">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((item) => (
                                <li key={item.path}>
                                    <NavLink
                                        to={item.path}
                                        className={`${isDark ? "text-gray-400 hover:text-blue-500" : "text-gray-600 hover:text-blue-600"} transition-colors text-sm`}
                                    >
                                        {item.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="font-semibold mb-4 text-green-500">Connect</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a
                                    href="https://instagram.com/gdsc.primorska"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`${isDark ? "text-gray-400 hover:text-red-500" : "text-gray-600 hover:text-red-600"} transition-colors`}
                                >
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/gdg-primorska"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`${isDark ? "text-gray-400 hover:text-blue-500" : "text-gray-600 hover:text-blue-600"} transition-colors`}
                                >
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:gdgoncampus.up@gmail.com"
                                    className={`${isDark ? "text-gray-400 hover:text-yellow-500" : "text-gray-600 hover:text-yellow-600"} transition-colors`}
                                >
                                    Email
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className={`border-t ${isDark ? "border-gray-800" : "border-gray-200"} pt-8 text-center text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    <p>© {new Date().getFullYear()} GDG on Campus University of Primorska. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}