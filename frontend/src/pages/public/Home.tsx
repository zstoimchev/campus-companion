import { Link } from "react-router-dom";
import { Calendar, Users, Code, ArrowRight } from "lucide-react";

export default function Home() {
    return (
        <div>
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-red-500/10 to-yellow-500/10" />

                <div className="relative z-10 container mx-auto px-4 text-center">
                    <h1 className="text-6xl font-bold mb-6">
                        <span className="block font-mono text-blue-500">&lt;</span>
                        <span className="block bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
              Campus Companion
            </span>
                        <span className="block font-mono text-red-500">/&gt;</span>
                    </h1>

                    <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                        Your all-in-one platform for campus events, study groups, and AI-powered student tools
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            to="/dashboard"
                            className="inline-flex items-center px-8 py-4 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold transition-all"
                        >
                            Get Started
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>

                        <Link
                            to="/public/events"
                            className="inline-flex items-center px-8 py-4 rounded-lg border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-semibold transition-all"
                        >
                            Browse Events
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-20 bg-gray-900/50">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-500/10 mb-4">
                                <Calendar className="w-8 h-8 text-blue-500" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Campus Events</h3>
                            <p className="text-gray-400">Discover and join events happening on campus</p>
                        </div>

                        <div className="text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-red-500/10 mb-4">
                                <Users className="w-8 h-8 text-red-500" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Study Groups</h3>
                            <p className="text-gray-400">Connect with peers and learn together</p>
                        </div>

                        <div className="text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-green-500/10 mb-4">
                                <Code className="w-8 h-8 text-green-500" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">AI Tools</h3>
                            <p className="text-gray-400">Boost productivity with Gemini-powered tools</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}