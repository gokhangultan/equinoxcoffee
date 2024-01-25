import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import Slider from '../components/Slider'

export default function Main() {
    return (
        <div >
            <div className="bg-white  ">
            

                <header className=" bg-[#496174] flex justify-between px-5 gap-2 text-white">
                <span className="flex-1">3rd wave coffee shop</span>
                <span className="flex-2">Çalışma Saatlerimiz: 10:00 - 22:00</span>
                </header>
                <img src="instagram.png" className="w-64 p-0 m-auto" />
                <h1 className=" p-2 text-center font-['Open_Sans'] text-2xl font-bold text-[#496174] m-auto pt-2 pb-0">Welcome Equinox Coffee Co.</h1>
                <Slider />
                <div className="flex justify-between px-1 gap-1">
                <NavLink to="/menu"><button className=" bg-[#496174] hover:bg-gray-400 p-3 rounded-3xl text-white  ">Menu</button></NavLink>
                <NavLink to="/menu"><button className=" bg-[#496174] hover:bg-gray-400 p-3 rounded-3xl text-white ">Instagram</button></NavLink>
                <NavLink to="/menu"><button className=" bg-[#496174] hover:bg-gray-400 p-3 rounded-3xl text-white  ">Hakkımızda</button></NavLink>
                <NavLink to="/menu"><button className=" bg-[#496174] hover:bg-gray-400 p-3 rounded-3xl text-white  ">İletisim</button></NavLink>
            
                </div>
                


            </div>
        </div>
        
    )
}