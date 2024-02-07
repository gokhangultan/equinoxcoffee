import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import Slider from '../components/Slider'

export default function Main() {
    return (
        <div >
            <div className="bg-white  ">
            

                <header className=" bg-black flex justify-between px-2 gap-5 text-white">
                <span className="flex">3rd wave coffee shop</span>
                <span className="flex-2">Çalışma Saatlerimiz: 10:00 - 22:00</span>
                </header>
                <img src="instagram.png" className="w-64 p-0 m-auto rounded-full mt-3" />
                <h1 className=" p-2 text-center font-['Open_Sans'] text-2xl font-bold text-black m-auto pt-2 pb-0">Welcome Equinox Coffee Co.</h1>
                <Slider />
                <div className="flex justify-between xl:mx-5 xl:mb-3 lg:mx-3 lg:mb-2 mx-2 mb-1">
                <NavLink to="/menu"><button className=" bg-black hover:bg-gray-400 p-3 rounded-3xl text-white  ">Menu</button></NavLink>
                <NavLink to="/menu"><button className=" bg-black hover:bg-gray-400 p-3 rounded-3xl text-white ">Instagram</button></NavLink>
                <NavLink to="/hakkimizda"><button className=" bg-black hover:bg-gray-400 p-3 rounded-3xl text-white  ">Hakkımızda</button></NavLink>
                <NavLink to="/iletisim"><button className=" bg-black hover:bg-gray-400 p-3 rounded-3xl text-white  ">İletisim</button></NavLink>
            
                </div>
                


            </div>
        </div>
        
    )
}