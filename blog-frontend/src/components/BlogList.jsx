import { useEffect, useState } from 'react';
import axios from '../api';

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await axios.get('/blogs');
      setBlogs(res.data);
    };
    fetchBlogs();
  }, []);

  return (
    <div>
      <h2>All Blogs</h2>
      {blogs.length ? blogs.map(blog => (
        <div key={blog._id}>
          <h3>{blog.title}</h3>
          <p>{blog.content}</p>
          <p><b>Author:</b> {blog.author?.username}</p>
        </div>
      )) : <p>No blogs found.</p>}
    </div>
  );
}
