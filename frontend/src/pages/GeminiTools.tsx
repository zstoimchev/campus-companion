import Card from "../components/ui/Card";


export default function GeminiTools() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
                <h3 className="font-semibold">Notes Summarizer</h3>
                <p className="text-sm text-gray-600">Summarize lecture notes using Gemini</p>
            </Card>
            <Card>
                <h3 className="font-semibold">Resume Reviewer</h3>
                <p className="text-sm text-gray-600">AI-powered resume feedback</p>
            </Card>
        </div>
    );
}