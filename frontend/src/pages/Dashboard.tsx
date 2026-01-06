import Card from "../components/ui/Card";
import { events } from "../data/mock";


export default function Dashboard() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
                <h2 className="font-semibold mb-2">Upcoming Events</h2>
                <ul className="text-sm text-gray-700">
                    {events.map((e) => (
                        <li key={e.id} className="py-1">
                            {e.title} — {e.date}
                        </li>
                    ))}
                </ul>
            </Card>


            <Card>
                <h2 className="font-semibold mb-2">Quick Access</h2>
                <p className="text-sm text-gray-600">Gemini-powered tools for students</p>
            </Card>
        </div>
    );
}