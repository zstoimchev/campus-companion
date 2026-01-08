import {Outlet, useLocation} from "react-router-dom";
import Sidebar from "../components/layout/Sidebar.tsx";
import TopBar from "../components/layout/TopBar.tsx";

const routeTitles: Record<string, string> = {
    "/app": "Dashboard",
    "/app/events": "Events",
    "/app/groups": "Study Groups",
    "/app/ai": "AI Tools",
    "/app/settings": "Settings",
    "/app/profile": "Profile",
};

export default function DashboardLayout() {
    const location = useLocation();
    const currentTitle = routeTitles[location.pathname] || "Dashboard";

    return (
        <div className="flex h-screen bg-gray-950 text-white">
            <Sidebar />
            <div className="flex flex-col flex-1 overflow-hidden">
                <TopBar title={currentTitle} />
                <main className="flex-1 overflow-y-auto p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}