import React from 'react'

function Navbar() {
  return (
    <div className='navbarApp'>
    
      <nav class="navbar">
        <div class="vertical-menu">
          
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
            <a href="#">Link 3</a>
            <a href="#">Link 3</a>
            <a href="#">Link 3</a>
        </div>
        
        <div class="horizontal-menu">
            <a href="#">Home</a>
            <a href="#">Home</a>
            <a href="#">Home</a>
            <a href="#">Home</a>
            <div class="input-group rounded">
  <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
  <span class="input-group-text border-0" id="search-addon">
    <i class="fas fa-search"></i>
  </span>
</div>
           
        </div>
    </nav>
    </div>
  )
}

export default Navbar