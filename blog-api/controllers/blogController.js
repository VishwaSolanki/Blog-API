const Blog = require('../models/Blog');

exports.createBlog = async (req, res) => {
  try {
    const { title, content } = req.body;
    const blog = await Blog.create({ title, content, author: req.user._id });
    res.status(201).json(blog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getBlogs = async (req, res) => {
  const blogs = await Blog.find().populate('author', 'username');
  res.json(blogs);
};

exports.updateBlog = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (!blog || blog.author.toString() !== req.user._id.toString()) {
    return res.status(403).json({ error: 'Not allowed' });
  }

  blog.title = req.body.title || blog.title;
  blog.content = req.body.content || blog.content;
  await blog.save();
  res.json(blog);
};

exports.deleteBlog = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (!blog || blog.author.toString() !== req.user._id.toString()) {
    return res.status(403).json({ error: 'Not allowed' });
  }

  await blog.deleteOne();
  res.json({ message: 'Blog deleted' });
};
