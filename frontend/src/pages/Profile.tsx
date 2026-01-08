export default function Profile() {
    return (
        <div className="max-w-xl space-y-6">
            <h1 className="text-2xl font-semibold">Profile</h1>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 space-y-4">
                <div>
                    <p className="text-sm text-gray-400">Name</p>
                    <p className="font-medium">Student Name</p>
                </div>

                <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="font-medium">student@upr.si</p>
                </div>

                <div>
                    <p className="text-sm text-gray-400">University</p>
                    <p className="font-medium">University of Primorska</p>
                </div>
            </div>
        </div>
    );
}
