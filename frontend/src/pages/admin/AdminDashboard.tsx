import { useState } from 'react';
import {
    Calendar, Users, BookOpen, FolderOpen, Settings,
    Plus, Edit, Trash2, Eye, Search, Filter, BarChart3,
    LogOut, Menu, X
} from 'lucide-react';

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const stats = [
        { label: 'Total Events', value: '24', change: '+4 this month', icon: Calendar, color: 'bg-blue-500' },
        { label: 'Team Members', value: '9', change: '+2 this year', icon: Users, color: 'bg-green-500' },
        { label: 'Blog Posts', value: '12', change: '+3 this month', icon: BookOpen, color: 'bg-yellow-500' },
        { label: 'Projects', value: '15', change: '+5 this month', icon: FolderOpen, color: 'bg-red-500' },
    ];

    const recentEvents = [
        { id: 1, title: 'Cryptography 101', date: '2024-12-09', status: 'completed', attendees: 45 },
        { id: 2, title: 'Cybersecurity Talk', date: '2024-12-04', status: 'completed', attendees: 52 },
        { id: 3, title: 'AI Workshop', date: '2026-01-15', status: 'upcoming', attendees: 0 },
        { id: 4, title: 'Flutter Basics', date: '2026-01-22', status: 'upcoming', attendees: 0 },
    ];

    const navigationItems = [
        { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
        { id: 'events', label: 'Events', icon: Calendar },
        { id: 'team', label: 'Team', icon: Users },
        { id: 'blog', label: 'Blog', icon: BookOpen },
        { id: 'projects', label: 'Projects', icon: FolderOpen },
        { id: 'settings', label: 'Settings', icon: Settings },
    ];

    return (
        <div className="min-h-screen bg-gray-950 text-white">
            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 h-full bg-gray-900 border-r border-gray-800 transition-all duration-300 z-50 ${
                    sidebarOpen ? 'w-64' : 'w-0 md:w-20'
                }`}
            >
                <div className="flex items-center justify-between p-4 border-b border-gray-800">
                    <div className={`${!sidebarOpen && 'hidden md:hidden'}`}>
            <span className="text-xl font-bold">
              <span className="text-blue-500">&lt;</span>
              GDG Admin
              <span className="text-red-500"> /&gt;</span>
            </span>
                    </div>
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="md:hidden p-2 hover:bg-gray-800 rounded-lg"
                    >
                        {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>

                <nav className="p-4">
                    <ul className="space-y-2">
                        {navigationItems.map((item) => (
                            <li key={item.id}>
                                <button
                                    onClick={() => setActiveTab(item.id)}
                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                                        activeTab === item.id
                                            ? 'bg-blue-500 text-white'
                                            : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                                    } ${!sidebarOpen && 'md:justify-center'}`}
                                >
                                    <item.icon className="w-5 h-5 shrink-0" />
                                    <span className={`${!sidebarOpen && 'hidden md:hidden'}`}>
                    {item.label}
                  </span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-800">
                    <button className={`w-full flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-gray-800 hover:text-white rounded-lg transition-colors ${!sidebarOpen && 'md:justify-center'}`}>
                        <LogOut className="w-5 h-5 shrink-0" />
                        <span className={`${!sidebarOpen && 'hidden md:hidden'}`}>Logout</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className={`transition-all duration-300 ${sidebarOpen ? 'md:ml-64' : 'md:ml-20'}`}>
                {/* Header */}
                <header className="bg-gray-900 border-b border-gray-800 px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => setSidebarOpen(!sidebarOpen)}
                                className="p-2 hover:bg-gray-800 rounded-lg md:hidden"
                            >
                                <Menu className="w-5 h-5" />
                            </button>
                            <div>
                                <h1 className="text-2xl font-bold">Admin Dashboard</h1>
                                <p className="text-sm text-gray-400">Welcome back, Zhivko!</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="hidden sm:flex items-center gap-2 bg-gray-800 rounded-lg px-4 py-2">
                                <Search className="w-4 h-4 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="bg-transparent border-none outline-none text-sm w-48"
                                />
                            </div>
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-red-500 flex items-center justify-center font-bold">
                                ZS
                            </div>
                        </div>
                    </div>
                </header>

                {/* Content */}
                <div className="p-6">
                    {activeTab === 'dashboard' && (
                        <div className="space-y-6">
                            {/* Stats Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {stats.map((stat, index) => (
                                    <div key={index} className="bg-gray-900 rounded-xl border border-gray-800 p-6">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className={`p-3 rounded-lg ${stat.color}`}>
                                                <stat.icon className="w-6 h-6" />
                                            </div>
                                        </div>
                                        <div className="text-3xl font-bold mb-1">{stat.value}</div>
                                        <div className="text-sm text-gray-400 mb-2">{stat.label}</div>
                                        <div className="text-xs text-green-500">{stat.change}</div>
                                    </div>
                                ))}
                            </div>

                            {/* Quick Actions */}
                            <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
                                <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                    <button className="flex items-center gap-3 px-4 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors">
                                        <Plus className="w-5 h-5" />
                                        <span>New Event</span>
                                    </button>
                                    <button className="flex items-center gap-3 px-4 py-3 bg-green-500 hover:bg-green-600 rounded-lg transition-colors">
                                        <Plus className="w-5 h-5" />
                                        <span>New Blog Post</span>
                                    </button>
                                    <button className="flex items-center gap-3 px-4 py-3 bg-yellow-500 hover:bg-yellow-600 rounded-lg transition-colors">
                                        <Plus className="w-5 h-5" />
                                        <span>Add Team Member</span>
                                    </button>
                                    <button className="flex items-center gap-3 px-4 py-3 bg-red-500 hover:bg-red-600 rounded-lg transition-colors">
                                        <Plus className="w-5 h-5" />
                                        <span>New Project</span>
                                    </button>
                                </div>
                            </div>

                            {/* Recent Events */}
                            <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
                                <div className="flex items-center justify-between mb-4">
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
                                            <th className="pb-3 font-medium">Date</th>
                                            <th className="pb-3 font-medium">Status</th>
                                            <th className="pb-3 font-medium">Attendees</th>
                                            <th className="pb-3 font-medium">Actions</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {recentEvents.map((event) => (
                                            <tr key={event.id} className="border-b border-gray-800 hover:bg-gray-800/50">
                                                <td className="py-4 font-medium">{event.title}</td>
                                                <td className="py-4 text-gray-400">{event.date}</td>
                                                <td className="py-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                event.status === 'completed'
                                    ? 'bg-green-500/20 text-green-500'
                                    : 'bg-blue-500/20 text-blue-500'
                            }`}>
                              {event.status}
                            </span>
                                                </td>
                                                <td className="py-4 text-gray-400">
                                                    {event.status === 'completed' ? event.attendees : 'TBD'}
                                                </td>
                                                <td className="py-4">
                                                    <div className="flex items-center gap-2">
                                                        <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
                                                            <Eye className="w-4 h-4" />
                                                        </button>
                                                        <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
                                                            <Edit className="w-4 h-4" />
                                                        </button>
                                                        <button className="p-2 hover:bg-red-500/20 text-red-500 rounded-lg transition-colors">
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
                        </div>
                    )}

                    {activeTab === 'events' && (
                        <div className="space-y-6">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                <h2 className="text-2xl font-bold">Manage Events</h2>
                                <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors">
                                    <Plus className="w-5 h-5" />
                                    Create Event
                                </button>
                            </div>

                            <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
                                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                                    <div className="flex-1 flex items-center gap-2 bg-gray-800 rounded-lg px-4 py-2">
                                        <Search className="w-4 h-4 text-gray-400" />
                                        <input
                                            type="text"
                                            placeholder="Search events..."
                                            className="bg-transparent border-none outline-none w-full"
                                        />
                                    </div>
                                    <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                                        <Filter className="w-4 h-4" />
                                        Filters
                                    </button>
                                </div>

                                <div className="text-center py-12 text-gray-400">
                                    <Calendar className="w-16 h-16 mx-auto mb-4 opacity-50" />
                                    <p>Event management interface would go here</p>
                                    <p className="text-sm mt-2">Create, edit, and manage all your events</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab !== 'dashboard' && activeTab !== 'events' && (
                        <div className="bg-gray-900 rounded-xl border border-gray-800 p-12 text-center">
                            <h2 className="text-2xl font-bold mb-4">
                                {navigationItems.find(item => item.id === activeTab)?.label} Management
                            </h2>
                            <p className="text-gray-400 mb-6">
                                This section would contain tools to manage your {activeTab}
                            </p>
                            <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors">
                                Coming Soon
                            </button>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}