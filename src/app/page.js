"use client";
import { signIn, useSession } from "next-auth/react";
import Dashboard from "./components/Dashboard";

export default function HomePage() {
  const { data: session } = useSession();

  return (
    <>
      {session ? (
        <Dashboard />
      ) : (
        <div className='flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-teal-500'>
          <div className='bg-white shadow-lg rounded-lg p-8 max-w-sm w-full'>
            <h1 className='text-2xl font-bold text-center text-gray-700 mb-6'>
              Login
            </h1>
            <form>
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
