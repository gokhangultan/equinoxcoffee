import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Hakkimizda() {
    return (
        <div className="bg-white ">
            

            <header className=" bg-black flex justify-between mx-auto px-2 text-white">
                <span className="flex text-[14px]">3rd wave coffee shop</span>
                <span className="flex-2 text-[14px]">Çalışma Saatlerimiz: 09:00 - 20:00</span>
                </header>
        <Link to="/"><img src="instagram.png" className="w-28 p-0 m-auto rounded-full my-3" /></Link>
        
        <div className="flex  px-1 gap-1">
            <img src="eq1.jpg" className="w-700 m-auto max-h-[674px] object-cover px-3 rounded-3xl" />
        </div>
        <h2 className="px-1 m-4 font-['Open_Sans'] text-3xl font-bold text-black ">Equinox Coffee Kimdir?</h2>
        <div className="px-1 m-4 flex-col justify-between" >
        <p className="font-['Open_Sans']">
        Merhaba! Biz Equinox Coffee, 21 Mart'ta Alsancak'ta açılışımızı yaptık ve kahve severler için bir buluşma noktası olmayı hedefliyoruz. İsmimiz, açılış tarihimizin bahar ekinoksuna denk gelmesinden ilham alarak belirlendi. Equinox, bizim için denge, huzur ve eşitlik demek!
</p>
<p className="font-['Open_Sans']">
Alsancak'ta bulunan kafemizde, sadece kahve değil, aynı zamanda dostluklar ve keyif dolu anlar bulacaksınız. Espresso bazlı kahvelerimiz, üçüncü nesil demlemelerimiz ve dünya çaylarımızla her damak tadına hitap ediyoruz. Yanında tercih edebileceğiniz ev yapımı atıştırmalıklarımız da cabası!

</p>
<p className="font-['Open_Sans']">

İç mekanımızda, sıcaklığı ve huzuru hissedeceğiniz bir atmosfer yarattık. Bitkilerle dolu dekorasyonumuz ve seçtiğimiz kaliteli müziklerle sizi evinizde gibi hissettirmek istiyoruz. Ayrıca, sevimli dostlarınızı da yanınıza almayı unutmayın; çünkü Equinox, evcil hayvan dostu bir mekan!
</p>
<p className="font-['Open_Sans'] pb-10" >
Equinox Coffee olarak, kahve tutkumuzu ve samimiyetimizi her fincanda paylaşmayı dört gözle bekliyoruz. Sizleri kahvemiz ve sıcak sohbetimizle tanışmaya davet ediyoruz. Gelin, birlikte güzel anlar yaşayalım!</p>
</div>

    </div>
    )
}








