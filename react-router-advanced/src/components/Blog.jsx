import React from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  const posts = [
    { id: 1, title: "Understanding React Router" },
    { id: 2, title: "Using Protected Routes Effectively" },
    { id: 3, title: "Dynamic Routing Explained" },
  ];

  return (
    <div>
      <h2>Blog Page</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
