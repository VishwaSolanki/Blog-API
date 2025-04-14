import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import CreateBlog from './components/CreateBlog';
import BlogList from './components/BlogList';
import Logout from "./components/Logout";

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Blogs</Link> | 
        <Link to="/create">Create</Link> | 
        <Link to="/login">Login</Link> | 
        <Link to="/register">Register</Link> |
        <Link to="/logout">Logout</Link>
      </nav>
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/create" element={<CreateBlog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
}
