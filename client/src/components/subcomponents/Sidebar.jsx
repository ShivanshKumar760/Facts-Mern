import React from 'react'

const Sidebar = () => {
  return (
    <aside>
    <ul>
        <li className="category-list"><button className="btn btn-all-categories" style={{backgroundColor: "rgb(59, 130, 246)"}}>All</button></li>
        <li className="category-list"><button className="btn btn-category" style={{backgroundColor: "rgb(59, 130, 246)"}}>Technology</button></li>
        <li className="category-list"><button className="btn btn-category" style={{backgroundColor: "green"}}>Science</button></li>
        <li className="category-list"><button className="btn btn-category" style={{backgroundColor: "yellow"}}>Health</button></li>
        <li className="category-list"><button className="btn btn-category"style={{backgroundColor: "grey"}}>Society</button></li>
    </ul>
</aside>
  )
}

export default Sidebar