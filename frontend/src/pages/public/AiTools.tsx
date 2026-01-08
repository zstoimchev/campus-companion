import { Sparkles, FileText, Briefcase, Code, MessageSquare } from "lucide-react";
import type {SVGProps, ComponentType} from "react";

export default function AiTools() {
    type ToolColor = keyof typeof colorClasses;
    interface Tool {
        id: number;
        title: string;
        description: string;
        icon: ComponentType<SVGProps<SVGSVGElement>>;
        color: ToolColor;
        status: string;
    }

    const tools: Tool[] = [
        {
            id: 1,
            title: 'Notes Summarizer',
            description: 'Summarize lecture notes and study materials using Gemini AI',
            icon: FileText,
            color: 'blue',
            status: 'Available',
        },
        {
            id: 2,
            title: 'Resume Reviewer',
            description: 'Get AI-powered feedback on your resume and improve it',
            icon: Briefcase,
            color: 'green',
            status: 'Available',
        },
        {
            id: 3,
            title: 'Code Explainer',
            description: 'Understand complex code with AI explanations',
            icon: Code,
            color: 'yellow',
            status: 'Coming Soon',
        },
        {
            id: 4,
            title: 'Interview Prep',
            description: 'Practice technical interviews with AI assistance',
            icon: MessageSquare,
            color: 'red',
            status: 'Coming Soon',
        },
    ];

    const colorClasses = {
        blue: 'from-blue-500/20 to-blue-500/5 border-blue-500/20 text-blue-500',
        green: 'from-green-500/20 to-green-500/5 border-green-500/20 text-green-500',
        yellow: 'from-yellow-500/20 to-yellow-500/5 border-yellow-500/20 text-yellow-500',
        red: 'from-red-500/20 to-red-500/5 border-red-500/20 text-red-500',
    };

    return (
        <div className="min-h-screen py-20">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                        <Sparkles className="w-4 h-4 text-purple-500 mr-2" />
                        <span className="text-purple-500 text-sm font-medium">Powered by Gemini AI</span>
                    </div>

                    <h1 className="text-5xl font-bold mb-4">AI Tools for Students</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Leverage the power of Google's Gemini AI to boost your productivity and learning
                    </p>
                </div>

                {/* Tools Grid */}
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
                    {tools.map((tool) => (
                        <div
                            key={tool.id}
                            className={`bg-gradient-to-br ${colorClasses[tool.color]} rounded-xl border p-6 hover:scale-105 transition-transform`}
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="p-3 rounded-lg bg-gray-900">
                                    <tool.icon className={`w-6 h-6 ${tool.color === 'blue' ? 'text-blue-500' : tool.color === 'green' ? 'text-green-500' : tool.color === 'yellow' ? 'text-yellow-500' : 'text-red-500'}`} />
                                </div>
                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                    tool.status === 'Available'
                                        ? 'bg-green-500/20 text-green-500'
                                        : 'bg-gray-800 text-gray-400'
                                }`}>
                  {tool.status}
                </span>
                            </div>

                            <h3 className="text-xl font-bold mb-2">{tool.title}</h3>
                            <p className="text-gray-400 text-sm mb-4">{tool.description}</p>

                            <button
                                disabled={tool.status !== 'Available'}
                                className={`w-full px-4 py-2 rounded-lg font-medium transition-colors ${
                                    tool.status === 'Available'
                                        ? 'bg-white text-gray-900 hover:bg-gray-100'
                                        : 'bg-gray-800 text-gray-500 cursor-not-allowed'
                                }`}
                            >
                                {tool.status === 'Available' ? 'Try Now' : 'Coming Soon'}
                            </button>
                        </div>
                    ))}
                </div>

                {/* Info Section */}
                <div className="max-w-4xl mx-auto bg-gray-900 rounded-xl border border-gray-800 p-8">
                    <h2 className="text-2xl font-bold mb-6 text-center">About These Tools</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="font-semibold mb-3 text-blue-500">Free for Students</h3>
                            <p className="text-gray-400 text-sm">
                                All tools are completely free for GDG Primorska members. Just log in with your university email.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-3 text-green-500">Privacy First</h3>
                            <p className="text-gray-400 text-sm">
                                Your data is processed securely and never stored. We respect your privacy and academic integrity.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-3 text-yellow-500">Always Improving</h3>
                            <p className="text-gray-400 text-sm">
                                We're constantly adding new features and tools based on student feedback. Have an idea? Let us know!
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-3 text-red-500">Built by Students</h3>
                            <p className="text-gray-400 text-sm">
                                These tools are developed by GDG members for GDG members. Join our development team!
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="max-w-4xl mx-auto mt-12 text-center">
                    <p className="text-gray-400 mb-4">Want to contribute or suggest a new tool?</p>
                    <a
                        href="mailto:gdgoncampus.up@gmail.com"
                        className="inline-flex items-center px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-lg font-semibold transition-colors"
                    >
                        Get in Touch
                    </a>
                </div>
            </div>
        </div>
    );
}