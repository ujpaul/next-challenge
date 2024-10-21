"use client";
import { signIn, useSession } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Dashboard from "./components/dashboard";

export default function HomePage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <>
      {session ? (
        <Dashboard />
      ) : (
        // <h2>Hello</h2>
        <div className='flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-teal-500'>
          <div className='bg-white shadow-lg rounded-lg p-8 max-w-sm w-full'>
            <h1 className='text-2xl font-bold text-center text-gray-700 mb-6'>
              Login
            </h1>
            <form>
              {/* <div className="mb-4">
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                </div>
                {error && <span>{error}</span>}
              <button
                type="submit"
                className="w-full mb-2 bg-blue-500 text-white font-bold py-3 rounded-lg hover:bg-blue-600 transition duration-200"
                onClick={handleSubmit}
                >
                Sign In with Credentials
              </button> */}
              <button
                type='button'
                className='w-full mb-2 bg-red-500 text-white font-bold py-3 rounded-lg hover:bg-red-600 transition duration-200'
                onClick={() => signIn("google")}
              >
                Sign in with Google
              </button>
              <button
                type='button'
                className='w-full bg-gray-700 text-white font-bold py-3 rounded-lg hover:bg-gray-800 transition duration-200'
                onClick={() => signIn("github")}
              >
                Sign in with GitHub
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
