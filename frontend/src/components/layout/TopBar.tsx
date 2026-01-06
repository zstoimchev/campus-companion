export default function TopBar() {
    return (
        <header className="h-14 bg-white border-b flex items-center justify-between px-6">
            <h1 className="font-semibold">Campus Companion</h1>
            <div className="text-sm text-gray-600">Signed in as Student</div>
        </header>
    );
}