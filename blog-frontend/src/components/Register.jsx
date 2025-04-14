// src/components/Register.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api";

export default function Register() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("/auth/register", form);
      alert("✅ Registered successfully! Please log in.");
      navigate("/login");
    } catch (err) {
      console.error(err);
      alert("❌ Registration failed. Try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        width: "300px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "5px",
        background: "#f9f9f9"
      }}
    >
      <h2>Register</h2>
      <input
        name="username"
        placeholder="Username"
        value={form.username}
        onChange={handleChange}
        required
        style={{ width: "100%", padding: "8px", margin: "10px 0" }}
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
        style={{ width: "100%", padding: "8px", margin: "10px 0" }}
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        required
        style={{ width: "100%", padding: "8px", margin: "10px 0" }}
      />
      <button
        type="submit"
        disabled={loading}
        style={{
          width: "100%",
          padding: "10px",
          background: "#28a745",
          color: "#fff",
          border: "none",
          cursor: "pointer"
        }}
      >
        {loading ? "Registering..." : "Register"}
      </button>
    </form>
  );
}
