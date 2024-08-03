import { useSelector } from "react-redux";
import { catagorySelector } from "../../Store/ReduxSlice/categortySlice";
import { useParams } from "react-router-dom";
import { Rating } from "@mui/material";

const categoryIteamArr=[
  {
    imageUrl:'https://images6.alphacoders.com/134/1348908.jpeg',
    title:'Category Title 1',
    
  },
  {
    imageUrl:'https://images6.alphacoders.com/134/1348908.jpeg',
    title:'Category Title 2',
    
  },
  {
    imageUrl:'https://images6.alphacoders.com/134/1348908.jpeg',
    title:'Category Title 3',
    
  },
  {
    imageUrl:'https://images6.alphacoders.com/134/1348908.jpeg',
    title:'Category Title 4',
    
  },
  {
    imageUrl:'https://images6.alphacoders.com/134/1348908.jpeg',
    title:'Category Title 5',
    
  },
  {
    imageUrl:'https://images6.alphacoders.com/134/1348908.jpeg',
    title:'Category Title 6',
    

  },
]


const Categoryitems = () => {


  const category = useSelector(catagorySelector)
  const {categoryId}= useParams()
  const categoryTitle = category.find((ele)=>ele.id===categoryId) // cheking wheather useparm category id and category array id is same or not 
  // console.log(categoryTitle);
   
  

  
  
  return (
    <div className="px-5 py-[100px] pt-[100px] w-full h-screen overflow-y-scroll">
     <h1 className='text-lg font-semibold mb-3 ml-2 mt-2' >{categoryTitle.title}</h1>
     <div className="w-full grid grid-cols-3 grid-rows[auto] gap-4" >
     {categoryIteamArr.map(({imageUrl,title},index)=>
     <CatagoryUnit key={index} imageUrl={imageUrl} title={title}/>)}
     </div>
    </div>
  )
}

export default Categoryitems;

const CatagoryUnit = ({imageUrl,title})=>
  <div>
    <img src={imageUrl} alt={title} className="w-full object-contain"/>
  <h3>{title}</h3>
  <Rating 
       name={imageUrl}
       value={3.5}
       precision={0.1}
       size="small"
       readOnly
      />
  </div>
  



