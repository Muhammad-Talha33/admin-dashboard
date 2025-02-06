"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
  

  if (email === "mtalha@gmail.com" && password === "talha") {
    localStorage.setItem("isLoggedIn", "true");
    router.push("/admin/dashboard");
  } else if (localStorage.getItem("isLoggedIn") === "false") {
  } else {
    Swal.fire("error", "Invalid email or password", "error")
  }
};

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded-lg shadow-slate-500 shadow-xl lg:py-24 lg:px-12 md:py-24 md:px-12">
        <h2 className="text-xl lg:text-3xl md:text-2xl font-extrabold mb-4 text-center">Admin Login</h2>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded"
          value={email}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded"
          value={password}
        />
        <button type="submit" className="bg-black text-white px-4 py-2 rounded w-full">
           Login
        </button>
      </form>
    </div>
  );
}
