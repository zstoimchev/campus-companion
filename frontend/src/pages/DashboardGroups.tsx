import { Users, Calendar } from "lucide-react";

export default function DashboardGroups() {
    const groups = [
        {
            id: 1,
            name: "Advent of Code 2025",
            members: 32,
            next: "Jan 10",
        },
        {
            id: 2,
            name: "Web Dev Study Group",
            members: 28,
            next: "Jan 12",
        },
    ];

    return (
        <div className="space-y-6">
            <header>
                <h1 className="text-2xl font-semibold">Study Groups</h1>
                <p className="text-gray-400 mt-1">
                    Learn together with your peers
                </p>
            </header>

            <div className="grid md:grid-cols-2 gap-6">
                {groups.map(group => (
                    <div
                        key={group.id}
                        className="bg-gray-900 border border-gray-800 rounded-xl p-6"
                    >
                        <h3 className="font-semibold text-lg mb-2">{group.name}</h3>

                        <div className="text-sm text-gray-400 space-y-1 mb-4">
                            <p className="flex items-center gap-2">
                                <Users className="w-4 h-4" />
                                {group.members} members
                            </p>
                            <p className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                Next meeting: {group.next}
                            </p>
                        </div>

                        <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg font-medium">
                            View Group
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
