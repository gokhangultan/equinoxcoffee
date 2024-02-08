import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import Slider from '../components/Slider'

export default function Main() {
    return (
        <div >
            <div className="bg-white  ">
                <header className=" bg-black flex justify-between mx-auto px-2 text-white">
                <span className="flex">3rd wave coffee shop</span>
                <span className="flex-2">Çalışma Saatlerimiz: 10:00 - 22:00</span>
                </header>
                <img src="instagram.png" className="w-28 p-0 m-auto rounded-full mt-3" />
                <h1 className=" p-2 text-center font-['Open_Sans'] text-3xl font-bold text-black mb-auto pt-1 pb-0">Welcome Equinox Coffee Co.</h1>
                <div className="xl:m-5 lg:m-4 md:m-3 mb-1"><Slider /></div>
                <div className="flex justify-around "> 
                <div className="flex justify-center  xl:mx-5 xl:mb-3 lg:mx-3 lg:mb-2 mx-auto mb-auto xl:gap-6 lg:gap-4 md:gap-3 gap-2">
                <div><NavLink to="/menu"><button className=" bg-black hover:bg-gray-400 xl:p-4 lg:p-3 p-2 rounded-full text-white font-extrabold font-['Open_Sans']">Menu</button></NavLink></div>
                <div>z<a href="https://www.instagram.com/equinox.coffee/" target="_blank"><button className=" bg-black hover:bg-gray-400 xl:p-4 lg:p-3 p-2 rounded-full text-white font-extrabold font-['Open_Sans']">Instagram</button></a></div>
                <div className="flex justify-center  xl:mx-5 xl:mb-3 lg:mx-3 lg:mb-2 mx-auto mb-auto  xl:gap-6 lg:gap-4 md:gap-3 gap-2">
                <div>  <NavLink to="/hakkimizda"><button className=" bg-black hover:bg-gray-400 xl:p-4 lg:p-3 p-2 rounded-full text-white font-extrabold font-['Open_Sans'] ">Hakkımızda</button></NavLink></div>
                <div> <NavLink to="/iletisim"><button className=" bg-black hover:bg-gray-400 xl:p-4 lg:p-3 p-2 rounded-full text-white font-extrabold font-['Open_Sans'] ">İletisim</button></NavLink></div>
                </div>
                </div>
                </div>


            </div>
        </div>
        
    )
}