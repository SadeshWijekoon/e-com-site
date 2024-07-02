import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material';

const Footer = () => {
  return (
    <footer className='fixed bottom-0 left-0 z-[100] drop-shadow-header-shadow w-full
    p-3 px-2 bg-my-background flex items-center justify-between'>

      <FooterIcon Icon={HomeIcon} iconText='Home'/>
      <FooterIcon Icon={CategoryIcon} iconText='Category'/>
      <FooterIcon Icon={AccountCircleIcon} iconText='Profile'/>
        
    </footer>
  )
}

export default Footer;
const FooterIcon=({Icon,iconText})=>
  <IconButton sx={{
    padding:'4px',
    paddingTop:'0',
    borderRadius:'5px',
    color:'#800909',


   }}>
    <div className='text-[#4c4f4d] hover:text-[#800909] transition-all duration-300 '>
      <Icon/>
    <p className='text-xs font-semibold'>{iconText}</p>
    </div>
    
    
  </IconButton>