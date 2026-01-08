import {Calendar, Users, Sparkles, ArrowRight, type LucideIcon} from "lucide-react";
import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <div className="space-y-8">
            {/* Page Header */}
            <div>
                <h1 className="text-2xl font-semibold">Dashboard</h1>
                <p className="text-gray-400 mt-1">
                    Welcome back 👋 Here’s what’s happening on campus.
                </p>
            </div>

            {/* Stats */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <StatCard
                    icon={Calendar}
                    title="Upcoming Events"
                    value="2"
                    color="blue"
                />
                <StatCard
                    icon={Users}
                    title="My Study Groups"
                    value="3"
                    color="red"
                />
                <StatCard
                    icon={Sparkles}
                    title="AI Tools"
                    value="4"
                    color="green"
                />
            </div>

            {/* Upcoming Events */}
            <section className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h2 className="text-lg font-semibold mb-4">Upcoming Events</h2>

                <ul className="space-y-3">
                    <li className="flex items-center justify-between">
                        <div>
                            <p className="font-medium">AI & Machine Learning Workshop</p>
                            <p className="text-sm text-gray-400">Jan 15 · FAMNIT Lab 3</p>
                        </div>
                        <span className="text-sm text-blue-400">Registered</span>
                    </li>

                    <li className="flex items-center justify-between">
                        <div>
                            <p className="font-medium">Flutter Development Basics</p>
                            <p className="text-sm text-gray-400">Jan 22 · Room 105</p>
                        </div>
                        <span className="text-sm text-blue-400">Registered</span>
                    </li>
                </ul>

                <Link
                    to="/app/events"
                    className="inline-flex items-center mt-4 text-blue-400 hover:underline text-sm"
                >
                    View all events
                    <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
            </section>
        </div>
    );
}

type StatCardProps = {
    icon: LucideIcon;
    title: string;
    value: string | number;
    color: "blue" | "red" | "green";
};

function StatCard({ icon: Icon, title, value, color }: StatCardProps) {
    const colors: Record<StatCardProps["color"], string> = {
        blue: "text-blue-400 bg-blue-500/10",
        red: "text-red-400 bg-red-500/10",
        green: "text-green-400 bg-green-500/10",
    };

    return (
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 flex items-center gap-4">
            <div className={`p-3 rounded-lg ${colors[color]}`}>
                <Icon className="w-5 h-5" />
            </div>

            <div>
                <p className="text-sm text-gray-400">{title}</p>
                <p className="text-2xl font-semibold">{value}</p>
            </div>
        </div>
    );
}