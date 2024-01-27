import { Link } from "react-router-dom/cjs/react-router-dom.min";
import GoogleMapReact from '../components/GoogleMapReact'

export default function İletisim() {
    return (
        <div className="bg-white  ">
            

        <header className=" bg-[#496174] flex justify-between px-5 gap-2 text-white">
        <span className="flex-1 text-xs">3rd wave coffee shop</span>
        <span className="flex-2">Çalışma Saatlerimiz: 10:00 - 22:00</span>
        </header>
        <Link to="/"><img src="instagram.png" className="w-64 p-0 m-auto" /></Link>
        <h1 className=" p-2 text-center font-['Open_Sans'] text-2xl font-bold text-[#496174] m-auto pt-2 pb-0">Welcome Equinox Coffee Co.</h1>
        <div className="flex  px-1 gap-1">
        
        <iframe src="https://storage.googleapis.com/maps-solutions-7rlrugvda4/neighborhood-discovery/bd6o/neighborhood-discovery.html" className="w-100 h-[450px]">
</iframe>
        </div>

    </div>
    )
}








