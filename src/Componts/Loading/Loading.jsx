import './Loading.css'



const Loading = () => {
  return (
    <div className=" font-semibold gap-8 relative top-0 left-0 w-screen h-screen flex flex-col items-center justify-center bg-white z-[101]">
         <div className='s_loading_dots'></div>


       Loading...
    </div>
  )
}

export default Loading;