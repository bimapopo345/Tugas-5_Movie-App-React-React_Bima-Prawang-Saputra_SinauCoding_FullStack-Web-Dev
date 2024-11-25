import React, { useState } from "react";
import Swal from "sweetalert2";

function Navbar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogin = () => {
    Swal.fire({
      title: "Login",
      html: `
        <input type="email" id="email" class="swal2-input" placeholder="Email">
        <input type="password" id="password" class="swal2-input" placeholder="Password">
      `,
      confirmButtonText: "Login",
      confirmButtonColor: "#e50914",
      showCancelButton: true,
      background: "#141414",
      color: "#ffffff",
      preConfirm: () => {
        Swal.fire({
          title: "Success!",
          text: "You have successfully logged in!",
          icon: "success",
          confirmButtonColor: "#e50914",
          background: "#141414",
          color: "#ffffff",
        });
      },
    });
  };

  const handleSignup = () => {
    Swal.fire({
      title: "Sign Up",
      html: `
        <input type="text" id="name" class="swal2-input" placeholder="Name">
        <input type="email" id="email" class="swal2-input" placeholder="Email">
        <input type="password" id="password" class="swal2-input" placeholder="Password">
      `,
      confirmButtonText: "Sign Up",
      confirmButtonColor: "#e50914",
      showCancelButton: true,
      background: "#141414",
      color: "#ffffff",
      preConfirm: () => {
        Swal.fire({
          title: "Success!",
          text: "Account created successfully!",
          icon: "success",
          confirmButtonColor: "#e50914",
          background: "#141414",
          color: "#ffffff",
        });
      },
    });
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <nav
      className={`fixed w-full p-4 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-black" : "bg-gradient-to-b from-black"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
          NETFLIX
        </h1>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search movies..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="px-4 py-2 rounded-full bg-gray-800 text-white w-64 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <svg
              className="w-5 h-5 absolute right-3 top-2.5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <button
            onClick={handleLogin}
            className="bg-red-600 px-6 py-2 rounded-full text-white hover:bg-red-700 transition duration-300"
          >
            Login
          </button>

          <button
            onClick={handleSignup}
            className="bg-transparent border-2 border-gray-400 px-6 py-2 rounded-full text-white hover:border-white transition duration-300"
          >
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
