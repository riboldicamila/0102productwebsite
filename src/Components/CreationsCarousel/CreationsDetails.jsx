import React from 'react';
import { useParams, Link } from 'react-router-dom';

import { blogs } from '../../HomeData.js';
import GenericButton from '../Button.jsx';

import './creationsStyles.css';

const CreationsDetails = () => {
  const { slug } = useParams();
  
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="container">
        <Link to="/" className="back-link">← Back to Projects</Link>
        <h2>Artículo no encontrado</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <Link to="/creations" className="back-link">← Back to Projects</Link>
      
      <article className="blog-detail">
        <div className="detail-image">
          <img src={blog.image} alt={blog.title} />
        </div>
        
        <h1>{blog.title}</h1>
        
        <div className="detail-meta">
          <span>{blog.date}</span>
          <span className="separator">•</span>
          <span>{blog.author}</span>
        </div>
        
        <div className="detail-content">
          <p>{blog.subtitle}</p>
        </div>
        
        <GenericButton text = 'Go to site' to = {blog.url}/>
      </article>
    </div>
  );
};

export default CreationsDetails;
