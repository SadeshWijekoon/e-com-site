import React, { useState } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [whoIsClick,setWhoIsClicke]=useState({ // define a stste to handle footer 3 buttons
    Home:false,
    Category:false,
    Profile:false

})
  return (
    <footer className='fixed bottom-0 left-0 z-[100] drop-shadow-header-shadow w-full
    p-3 px-2 bg-my-background flex items-center justify-between'> {/*footer desighn by using tailkwind css*/}

      <FooterIcon // thjis is normal functional compont .it can used in same page as well
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
const FooterIcon=({Icon,iconText,clickFun})=>{ // createed a function because all 3 Icon got repeted  

  const clickHandle= ()=>{
    
    const obj= // created a obj and initially all propety false 
    {
      Home:false,
      Category:false,
      Profile:false
    }

    if (iconText==='Home'){
      obj.Home = true   // acssening the obj and relevent to the iconText it gonna make true 
      
      
    }else if(iconText==='Category'){
      
      obj.Category=true
     
    }else if (iconText==='Profile'){
     
      obj.Profile=true
    }
    console.log(obj);
    clickFun.setWhoIsClicke(obj) // 
  }
    


 return(
   <Link to={iconText==='Home'?'/':`/${String(iconText).toLowerCase()}`}>
    <IconButton // wrapped using iconbutton to give it a click
    sx={{
     padding:'4px',
     paddingTop:'0', // icon button desighn by usen mui 
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


