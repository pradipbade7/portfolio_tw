import React from 'react';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primary text-white">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-8">The page you are looking for does not exist.</p>
      <a href="/" className="px-6 py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-500 transition-colors">
        Go to Home
      </a>
    </div>
  );
};

export default NotFound;