import React from 'react'
import './Category.css'
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom'
const Category = () => {
  return (
    <div className='category-header'>
      <div className="category-header_shadow">
          <ul className="category-header_list">
               <li className='category-header_main'><Link to='/blog'>Blog</Link></li>
               <li className="category-header_item"><Link to=''>Product</Link></li>
               <li className="category-header_item"><Link to=''>Team</Link></li>
               <li className="category-header_item"><Link to=''>Engineering</Link></li>
               <li className="category-header_item"><Link to=''>Engineering</Link></li>
               <li className="category-header_item"><Link to=''>Engineering</Link></li>
               <li className="category-header_item"><Link to=''>Engineering</Link></li>
               <li className="category-header_item"><Link to=''>Engineering</Link></li>
               <li className="category-header_item"><Link to=''>Engineering</Link></li>
               <li className="category-header_item"><Link to=''>Engineering</Link></li>
               <li className="category-header_item"><Link to=''>Engineering</Link></li>
               <li className="category-header_item"><Link to=''>Engineering</Link></li>
               <li className="category-header_item"><Link to=''>Engineering</Link></li>
               <li className="category-header_item"><Link to=''>Engineering</Link></li>
               <li className="category-header_item"><Link to=''>Data and AI</Link></li>
               <li className="category-header_item"><Link to=''>DevOps</Link></li>
               <li className="category-header_item"><Link to=''>Design</Link></li>
               <li className="category-header_item"><Link to=''>Lifa at Teachnology</Link></li>
               <li className="category-header_item"><Link to=''>News</Link></li>
               <li className="category-header_item"><Link to=''>Healthcare</Link></li>
          </ul>
      </div>
      <div className="category-header_search">
          <button className="button-search">
               <FaSearch size={18}  />
          </button>
      </div>
    </div>
  )
}

export default Category
