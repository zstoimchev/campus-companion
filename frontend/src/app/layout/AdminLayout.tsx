import { Outlet } from "react-router-dom";
import Sidebar from "../../components/layout/Sidebar.tsx";
import TopBar from "../../components/layout/TopBar.tsx";

export default function AdminLayout() {
    return (
        <div className="flex h-screen bg-gray-950 text-white">
            <Sidebar />
            <div className="flex flex-col flex-1 overflow-hidden">
                <TopBar />
                <main className="flex-1 overflow-y-auto p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}