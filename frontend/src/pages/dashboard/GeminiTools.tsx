import { FileText, Briefcase, Code } from "lucide-react";

export default function GeminiTools() {
    const tools = [
        {
            id: 1,
            title: "Notes Summarizer",
            icon: FileText,
            status: "available",
        },
        {
            id: 2,
            title: "Resume Reviewer",
            icon: Briefcase,
            status: "available",
        },
        {
            id: 3,
            title: "Code Explainer",
            icon: Code,
            status: "soon",
        },
    ];

    return (
        <div className="space-y-6">
            <header>
                <h1 className="text-2xl font-semibold">AI Tools</h1>
                <p className="text-gray-400 mt-1">
                    Productivity tools powered by Gemini
                </p>
            </header>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tools.map(tool => (
                    <div
                        key={tool.id}
                        className="bg-gray-900 border border-gray-800 rounded-xl p-6"
                    >
                        <div className="p-3 w-fit rounded-lg bg-blue-500/10 mb-4">
                            <tool.icon className="w-5 h-5 text-blue-400" />
                        </div>

                        <h3 className="font-semibold mb-2">{tool.title}</h3>

                        {tool.status === "available" ? (
                            <button className="w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg font-medium">
                                Open Tool
                            </button>
                        ) : (
                            <button
                                disabled
                                className="w-full px-4 py-2 bg-gray-800 text-gray-500 rounded-lg cursor-not-allowed"
                            >
                                Coming Soon
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
