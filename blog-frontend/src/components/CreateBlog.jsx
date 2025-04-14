import { useState } from 'react';
import axios from '../api';

export default function CreateBlog() {
  const [form, setForm] = useState({ title: '', content: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/blogs', form);
    alert('Blog Created!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Title" onChange={handleChange} />
      <textarea name="content" placeholder="Content" onChange={handleChange}></textarea>
      <button type="submit">Post Blog</button>
    </form>
  );
}
