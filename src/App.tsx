import React from 'react';
import logo from './logo.svg';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <header className="text-center">
        <img src={logo} className="h-40 w-40 mx-auto animate-spin" alt="logo" />
        <p className="text-lg text-gray-700 mt-4">
          Edit <code className="bg-gray-200 px-2 py-1 rounded text-sm">src/App.tsx</code> and save to reload.
        </p>
        <a
          className="inline-block mt-4 text-blue-600 hover:text-blue-800 underline"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button 
          className="mt-6 px-8 py-4 bg-red-500 text-white text-xl font-bold rounded-xl border-4 border-red-700 shadow-2xl hover:bg-red-600 hover:shadow-xl transform hover:scale-110 transition-all duration-300"
          onClick={() => alert('Hello from Tailwind button!')}
        >
          Click Me - Tailwind Test!
        </button>
      </header>
    </div>
  );
}

export default App;
