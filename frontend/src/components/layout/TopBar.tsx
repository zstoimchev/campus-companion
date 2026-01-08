import { Bell, Search, User } from "lucide-react";

interface TopBarProps {
    title?: string;
}

export default function TopBar({ title = "Dashboard" }: TopBarProps) {
    return (
        <header className="h-16 bg-gray-900 border-b border-gray-800 flex items-center justify-between px-6 sticky top-0 z-10">
            <div className="flex items-center gap-4 flex-1">
                <h2 className="text-lg font-semibold text-gray-200">{title}</h2>

                {/* Search */}
                <div className="hidden md:flex items-center gap-2 bg-gray-800 rounded-lg px-4 py-2 max-w-md flex-1">
                    <Search className="w-4 h-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg-transparent border-none outline-none w-full text-sm text-white placeholder-gray-400"
                    />
                </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4">
                <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors relative">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
                </button>

                <button className="flex items-center gap-2 p-2 hover:bg-gray-800 rounded-lg transition-colors">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-red-500 flex items-center justify-center">
                        <User className="w-5 h-5" />
                    </div>
                </button>
            </div>
        </header>
    );
}
