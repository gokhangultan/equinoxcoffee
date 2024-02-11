import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import Slider from '../components/Slider'

export default function Main() {
    return (
        <div >
            <div className="m-auto">
                <header className=" bg-black flex justify-between mx-auto px-2 text-white">
                <span className="flex text-[14px]">3rd wave coffee shop</span>
                <span className="flex-2 text-[14px]">Çalışma Saatlerimiz: 09:00 - 20:00</span>
                </header>
                <img src="instagram.png" className="w-28 p-0 m-auto rounded-full my-3" />
                <h1 className=" p-2 text-center font-['Open_Sans'] text-3xl font-bold text-white mb-auto pt-1 pb-0">Welcome Equinox Coffee Co.</h1>
                <div className="xl:m-5 lg:m-4 md:m-3 mb-1"><Slider /></div>
                <div className="flex justify-around mr-2 ml-2"> 
                <div className="flex justify-center  mb-5 xl:gap-6 lg:gap-4 md:gap-3 gap-2">
                <div><NavLink to="/menu"><button className=" bg-black hover:bg-gray-400 p-3 rounded-2xl text-white font-extrabold font-['Open_Sans'] text-[14px]">Menu</button></NavLink></div>
                <div><a href="https://www.instagram.com/equinox.coffee/" target="_blank"><button className=" bg-black hover:bg-gray-400 p-3 rounded-2xl text-white font-extrabold font-['Open_Sans'] text-[14px]">Instagram</button></a></div>
                <div className="flex justify-center mb-5  xl:gap-6 lg:gap-4 md:gap-3 gap-1">
                <div>  <NavLink to="/hakkimizda"><button className=" bg-black hover:bg-gray-400 p-3 rounded-2xl text-white font-extrabold font-['Open_Sans'] text-[14px]">Hakkımızda</button></NavLink></div>
                <div> <NavLink to="/iletisim"><button className=" bg-black hover:bg-gray-400 p-3 rounded-2xl text-white font-extrabold font-['Open_Sans'] text-[14px]">İletisim</button></NavLink></div>
                </div>
                </div>
                </div>


            </div>
        </div>
        
    )
}