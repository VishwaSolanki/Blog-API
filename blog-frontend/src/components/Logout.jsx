// src/components/Logout.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("token"); // clear JWT
    alert("👋 Logged out successfully!");
    navigate("/login");
  }, [navigate]);

  return null; // or a loader if you want
}
