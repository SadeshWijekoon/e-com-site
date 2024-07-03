import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from 'react';


const Header = () => {
  console.log('header');

 const [isSearch,setIsSearch]=useState(false)

  return (
    <header className='fixed top-0 left-0 z-[100] drop-shadow-header-shadow w-full
     py-3 px-2 bg-my-background flex items-center justify-between'>
      {/*header left*/}
      <div className='flex items-center'>
        <IconButton sx={{color:'red'}}>
        <MenuIcon sx={{
        color: '#4c4f4d',
        '&:hover': {
          color: '#800909',
        },
      }} />
        </IconButton>
        <h1 style={{
            display: window.innerWidth<640? 
             isSearch ?  
               ' none':  
               ' inline-block':
               'inline-block'
           }} className='ml-2 text-sm font-bold'>
          Sadesh <span className='text-custom-red'>Wijekoon</span>
        </h1>

        <div style={{
            backgroundColor: window.innerWidth<640? 
             isSearch ?  
               ' #f8dddd':  
               ' inherit':
               '#f8dddd'
           }} className='overflow-hidden ml-2 flex items-center rounded-full bg-[#f8dddd]' > {/* bg-[#e0c3c3]*/}
          <input 
           type='text' 
           placeholder='Search' 
           style={{
            display: window.innerWidth<640? 
             isSearch ?  
               'inline-block':  
               'none':
               'inline-block',
               transition:'all 400ms ease-in-out'
           }}
           className='   hidden  sm:inline-block ml-1 outline-none p-2 
           font-semibold text-sm w-[200px] bg-inherit '/>
          <IconButton onClick={()=>{
            if(window.innerWidth<640){
              setIsSearch(!isSearch)
            }
          }} sx={{color:'red'}}>
          <SearchIcon  sx={{
        color: '#4c4f4d',
        '&:hover': {
          color: '#800909',
        },
      }} />
          </IconButton> 
        </div>

        </div>
      {/*header right*/}
       <IconButton  sx={{color:'red'}}>
          <div className=' relative  p-1'>
          <ShoppingCartIcon className='text-[#4c4f4d] hover:text-[#800909]'/>
          <div className=' absolute top-[2px] right-0 text-white  text-[7px] font bg-[#800909] flex items-center justify-center w-3 h-3 rounded-full   '>2</div>
          </div>
          {/*tailwind type*/}
       </IconButton>  
    </header>
  )
}

export default Header;