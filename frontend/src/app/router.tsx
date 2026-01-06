import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Dashboard from "../pages/Dashboard";
import Events from "../pages/Events";
import StudyGroups from "../pages/StudyGroups";
import GeminiTools from "../pages/GeminiTools";


export function AppRouter() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Navigate to="/dashboard" />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/events" element={<Events />} />
                <Route path="/groups" element={<StudyGroups />} />
                <Route path="/ai" element={<GeminiTools />} />
            </Route>
        </Routes>
    );
}