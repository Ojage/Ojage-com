import React from 'react';
import Header from './components/layout/Header';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Header />
      <main className="pt-20">
        <HomePage />
      </main>
    </div>
  );
}

export default App;