import { useState } from "react";
import { Calendar, MapPin, Clock, Users } from "lucide-react";

export default function Events() {
    const [filter, setFilter] = useState("all");

    const events = [
        {
            id: 1,
            title: 'Cryptography 101 Workshop',
            date: '2024-12-09',
            time: '18:00',
            location: 'FAMNIT Room 201',
            type: 'Workshop',
            status: 'past',
            attendees: 45,
        },
        {
            id: 2,
            title: 'Cybersecurity Talk',
            date: '2024-12-04',
            time: '17:00',
            location: 'Main Auditorium',
            type: 'Talk',
            status: 'past',
            attendees: 52,
        },
        {
            id: 3,
            title: 'AI & Machine Learning Workshop',
            date: '2026-01-15',
            time: '18:00',
            location: 'FAMNIT Lab 3',
            type: 'Workshop',
            status: 'upcoming',
            spots: '24/30',
        },
        {
            id: 4,
            title: 'Flutter Development Basics',
            date: '2026-01-22',
            time: '17:30',
            location: 'FAMNIT Room 105',
            type: 'Workshop',
            status: 'upcoming',
            spots: '18/35',
        },
    ];

    const filteredEvents = filter === "all"
        ? events
        : events.filter(e => e.status === filter);

    return (
        <div className="min-h-screen py-20">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold mb-4">Events</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Join workshops, talks, and networking events
                    </p>
                </div>

                {/* Filters */}
                <div className="flex items-center justify-center gap-4 mb-12">
                    <button
                        onClick={() => setFilter("all")}
                        className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
                            filter === "all"
                                ? "bg-blue-500 text-white"
                                : "bg-gray-900 text-gray-400 border border-gray-800"
                        }`}
                    >
                        All Events
                    </button>
                    <button
                        onClick={() => setFilter("upcoming")}
                        className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
                            filter === "upcoming"
                                ? "bg-green-500 text-white"
                                : "bg-gray-900 text-gray-400 border border-gray-800"
                        }`}
                    >
                        Upcoming
                    </button>
                    <button
                        onClick={() => setFilter("past")}
                        className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
                            filter === "past"
                                ? "bg-yellow-500 text-black"
                                : "bg-gray-900 text-gray-400 border border-gray-800"
                        }`}
                    >
                        Past
                    </button>
                </div>

                {/* Events Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredEvents.map((event) => (
                        <div
                            key={event.id}
                            className="bg-gray-900 rounded-xl border border-gray-800 hover:border-blue-500 transition-all overflow-hidden"
                        >
                            {/* Image Placeholder */}
                            <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-red-500/20 flex items-center justify-center">
                                <Calendar className="w-20 h-20 text-white/10" />
                            </div>

                            <div className="p-6">
                <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-500 text-xs font-medium mb-3">
                  {event.type}
                </span>

                                <h3 className="text-xl font-bold mb-3">{event.title}</h3>

                                <div className="space-y-2 text-sm text-gray-400 mb-4">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4" />
                                        {event.date}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4" />
                                        {event.time}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4" />
                                        {event.location}
                                    </div>
                                    {event.status === 'upcoming' && (
                                        <div className="flex items-center gap-2">
                                            <Users className="w-4 h-4" />
                                            {event.spots} spots
                                        </div>
                                    )}
                                    {event.status === 'past' && (
                                        <div className="flex items-center gap-2">
                                            <Users className="w-4 h-4" />
                                            {event.attendees} attended
                                        </div>
                                    )}
                                </div>

                                {event.status === 'upcoming' && (
                                    <button className="w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg font-medium transition-colors">
                                        Register
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}