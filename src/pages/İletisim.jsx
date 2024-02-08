import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'


export default function İletisim() {
    return (
        <div className="bg-white  ">
            

            <header className=" bg-black flex justify-between mx-auto px-2 text-white">
                <span className="flex text-[14px]">3rd wave coffee shop</span>
                <span className="flex-2 text-[14px]">Çalışma Saatlerimiz: 09:00 - 20:00</span>
                </header>
                <Link to="/"><h1 className=" p-2 text-center font-['Open_Sans'] text-2xl font-bold text-black m-auto pt-2 mb-2"><img src="instagram.png" className="w-28 p-0 m-auto rounded-full mt-2" />
        Welcome Equinox Coffee Co.</h1>
</Link>
        <div className="flex  px-1 gap-1">
        
        <iframe src="https://storage.googleapis.com/maps-solutions-7rlrugvda4/neighborhood-discovery/bd6o/neighborhood-discovery.html" className="w-100 h-[450px]">
</iframe>
        </div>
        <div className="flex justify-between">
        <div className="mx-3 flex my-2 ">
        <table >
  <tr className="flex-col">
    <th className="flex">Adres</th>
  </tr>
  <tr className="flex-col ">
    <td className="flex">Adres: Alsancak, kültür mahallesi</td>
  </tr>
  <tr>
    <td className="flex">1436. Sk. 8A, 35000 Konak/İzmir</td>
  </tr>
</table></div>
<div className="mx-3 flex my-2 ">
        <table >
  <tr className="flex-col">
    <th className="flex">İletisim</th>
  </tr>
  <tr className="flex-col ">
    <td className="flex"><a href="tel:+90506 609 50 94"><FontAwesomeIcon icon={ faPhone } /> Bizi Arayın</a></td>
  </tr>
  <tr>
    <td className="flex"><a href="mailto:busra.ozkilic4@gmail.com"><FontAwesomeIcon icon={ faEnvelope } /> &nbsp;Email</a> </td>
  </tr>
</table></div></div>
    </div>
    )
}








