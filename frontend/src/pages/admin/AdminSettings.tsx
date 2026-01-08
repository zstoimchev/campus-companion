// =====================================================
// FILE: src/pages/admin/SettingsPage.tsx
// =====================================================
import { Save, Globe, Bell, Users, Mail, Shield, Database, Palette } from 'lucide-react';
import { useState } from 'react';

export default function SettingsPage() {
    const [activeSection, setActiveSection] = useState('general');

    const sections = [
        { id: 'general', label: 'General', icon: Globe },
        { id: 'notifications', label: 'Notifications', icon: Bell },
        { id: 'team', label: 'Team Settings', icon: Users },
        { id: 'email', label: 'Email', icon: Mail },
        { id: 'security', label: 'Security', icon: Shield },
        { id: 'data', label: 'Data & Privacy', icon: Database },
        { id: 'appearance', label: 'Appearance', icon: Palette },
    ];

    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold mb-1">Settings</h1>
                <p className="text-gray-400">Manage your GDG organization settings</p>
            </div>

            <div className="grid lg:grid-cols-4 gap-6">
                {/* Settings Navigation */}
                <div className="lg:col-span-1">
                    <div className="bg-gray-900 rounded-xl border border-gray-800 p-2">
                        {sections.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => setActiveSection(section.id)}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-left ${
                                    activeSection === section.id
                                        ? 'bg-blue-500 text-white'
                                        : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                                }`}
                            >
                                <section.icon className="w-5 h-5" />
                                <span className="font-medium">{section.label}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Settings Content */}
                <div className="lg:col-span-3">
                    {activeSection === 'general' && <GeneralSettings />}
                    {activeSection === 'notifications' && <NotificationSettings />}
                    {activeSection === 'team' && <TeamSettings />}
                    {activeSection === 'email' && <EmailSettings />}
                    {activeSection === 'security' && <SecuritySettings />}
                    {activeSection === 'data' && <DataSettings />}
                    {activeSection === 'appearance' && <AppearanceSettings />}
                </div>
            </div>
        </div>
    );
}

function GeneralSettings() {
    return (
        <div className="space-y-6">
            <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
                <h2 className="text-xl font-bold mb-6">General Settings</h2>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-2">Organization Name</label>
                        <input
                            type="text"
                            defaultValue="GDG on Campus - University of Primorska"
                            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white outline-none focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">Description</label>
                        <textarea
                            rows={4}
                            defaultValue="A peer-to-peer learning environment for students at University of Primorska"
                            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white outline-none focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">Contact Email</label>
                        <input
                            type="email"
                            defaultValue="gdgoncampus.up@gmail.com"
                            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white outline-none focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">Location</label>
                        <input
                            type="text"
                            defaultValue="Koper, Slovenia"
                            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white outline-none focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">Website URL</label>
                        <input
                            type="url"
                            defaultValue="https://gdg-primorska.com"
                            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white outline-none focus:border-blue-500"
                        />
                    </div>
                </div>

                <button className="mt-6 flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors font-medium">
                    <Save className="w-4 h-4" />
                    Save Changes
                </button>
            </div>

            <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
                <h3 className="font-bold mb-4">Social Media Links</h3>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-2">Instagram</label>
                        <input
                            type="text"
                            defaultValue="@gdsc.primorska"
                            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white outline-none focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">GitHub</label>
                        <input
                            type="text"
                            defaultValue="github.com/gdg-primorska"
                            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white outline-none focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">LinkedIn</label>
                        <input
                            type="text"
                            placeholder="linkedin.com/company/gdg-primorska"
                            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white outline-none focus:border-blue-500"
                        />
                    </div>
                </div>

                <button className="mt-6 flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors font-medium">
                    <Save className="w-4 h-4" />
                    Save Links
                </button>
            </div>
        </div>
    );
}

function NotificationSettings() {
    return (
        <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
            <h2 className="text-xl font-bold mb-6">Notification Settings</h2>

            <div className="space-y-6">
                <div>
                    <h3 className="font-semibold mb-4">Event Notifications</h3>
                    <div className="space-y-3">
                        <label className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                            <span>New event registration</span>
                            <input type="checkbox" defaultChecked className="w-5 h-5" />
                        </label>
                        <label className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                            <span>Event reminder (24h before)</span>
                            <input type="checkbox" defaultChecked className="w-5 h-5" />
                        </label>
                        <label className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                            <span>Event completion</span>
                            <input type="checkbox" className="w-5 h-5" />
                        </label>
                    </div>
                </div>

                <div>
                    <h3 className="font-semibold mb-4">Team Notifications</h3>
                    <div className="space-y-3">
                        <label className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                            <span>New team member added</span>
                            <input type="checkbox" defaultChecked className="w-5 h-5" />
                        </label>
                        <label className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                            <span>Team member updates</span>
                            <input type="checkbox" className="w-5 h-5" />
                        </label>
                    </div>
                </div>

                <div>
                    <h3 className="font-semibold mb-4">Content Notifications</h3>
                    <div className="space-y-3">
                        <label className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                            <span>New blog post published</span>
                            <input type="checkbox" defaultChecked className="w-5 h-5" />
                        </label>
                        <label className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                            <span>New project added</span>
                            <input type="checkbox" defaultChecked className="w-5 h-5" />
                        </label>
                    </div>
                </div>
            </div>

            <button className="mt-6 flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors font-medium">
                <Save className="w-4 h-4" />
                Save Preferences
            </button>
        </div>
    );
}

function TeamSettings() {
    return (
        <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
            <h2 className="text-xl font-bold mb-6">Team Settings</h2>

            <div className="space-y-6">
                <div>
                    <h3 className="font-semibold mb-4">Team Permissions</h3>
                    <div className="space-y-3">
                        <div className="p-4 bg-gray-800 rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                                <span className="font-medium">Team Lead</span>
                                <span className="text-sm text-green-500">Full Access</span>
                            </div>
                            <p className="text-sm text-gray-400">Can manage all aspects of the organization</p>
                        </div>
                        <div className="p-4 bg-gray-800 rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                                <span className="font-medium">Core Team</span>
                                <span className="text-sm text-blue-500">Limited Access</span>
                            </div>
                            <p className="text-sm text-gray-400">Can manage events, blog posts, and projects</p>
                        </div>
                        <div className="p-4 bg-gray-800 rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                                <span className="font-medium">Support</span>
                                <span className="text-sm text-yellow-500">View Only</span>
                            </div>
                            <p className="text-sm text-gray-400">Can view content but not edit</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="font-semibold mb-4">Team Size Limits</h3>
                    <div className="p-4 bg-gray-800 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                            <span>Current team size</span>
                            <span className="font-bold">9 / 15</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                            <div className="bg-blue-500 h-2 rounded-full" style={{ width: '60%' }} />
                        </div>
                    </div>
                </div>
            </div>

            <button className="mt-6 flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors font-medium">
                <Save className="w-4 h-4" />
                Update Settings
            </button>
        </div>
    );
}

function EmailSettings() {
    return (
        <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
            <h2 className="text-xl font-bold mb-6">Email Settings</h2>
            <p className="text-gray-400 mb-6">Configure email templates and settings for automated emails</p>

            <div className="space-y-4">
                <div className="p-4 bg-gray-800 rounded-lg">
                    <h3 className="font-semibold mb-2">Event Confirmation Email</h3>
                    <p className="text-sm text-gray-400 mb-3">Sent when someone registers for an event</p>
                    <button className="text-blue-500 hover:text-blue-400 text-sm font-medium">
                        Edit Template →
                    </button>
                </div>

                <div className="p-4 bg-gray-800 rounded-lg">
                    <h3 className="font-semibold mb-2">Event Reminder Email</h3>
                    <p className="text-sm text-gray-400 mb-3">Sent 24 hours before an event</p>
                    <button className="text-blue-500 hover:text-blue-400 text-sm font-medium">
                        Edit Template →
                    </button>
                </div>

                <div className="p-4 bg-gray-800 rounded-lg">
                    <h3 className="font-semibold mb-2">Newsletter Template</h3>
                    <p className="text-sm text-gray-400 mb-3">Monthly newsletter to community members</p>
                    <button className="text-blue-500 hover:text-blue-400 text-sm font-medium">
                        Edit Template →
                    </button>
                </div>
            </div>
        </div>
    );
}

function SecuritySettings() {
    return (
        <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
            <h2 className="text-xl font-bold mb-6">Security Settings</h2>

            <div className="space-y-6">
                <div>
                    <h3 className="font-semibold mb-4">Authentication</h3>
                    <div className="space-y-3">
                        <label className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                            <span>Two-factor authentication</span>
                            <input type="checkbox" className="w-5 h-5" />
                        </label>
                        <label className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                            <span>Require password change every 90 days</span>
                            <input type="checkbox" className="w-5 h-5" />
                        </label>
                    </div>
                </div>

                <div>
                    <h3 className="font-semibold mb-4">Session Management</h3>
                    <div className="p-4 bg-gray-800 rounded-lg">
                        <p className="text-sm text-gray-400 mb-3">Active sessions: 3</p>
                        <button className="text-red-500 hover:text-red-400 text-sm font-medium">
                            Revoke All Sessions
                        </button>
                    </div>
                </div>

                <div>
                    <h3 className="font-semibold mb-4">API Keys</h3>
                    <button className="w-full p-4 border-2 border-dashed border-gray-700 rounded-lg hover:border-blue-500 transition-colors text-gray-400 hover:text-white">
                        + Generate New API Key
                    </button>
                </div>
            </div>
        </div>
    );
}

function DataSettings() {
    return (
        <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
            <h2 className="text-xl font-bold mb-6">Data & Privacy</h2>

            <div className="space-y-6">
                <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                    <h3 className="font-semibold mb-2 text-blue-400">Data Export</h3>
                    <p className="text-sm text-gray-400 mb-4">Download all your organization data</p>
                    <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors text-sm font-medium">
                        Request Data Export
                    </button>
                </div>

                <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                    <h3 className="font-semibold mb-2 text-yellow-400">Data Retention</h3>
                    <p className="text-sm text-gray-400 mb-4">Configure how long data is stored</p>
                    <select className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white outline-none">
                        <option>Keep forever</option>
                        <option>1 year</option>
                        <option>2 years</option>
                        <option>5 years</option>
                    </select>
                </div>

                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                    <h3 className="font-semibold mb-2 text-red-400">Danger Zone</h3>
                    <p className="text-sm text-gray-400 mb-4">Permanently delete all organization data</p>
                    <button className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg transition-colors text-sm font-medium">
                        Delete Organization
                    </button>
                </div>
            </div>
        </div>
    );
}

function AppearanceSettings() {
    return (
        <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
            <h2 className="text-xl font-bold mb-6">Appearance Settings</h2>

            <div className="space-y-6">
                <div>
                    <h3 className="font-semibold mb-4">Theme</h3>
                    <div className="grid grid-cols-3 gap-4">
                        <button className="p-4 bg-gray-800 rounded-lg border-2 border-blue-500 hover:bg-gray-700 transition-colors">
                            <div className="w-full h-20 bg-gradient-to-br from-gray-900 to-gray-800 rounded mb-2" />
                            <span className="text-sm">Dark (Active)</span>
                        </button>
                        <button className="p-4 bg-gray-800 rounded-lg border-2 border-transparent hover:border-gray-600 transition-colors opacity-50 cursor-not-allowed">
                            <div className="w-full h-20 bg-gradient-to-br from-gray-100 to-white rounded mb-2" />
                            <span className="text-sm">Light (Soon)</span>
                        </button>
                        <button className="p-4 bg-gray-800 rounded-lg border-2 border-transparent hover:border-gray-600 transition-colors opacity-50 cursor-not-allowed">
                            <div className="w-full h-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 rounded mb-2" />
                            <span className="text-sm">Auto (Soon)</span>
                        </button>
                    </div>
                </div>

                <div>
                    <h3 className="font-semibold mb-4">Brand Colors</h3>
                    <div className="grid grid-cols-4 gap-4">
                        <div>
                            <label className="block text-sm mb-2">Blue</label>
                            <input type="color" defaultValue="#4285F4" className="w-full h-10 rounded" />
                        </div>
                        <div>
                            <label className="block text-sm mb-2">Red</label>
                            <input type="color" defaultValue="#EA4335" className="w-full h-10 rounded" />
                        </div>
                        <div>
                            <label className="block text-sm mb-2">Yellow</label>
                            <input type="color" defaultValue="#FBBC04" className="w-full h-10 rounded" />
                        </div>
                        <div>
                            <label className="block text-sm mb-2">Green</label>
                            <input type="color" defaultValue="#34A853" className="w-full h-10 rounded" />
                        </div>
                    </div>
                </div>
            </div>

            <button className="mt-6 flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors font-medium">
                <Save className="w-4 h-4" />
                Save Appearance
            </button>
        </div>
    );
}