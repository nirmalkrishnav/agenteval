import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {/* Fixed Header */}
      <Header />
      
      {/* Main Layout with Sidebar and Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Fixed Sidebar */}
        <Sidebar />
        
        {/* Scrollable Main Content */}
        <main className="flex-1 overflow-y-auto bg-gray-50">
          <div className="p-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h1 className="text-2xl font-semibold text-gray-800 mb-4">Welcome to AgentEval</h1>
              <p className="text-gray-600">
                This is your main workspace area.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
