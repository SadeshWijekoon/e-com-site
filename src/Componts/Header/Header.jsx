import React from 'react'
import menu from '../../img/menu.svg';
import search from '../../img/search.svg';
import cart from '../../img/cart.svg';


const Header = () => {
  return (
    <header>
      {/*header left*/}
      <div>
        <img src={menu} alt='menu' />
        <h1>Sadesh<span>Wijekoon</span></h1>
        <div>
          <input type='text' placeholder='Search'/>
          <img src={search} alt='search'/>
        </div>
      </div>
      {/*header right*/}
      <img src={cart} alt='cart'/>
    </header>
  )
}

export default Header;