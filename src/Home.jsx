import { useState } from "react";
const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "xanmoy", id: 1 },
      { title: "歓迎会!", body: "lorem ipsum...", author: "nakamoto", id: 2 },
    {
        title: "Los mejores consejos para el desarrollo web",
      body: "lorem ipsum...",
      author: "smith",
      id: 3,
    },
  ]);
  return (
    <div className="Home">
      {blogs.map((blog) => (
          <div className="blog-preview hover:shadow-lg" key={blog.id}>
              <h2>{blog.title}</h2>
              <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;