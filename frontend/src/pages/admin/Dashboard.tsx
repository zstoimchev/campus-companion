// =====================================================
// FILE: src/pages/admin/DashboardPage.tsx
// =====================================================
import { Calendar, Users, BookOpen, FolderOpen, Plus, Eye, Edit, Trash2, TrendingUp } from 'lucide-react';

export default function DashboardPage() {
    const stats = [
        {
            label: 'Total Events',
            value: '24',
            change: '+4 this month',
            trend: '+12%',
            icon: Calendar,
            color: 'bg-blue-500'
        },
        {
            label: 'Team Members',
            value: '9',
            change: '+2 this year',
            trend: '+28%',
            icon: Users,
            color: 'bg-green-500'
        },
        {
            label: 'Blog Posts',
            value: '12',
            change: '+3 this month',
            trend: '+33%',
            icon: BookOpen,
            color: 'bg-yellow-500'
        },
        {
            label: 'Projects',
            value: '15',
            change: '+5 this month',
            trend: '+50%',
            icon: FolderOpen,
            color: 'bg-red-500'
        },
    ];

    const recentEvents = [
        {
            id: 1,
            title: 'Cryptography 101',
            date: '2024-12-09',
            status: 'completed',
            attendees: 45,
            type: 'Workshop'
        },
        {
            id: 2,
            title: 'Cybersecurity Talk',
            date: '2024-12-04',
            status: 'completed',
            attendees: 52,
            type: 'Talk'
        },
        {
            id: 3,
            title: 'AI Workshop',
            date: '2026-01-15',
            status: 'upcoming',
            attendees: 0,
            type: 'Workshop'
        },
        {
            id: 4,
            title: 'Flutter Basics',
            date: '2026-01-22',
            status: 'upcoming',
            attendees: 0,
            type: 'Workshop'
        },
    ];

    const recentActivity = [
        { action: 'New event created', item: 'AI Workshop', time: '2 hours ago', user: 'Zhivko' },
        { action: 'Blog post published', item: 'Getting Started with Firebase', time: '5 hours ago', user: 'Emilija' },
        { action: 'Team member added', item: 'New Designer', time: '1 day ago', user: 'David' },
        { action: 'Event completed', item: 'Cryptography 101', time: '2 days ago', user: 'System' },
    ];

    return (
        <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-gray-900 rounded-xl border border-gray-800 p-6 hover:border-gray-700 transition-colors">
                        <div className="flex items-start justify-between mb-4">
                            <div className={`p-3 rounded-lg ${stat.color}`}>
                                <stat.icon className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex items-center gap-1 text-green-500 text-sm">
                                <TrendingUp className="w-4 h-4" />
                                <span>{stat.trend}</span>
                            </div>
                        </div>
                        <div className="text-3xl font-bold mb-1">{stat.value}</div>
                        <div className="text-sm text-gray-400 mb-2">{stat.label}</div>
                        <div className="text-xs text-gray-500">{stat.change}</div>
                    </div>
                ))}
            </div>

            {/* Quick Actions */}
            <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
                <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <button className="flex items-center justify-center gap-3 px-4 py-4 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors font-medium">
                        <Plus className="w-5 h-5" />
                        <span>New Event</span>
                    </button>
                    <button className="flex items-center justify-center gap-3 px-4 py-4 bg-green-500 hover:bg-green-600 rounded-lg transition-colors font-medium">
                        <Plus className="w-5 h-5" />
                        <span>New Blog Post</span>
                    </button>
                    <button className="flex items-center justify-center gap-3 px-4 py-4 bg-yellow-500 hover:bg-yellow-600 rounded-lg transition-colors font-medium">
                        <Plus className="w-5 h-5" />
                        <span>Add Member</span>
                    </button>
                    <button className="flex items-center justify-center gap-3 px-4 py-4 bg-red-500 hover:bg-red-600 rounded-lg transition-colors font-medium">
                        <Plus className="w-5 h-5" />
                        <span>New Project</span>
                    </button>
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
                {/* Recent Events - Takes 2 columns */}
                <div className="lg:col-span-2 bg-gray-900 rounded-xl border border-gray-800 p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold">Recent Events</h2>
                        <button className="text-blue-500 hover:text-blue-400 text-sm font-medium">
                            View All →
                        </button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                            <tr className="text-left text-sm text-gray-400 border-b border-gray-800">
                                <th className="pb-3 font-medium">Event</th>
                                <th className="pb-3 font-medium hidden sm:table-cell">Date</th>
                                <th className="pb-3 font-medium">Status</th>
                                <th className="pb-3 font-medium hidden md:table-cell">Attendees</th>
                                <th className="pb-3 font-medium">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {recentEvents.map((event) => (
                                <tr key={event.id} className="border-b border-gray-800 hover:bg-gray-800/50 transition-colors">
                                    <td className="py-4">
                                        <div className="font-medium">{event.title}</div>
                                        <div className="text-xs text-gray-500 sm:hidden">{event.date}</div>
                                    </td>
                                    <td className="py-4 text-gray-400 text-sm hidden sm:table-cell">
                                        {event.date}
                                    </td>
                                    <td className="py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          event.status === 'completed'
                              ? 'bg-green-500/20 text-green-500'
                              : 'bg-blue-500/20 text-blue-500'
                      }`}>
                        {event.status}
                      </span>
                                    </td>
                                    <td className="py-4 text-gray-400 text-sm hidden md:table-cell">
                                        {event.status === 'completed' ? event.attendees : 'TBD'}
                                    </td>
                                    <td className="py-4">
                                        <div className="flex items-center gap-2">
                                            <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors" title="View">
                                                <Eye className="w-4 h-4" />
                                            </button>
                                            <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors" title="Edit">
                                                <Edit className="w-4 h-4" />
                                            </button>
                                            <button className="p-2 hover:bg-red-500/20 text-red-500 rounded-lg transition-colors" title="Delete">
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Recent Activity - Takes 1 column */}
                <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
                    <h2 className="text-xl font-bold mb-6">Recent Activity</h2>
                    <div className="space-y-4">
                        {recentActivity.map((activity, index) => (
                            <div key={index} className="flex gap-3">
                                <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0" />
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-200">{activity.action}</p>
                                    <p className="text-sm text-gray-400 truncate">{activity.item}</p>
                                    <div className="flex items-center gap-2 mt-1">
                                        <span className="text-xs text-gray-500">{activity.time}</span>
                                        <span className="text-xs text-gray-600">•</span>
                                        <span className="text-xs text-gray-500">{activity.user}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Community Stats */}
            <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
                <h2 className="text-xl font-bold mb-6">Community Growth</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                        <div className="text-3xl font-bold text-blue-500 mb-2">282+</div>
                        <div className="text-sm text-gray-400">Total Members</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-green-500 mb-2">45</div>
                        <div className="text-sm text-gray-400">Avg Attendance</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-yellow-500 mb-2">24</div>
                        <div className="text-sm text-gray-400">Events Hosted</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-red-500 mb-2">4.8</div>
                        <div className="text-sm text-gray-400">Avg Rating</div>
                    </div>
                </div>
            </div>
        </div>
    );
}