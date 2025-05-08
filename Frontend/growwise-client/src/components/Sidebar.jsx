export default function Sidebar() {
    return (
      <aside className="w-60 bg-gray-800 text-white min-h-screen p-4 space-y-6">
        <h2 className="text-xl font-bold">GrowWise</h2>
        <nav className="space-y-2">
          <a href="/dashboard" className="block hover:text-indigo-300">Dashboard</a>
          <a href="/expenses" className="block hover:text-indigo-300">Expenses</a>
          <a href="/investments" className="block hover:text-indigo-300">Investments</a>
          <a href="/profile" className="block hover:text-indigo-300">Profile</a>
        </nav>
      </aside>
    );
  }
  