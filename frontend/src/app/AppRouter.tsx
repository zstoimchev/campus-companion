import { Routes, Route, Navigate } from "react-router-dom";

// Layouts
import Layout from "../components/layout/Layout";              // Public site
import DashboardLayout from "../components/layout/DashboardLayout";  // Dashboard with sidebar
import AdminLayout from "../components/layout/AdminLayout";     // Admin panel

// Public Pages
import HomePage from "../pages/public/Home.tsx";
// import PublicEvents from "../pages/PublicEvents";
// import PublicGroups from "../pages/PublicGroups";
// import PublicAITools from "../pages/PublicAITools";

// Dashboard Pages (Logged-in users)
import Dashboard from "../pages/Dashboard";
import Settings from "../pages/Settings";

// Admin Pages
import AdminDashboard from "../pages/admin/Dashboard";
// import AdminEvents from "../pages/admin/Events";
import AdminSettings from "../pages/admin/Settings";



import PublicLayout from "./layout/PublicLayout.tsx";
import Home from "../pages/public/Home.tsx";
import About from "../pages/public/About.tsx";
import Events from "../pages/public/Events.tsx";
import StudyGroups from "../pages/public/StudyGroups.tsx";
import GeminiTools from "../pages/public/GeminiTools.tsx";
import Login from "../pages/public/Login.tsx";

export function AppRouter() {
    return (
        <Routes>
            {/* ============================================ */}
            {/* PUBLIC ROUTES (Marketing Site) */}
            {/* Layout: Header + Footer, No Sidebar */}
            {/* ============================================ */}
            {/* Public */}
            <Route element={<PublicLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/events" element={<Events />} />
                <Route path="/groups" element={<StudyGroups />} />
                <Route path="/ai" element={<GeminiTools />} />
                <Route path="/login" element={<Login />} />
            </Route>


            {/*<Route element={<Layout />}>*/}
            {/*    <Route path="/" element={<HomePage />} />*/}
            {/*    <Route path="/events" element={<Events />} />*/}
            {/*    <Route path="/groups" element={<StudyGroups />} />*/}
            {/*    <Route path="/ai" element={<GeminiTools />} />*/}
            {/*</Route>*/}

            {/* ============================================ */}
            {/* DASHBOARD ROUTES (Logged-in Users) */}
            {/* Layout: Sidebar + TopBar */}
            {/* ============================================ */}
            {/*<Route element={<DashboardLayout />}>*/}
            {/*    <Route path="/dashboard" element={<Dashboard />} />*/}
            {/*    <Route path="/events" element={<Events />} />*/}
            {/*    <Route path="/groups" element={<StudyGroups />} />*/}
            {/*    <Route path="/ai" element={<GeminiTools />} />*/}
            {/*    <Route path="/settings" element={<Settings />} />*/}
            {/*</Route>*/}

            {/* ============================================ */}
            {/* ADMIN ROUTES */}
            {/* Layout: Admin Sidebar + Header */}
            {/* ============================================ */}
            {/*<Route path="/admin" element={<AdminLayout />}>*/}
            {/*    <Route index element={<AdminDashboard />} />*/}
            {/*    /!*<Route path="events" element={<AdminEvents />} />*!/*/}
            {/*    <Route path="settings" element={<AdminSettings />} />*/}
            {/*</Route>*/}

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}