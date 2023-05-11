import React from 'react';
import './blog.css';
import {Article} from '../../components';
import {blog01, blog02, blog03, blog04, blog05} from './imports';

const Blog = () => {
  return (
    <div className="mycv__blog section__padding">
      <div className="mycv__blog-heading">
        <h1 className="gradient__text">licences and Certifications</h1>
      </div>
      <div className="mycv__blog-container">
        <div className="mycv__blog-container_groupA">
          <Article imageUrl={blog01} />                  
        </div>
        <div className="mycv__blog-container_groupB">
          <Article imageUrl={blog02} />          
          <Article imageUrl={blog03} />          
          <Article imageUrl={blog04} />          
          <Article imageUrl={blog05} />          
        </div>
      </div>
    </div>
  )
}

export default Blog