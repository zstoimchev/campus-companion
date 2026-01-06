import Card from "../components/ui/Card";
import { events } from "../data/mock";


export default function Events() {
    return (
        <div className="grid gap-4">
            {events.map((e) => (
                <Card key={e.id}>
                    <h3 className="font-semibold">{e.title}</h3>
                    <p className="text-sm text-gray-600">{e.date}</p>
                    <span className="text-xs text-blue-600">#{e.tag}</span>
                </Card>
            ))}
        </div>
    );
}