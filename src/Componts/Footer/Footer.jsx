import React, { useState } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [whoIsClick,setWhoIsClicke]=useState({
    Home:true,
    Category:false,
    Profile:false

})
  return (
    <footer className='fixed bottom-0 left-0 z-[100] drop-shadow-header-shadow w-full
    p-3 px-2 bg-my-background flex items-center justify-between'>

      <FooterIcon 
        clickFun={{whoIsClick,setWhoIsClicke}}
        Icon={HomeIcon} 
        iconText='Home'/>
    
      <FooterIcon 
        clickFun={{whoIsClick,setWhoIsClicke}}
        Icon={CategoryIcon} 
        iconText='Category'/>

      <FooterIcon 
        clickFun={{whoIsClick,setWhoIsClicke}}
        Icon={AccountCircleIcon} 
        iconText='Profile'/>
        
    </footer>
  )
}

export default Footer;
const FooterIcon=({Icon,iconText,clickFun})=>{

  const clickHandle= (Home,Category,Profile)=>{
    const obj=
    {
      Home:true,
      Category:false,
      Profile:false
    }

    if(iconText==='Category'){
      obj.Category=true
      obj.Home=false
      obj.Profile=false
    }else if (iconText==='Profile'){
      obj.Home=false
      obj.Category=false
      obj.Profile=true
    }
    clickFun.setWhoIsClicke(obj)
  }
    


 return(
   <Link to={iconText==='Home'?'/':`/${String(iconText).toLowerCase()}`}>
    <IconButton 
    sx={{
     padding:'4px',
     paddingTop:'0',
     borderRadius:'5px',
     color:'#800909',
     }}
     onClick={clickHandle}>
  <div style={{
      color:clickFun.whoIsClick[iconText]&&' #800909',
    }}
    
    className='text-[#4c4f4d] hover:text-[#800909] transition-all duration-300 '
    >
      <Icon/>
    <p className='text-xs font-semibold'>{iconText}</p>
    </div>
    
    
  </IconButton></Link>
  )};


