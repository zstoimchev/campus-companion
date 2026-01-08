export default function Settings() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Settings</h1>

            <div className="grid gap-6 max-w-4xl">
                <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
                    <h2 className="text-xl font-bold mb-4">Profile Settings</h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-2">Name</label>
                            <input
                                type="text"
                                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 outline-none focus:border-blue-500"
                                placeholder="Your name"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Email</label>
                            <input
                                type="email"
                                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 outline-none focus:border-blue-500"
                                placeholder="your@email.com"
                            />
                        </div>
                    </div>
                </div>

                <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
                    <h2 className="text-xl font-bold mb-4">Notifications</h2>
                    <div className="space-y-3">
                        <label className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                            <span>Email notifications</span>
                            <input type="checkbox" className="w-5 h-5" />
                        </label>
                        <label className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                            <span>Event reminders</span>
                            <input type="checkbox" defaultChecked className="w-5 h-5" />
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}