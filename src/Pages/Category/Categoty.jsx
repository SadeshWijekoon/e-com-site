import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";

const categoryArr=[
  {
    imageUrl:'https://images6.alphacoders.com/134/1348908.jpeg',
    title:'Category Title 1',
    categoryId:'category1',
  },
  {
    imageUrl:'https://images6.alphacoders.com/134/1348908.jpeg',
    title:'Category Title 2',
    categoryId:'category1',
  },
  {
    imageUrl:'https://images6.alphacoders.com/134/1348908.jpeg',
    title:'Category Title 3',
    categoryId:'category1',
  },
  {
    imageUrl:'https://images6.alphacoders.com/134/1348908.jpeg',
    title:'Category Title 4',
    categoryId:'category1',
  },
  {
    imageUrl:'https://images6.alphacoders.com/134/1348908.jpeg',
    title:'Category Title 5',
    categoryId:'category1',
  },
  {
    imageUrl:'https://images6.alphacoders.com/134/1348908.jpeg',
    title:'Category Title 6',
    categoryId:'category1',

  },
]

const Categoty = () => {
  return (
    <div className="px-5 py-[100px] pt-[100px] w-full h-screen overflow-y-scroll">
      <section style={{
        boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        }} className=" w-full p-2 ">
     
       <h1 className='text-lg font-semibold mb-3 ml-2 mt-2'>Main Categories</h1>
       <div className="grid grid-cols-3 grid-rows-[auto] gap-4">
         {categoryArr.map(({imageUrl,title,categoryId},index)=><CategoryIteams key={index}
         imageUrl={imageUrl} title={title} categoryId={categoryId}/>)}
         
       </div>
      
      </section>
    </div>
  )
}

export default Categoty;

const CategoryIteams=({imageUrl,title,categoryId})=>(
  <Link to={`/category/${categoryId}`} >
<IconButton sx={{
  color:'gray',
  padding:'1px', 
  borderRadius:'6px',
}}>
  <div style={{
        boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 10px',
        }}  className=" m-1 py-6 px-3 w-full  rounded-md  flex
        flex-col items-center ">

     <img className=" rounded-full w-[50px] h-[50px]" 
      src={imageUrl} 
      alt={title}
    />
       <h2 className=" mt-3 text-[10px] text-black font-bold">{title}</h2>
  </div>
</IconButton>
</Link>
);