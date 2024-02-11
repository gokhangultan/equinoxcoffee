import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Menu = () => {
  const data = useSelector((store) => store.coffeeReducer.data );
  const thirdWaveArray = data["3rdvawe"];
  const esprossoArray = data["espresso"];
  const coldArray = data["cold"];
  const snacksArray = data["snacks"];
  const hotArray = data["hot"];
  const coldCoffeeArray = data["coldcoffee"];
  const aromaticArray = data["aromatic"];

  return (
    <div className="flex-1 m-auto">
      <div className="overflow-hidden rounded-md shadow mb-4 sm:min-h-[600px] m-auto">
        <header className="bg-black flex justify-between mx-auto px-2 text-white">
          <span className="flex text-[14px]">3rd wave coffee shop</span>
          <span className="flex-2 text-[14px]">Çalışma Saatlerimiz: 09:00 - 20:00</span>
        </header>
        <Link to="/">
          <img src="instagram.png" className="w-28 p-0 m-auto rounded-full mt-2 mb-2" />
        </Link>
        <table className="w-full text-white ">
          <thead className='bg-gray-500'>
            <tr>
              <th className="px-2.5 py-2.5">3rd Vawe</th>
              <th className="px-2.5 py-2.5">Price</th>
              <th className="px-2.5 py-2.5">Type</th>
            </tr>
          </thead>
          <tbody>
            {thirdWaveArray.map((item, index) => (
              <tr key={index}>
                <td className="px-2.5 py-2.5">{item.name}</td>
                <td className="px-2.5 py-2.5">{item.price}</td>
                <td className="px-2.5 py-2.5">{item.type}</td>
              </tr>
            ))}
          </tbody>
          <thead className='bg-gray-500'>
            <tr>
              <th className="px-2.5 py-2.5">Espresso</th>
              <th className="px-2.5 py-2.5">Price</th>
              <th className="px-2.5 py-2.5">Type</th>
            </tr>
          </thead>
          <tbody>
            {esprossoArray.map((item, index) => (
              <tr key={index}>
                <td className="px-2.5 py-2.5">{item.name}</td>
                <td className="px-2.5 py-2.5">{item.price}</td>
                <td className="px-2.5 py-2.5">{item.type}</td>
              </tr>
            ))}
          </tbody>
          <thead className='bg-gray-500'>
            <tr>
              <th className="px-2.5 py-2.5">Cold Drinks</th>
              <th className="px-2.5 py-2.5">Price</th>
              <th className="px-2.5 py-2.5">Type</th>
            </tr>
          </thead>
          <tbody>
            {coldArray.map((item, index) => (
              <tr key={index}>
                <td className="px-2.5 py-2.5">{item.name}</td>
                <td className="px-2.5 py-2.5">{item.price}</td>
                <td className="px-2.5 py-2.5">{item.type}</td>
              </tr>
            ))}
          </tbody>
          <thead className='bg-gray-500'>
            <tr>
              <th className="px-2.5 py-2.5">Atıştırmalıklar</th>
              <th className="px-2.5 py-2.5">Price</th>
              <th className="px-2.5 py-2.5">Type</th>
            </tr>
          </thead>
          <tbody>
            {snacksArray.map((item, index) => (
              <tr key={index}>
                <td className="px-2.5 py-2.5">{item.name}</td>
                <td className="px-2.5 py-2.5">{item.price}</td>
                <td className="px-2.5 py-2.5">{item.type}</td>
              </tr>
            ))}
          </tbody>
          <thead className='bg-gray-500'>
            <tr>
              <th className="px-2.5 py-2.5">Sıcak İçecekler</th>
              <th className="px-2.5 py-2.5">Price</th>
              <th className="px-2.5 py-2.5">Type</th>
            </tr>
          </thead>
          <tbody>
            {hotArray.map((item, index) => (
              <tr key={index}>
                <td className="px-2.5 py-2.5">{item.name}</td>
                <td className="px-2.5 py-2.5">{item.price}</td>
                <td className="px-2.5 py-2.5">{item.type}</td>
              </tr>
            ))}
          </tbody>
          <thead className='bg-gray-500'>
            <tr>
              <th className="px-2.5 py-2.5">Soğuk Kahveler</th>
              <th className="px-2.5 py-2.5">Price</th>
              <th className="px-2.5 py-2.5">Type</th>
            </tr>
          </thead>
          <tbody>
            {coldCoffeeArray.map((item, index) => (
              <tr key={index}>
                <td className="px-2.5 py-2.5">{item.name}</td>
                <td className="px-2.5 py-2.5">{item.price}</td>
                <td className="px-2.5 py-2.5">{item.type}</td>
              </tr>
            ))}
          </tbody>
          <thead className='bg-gray-500'>
            <tr>
              <th className="px-2.5 py-2.5">Aromatik Çaylar</th>
              <th className="px-2.5 py-2.5">Price</th>
              <th className="px-2.5 py-2.5">Type</th>
            </tr>
          </thead>
          <tbody>
            {aromaticArray.map((item, index) => (
              <tr key={index}>
                <td className="px-2.5 py-2.5">{item.name}</td>
                <td className="px-2.5 py-2.5">{item.price}</td>
                <td className="px-2.5 py-2.5">{item.type}</td>
              </tr>
            ))}
          </tbody>
          
        </table>
      </div>
    </div>
  );
};

export default Menu;