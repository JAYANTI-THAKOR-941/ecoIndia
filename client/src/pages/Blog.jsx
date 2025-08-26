import React, { useState } from "react";
import "../css/Blog.css";
import blogPosts from "../data/blogPosts";


const categories = ["All", "Forest", "Water", "Renewable Energy", "Urban Waste"];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = selectedCategory === "All"
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  const featured = blogPosts[0];

  return (
    <div className="blog-page">
      <div className="blog-header">
        <h1>EcoIndia Blog</h1>
        <p>Inspiring stories and environmental insights from across India.</p>
      </div>

      {/* Featured Post */}
      <section className="featured-blog">
        <img src={featured.image} alt={featured.title} />
        <div className="featured-content">
          <h2>{featured.title}</h2>
          <p className="blog-date">📅 {featured.date} | ✍️ {featured.author}</p>
          <p>{featured.summary}</p>
          <button className="read-more">Read More</button>
        </div>
      </section>

      {/* Category Filters */}
      <div className="blog-categories">
        {categories.map((cat, index) => (
          <button
            key={index}
            className={selectedCategory === cat ? "active" : ""}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Blog Cards */}
      <div className="blog-grid">
        {filteredPosts.map((post) => (
          <div className="blog-card" key={post.id}>
            <img src={post.image} alt={post.title} />
            <div className="blog-content">
              <h3>{post.title}</h3>
              <p className="blog-date">📅 {post.date} | ✍️ {post.author}</p>
              <p className="blog-summary">{post.summary}</p>
              <button className="read-more">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
