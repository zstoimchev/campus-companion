import { Calendar, MapPin } from "lucide-react";

export default function DashboardEvents() {
    const events = [
        {
            id: 1,
            title: "AI & Machine Learning Workshop",
            date: "Jan 15, 2026",
            location: "FAMNIT Lab 3",
            status: "registered",
        },
        {
            id: 2,
            title: "Flutter Development Basics",
            date: "Jan 22, 2026",
            location: "Room 105",
            status: "available",
        },
    ];

    return (
        <div className="space-y-6">
            <header>
                <h1 className="text-2xl font-semibold">Events</h1>
                <p className="text-gray-400 mt-1">
                    Manage your event participation
                </p>
            </header>

            <div className="grid md:grid-cols-2 gap-6">
                {events.map(event => (
                    <div
                        key={event.id}
                        className="bg-gray-900 border border-gray-800 rounded-xl p-6"
                    >
                        <h3 className="font-semibold text-lg mb-2">{event.title}</h3>

                        <div className="text-sm text-gray-400 space-y-1 mb-4">
                            <p className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                {event.date}
                            </p>
                            <p className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                {event.location}
                            </p>
                        </div>

                        {event.status === "registered" ? (
                            <span className="text-green-400 text-sm font-medium">
                You’re registered
              </span>
                        ) : (
                            <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg font-medium">
                                Register
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}