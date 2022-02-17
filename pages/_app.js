import "tailwindcss/tailwind.css";
import Image from "next/image";
import SideMenu from "../src/layout/SideMenu";
import Header from "../src/layout/Header";
import img from "../src/media/mainImage.jpeg";

const  MyApp = ({ Component, pageProps }) => {
  return(
    <div 
      className='grid gap-1 grid-cols-[150px_1fr] grid-rows-[100px_1fr] bg-gradient-to-r from-black via-red-700 to-black text-white text-center pt-32'
    >
      <div></div>
      <Header/>
      <SideMenu className='row-start-2 col-start-1'/>
      
      <div className='col-start-2 row-start-2 p-4 overflow-x-hidden'>
        <Component {...pageProps} />
      </div>

    </div>
  )
};

export default MyApp
