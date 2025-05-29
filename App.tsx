import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

function Dashboard() {
  return <div className="p-4">Welcome to the Dashboard!</div>;
}
function Inbox() {
  return <div className="p-4">Here’s your Inbox.</div>;
}
function Contacts() {
  return <div className="p-4">Manage Contacts here.</div>;
}
// Add more pages as needed...

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-100 p-4">
          <nav className="space-y-2">
            <Link to="/" className="block text-blue-700">Dashboard</Link>
            <Link to="/inbox" className="block text-blue-700">Inbox</Link>
            <Link to="/contacts" className="block text-blue-700">Contacts</Link>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 bg-white">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/inbox" element={<Inbox />} />
            <Route path="/contacts" element={<Contacts />} />
            {/* Add more routes here */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
