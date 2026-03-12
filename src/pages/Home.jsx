import React, { useContext } from "react";
import AuthContext from "../context/Authcontext";

const Home = () => {
  const { auth } = useContext(AuthContext);

  const features = [
    {
      title: "User Registration",
      description:
        "Register accounts with form validation and verification using Express.js.",
    },
    {
      title: "User Login",
      description:
        "Login securely with token-based authentication powered by Node.js.",
    },
    {
      title: "User Logout",
      description:
        "Securely end user sessions and clear authentication tokens or cookies.",
    },
    {
      title: "Email Verification",
      description:
        "Verify user email addresses during registration to ensure account authenticity.",
    },
    {
      title: "Protected Routes",
      description:
        "Access control for private pages like user page and about page only after login.",
    },
    {
      title: "Session Management",
      description:
        "JWT session cookies maintain active user sessions with secure logout.",
    },
  ];

  return (
    <div className="min-h-screen bg-indigo-950 text-white flex items-center justify-center px-4 sm:px-8 py-12">
      <main className="w-full max-w-7xl">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-6 sm:mb-10 underline decoration-indigo-500 underline-offset-4">
          Authentication System Features
        </h2>

        {/* Description */}
        <p className="max-w-3xl mx-auto text-center text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
          A secure authentication app built with React and styled using Tailwind
          CSS. The backend uses Node, Express.js, and MongoDB to handle user
          login, registration, and protected routes with JWT.
        </p>

        {/* Signed User */}
        <div className="bg-white shadow-xl rounded-2xl p-5 sm:p-6 md:p-8 w-full max-w-xl mx-auto mt-10 border border-gray-200">
          <h1 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 border-b pb-2">
            👤 Signed User Details
          </h1>

          <pre className="bg-indigo-100 text-xs sm:text-sm md:text-base text-gray-700 p-4 rounded-lg overflow-x-auto">
            {JSON.stringify(auth, null, 2)}
          </pre>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-indigo-800 border border-gray-700 rounded-xl p-6 hover:border-indigo-300 transition flex flex-col justify-between min-h-[150px]"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                {feature.title}
              </h3>

              <p className="text-gray-400 text-sm sm:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
