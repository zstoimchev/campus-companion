import { Users, Calendar, BookOpen, Plus } from "lucide-react";

export default function StudyGroups() {
    const groups = [
        {
            id: 1,
            name: 'Advent of Code 2025',
            description: 'Daily coding challenges and problem solving',
            members: 32,
            nextMeeting: 'Jan 10, 2026',
            category: 'Competitive Programming',
        },
        {
            id: 2,
            name: 'Web Development Study Group',
            description: 'Learning React, Next.js, and modern web technologies',
            members: 28,
            nextMeeting: 'Jan 12, 2026',
            category: 'Web Dev',
        },
        {
            id: 3,
            name: 'Machine Learning Basics',
            description: 'Exploring ML fundamentals and practical applications',
            members: 24,
            nextMeeting: 'Jan 14, 2026',
            category: 'AI/ML',
        },
    ];

    return (
        <div className="min-h-screen py-20">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold mb-4">Study Groups</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Join peer-to-peer learning groups and grow together
                    </p>
                </div>

                {/* CTA */}
                <div className="max-w-4xl mx-auto mb-12 bg-gray-900 rounded-xl border border-gray-800 p-8 text-center">
                    <h3 className="text-2xl font-bold mb-4">Want to create a study group?</h3>
                    <p className="text-gray-400 mb-6">
                        Gather students interested in the same topic and start learning together
                    </p>
                    <button className="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition-colors">
                        <Plus className="w-5 h-5 mr-2" />
                        Create Study Group
                    </button>
                </div>

                {/* Groups Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {groups.map((group) => (
                        <div
                            key={group.id}
                            className="bg-gray-900 rounded-xl border border-gray-800 hover:border-blue-500 transition-all p-6"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="p-3 rounded-lg bg-blue-500/10">
                                    <BookOpen className="w-6 h-6 text-blue-500" />
                                </div>
                                <span className="px-3 py-1 rounded-full bg-gray-800 text-gray-300 text-xs">
                  {group.category}
                </span>
                            </div>

                            <h3 className="text-xl font-bold mb-2">{group.name}</h3>
                            <p className="text-gray-400 text-sm mb-4">{group.description}</p>

                            <div className="space-y-2 text-sm text-gray-400 mb-4">
                                <div className="flex items-center gap-2">
                                    <Users className="w-4 h-4" />
                                    {group.members} members
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    Next: {group.nextMeeting}
                                </div>
                            </div>

                            <button className="w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg font-medium transition-colors">
                                Join Group
                            </button>
                        </div>
                    ))}
                </div>

                {/* Info Section */}
                <div className="max-w-4xl mx-auto mt-16 grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
                        <h3 className="text-xl font-bold mb-3">How It Works</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>• Join groups that match your interests</li>
                            <li>• Attend regular study sessions</li>
                            <li>• Collaborate on projects</li>
                            <li>• Share knowledge with peers</li>
                        </ul>
                    </div>

                    <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
                        <h3 className="text-xl font-bold mb-3">Benefits</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>• Learn from your peers</li>
                            <li>• Stay motivated together</li>
                            <li>• Build your network</li>
                            <li>• Gain practical experience</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}