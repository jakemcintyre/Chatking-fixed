import React, { useState } from 'react';
import Sidebar from './components/layout/Sidebar';
import InboxView from './components/inbox/InboxView';
import DashboardView from './components/dashboard/DashboardView';

function App() {
  const [activePage, setActivePage] = useState('dashboard');

  const renderPage = () => {
    switch (activePage) {
      case 'inbox':
        return <InboxView />;
      case 'dashboard':
        return <DashboardView />;
      default:
        return <DashboardView />;
    }
  };

  return (
    <div className="flex">
      <Sidebar isOpen={true} activePage={activePage} setActivePage={setActivePage} />
      <main className="flex-1 p-4">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
