import { Routes, Route, Navigate } from "react-router-dom";

// Layouts
import PublicLayout from "./layouts/PublicLayout.tsx"
import DashboardLayout from "./layouts/DashboardLayout.tsx"
import AdminLayout from "./layouts/AdminLayout.tsx";

// Public Pages (Marketing)
import Home from "./pages/public/Home.tsx"
import About from "./pages/public/About.tsx"
import Events from "./pages/public/Events.tsx"
import StudyGroups from "./pages/public/StudyGroups.tsx"
import AiTools from "./pages/public/AiTools.tsx"
import Login from "./pages/public/Login.tsx"

// Dashboard Pages (Logged-in users)
import Dashboard from "./pages/dashboard/Dashboard.tsx";
import Settings from "./pages/dashboard/Settings.tsx";
import DashboardEvents from "./pages/dashboard/DashboardEvents.tsx";
import DashboardGroups from "./pages/dashboard/DashboardGroups.tsx";
import GeminiTools from "./pages/dashboard/GeminiTools.tsx";
import Profile from "./pages/dashboard/Profile.tsx";

// Admin Pages
// import AdminDashboard from "../pages/admin/AdminDashboard.tsx";
// import AdminEvents from "../pages/admin/Events";
// import AdminSettings from "../pages/admin/Settings";


export function AppRouter() {
    return (
        <Routes>
            {/* ============================================ */}
            {/* PUBLIC ROUTES (Marketing Site)               */}
            {/* ============================================ */}
            <Route path="/" element={<PublicLayout />}>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/events" element={<Events />} />
                <Route path="/groups" element={<StudyGroups />} />
                <Route path="/ai" element={<AiTools />} />
                <Route path="/login" element={<Login />} />
            </Route>

            {/* ============================================ */}
            {/* DASHBOARD ROUTES (Logged-in Users)           */}
            {/* ============================================ */}
            <Route path="/app" element={<DashboardLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="events" element={<DashboardEvents />} />
                <Route path="groups" element={<DashboardGroups />} />
                <Route path="ai" element={<GeminiTools />} />
                <Route path="settings" element={<Settings />} />
                <Route path="profile" element={<Profile />} />
            </Route>

            {/* ============================================ */}
            {/* ADMIN ROUTES                                 */}
            {/* ============================================ */}
            <Route path="/admin" element={<AdminLayout />}>
                {/*<Route index element={<AdminDashboard />} />*/}
                {/*<Route path="events" element={<AdminEvents />} />*/}
                {/*<Route path="settings" element={<AdminSettings />} />*/}
            </Route>

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}