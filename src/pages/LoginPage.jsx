import React from 'react';

const LoginPage = () => {
  const handleLogin = () => {
    alert('Microsoft login will go here');
  };

  return (
    <div className="min-h-screen w-full grid place-items-center bg-red-200 border-4 border-red-500">
      <div className="bg-white p-10 rounded shadow-md w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-6">Welcome to the Retro App</h1>
        <button
          onClick={handleLogin}
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          Login with Microsoft
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
