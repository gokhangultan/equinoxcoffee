import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchMenuData } from '../store/actions/coffeeActions';

const Menu = () => {
  const data = useSelector((store) => store.coffeeReducer.data);

  const isArray = Array.isArray(data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMenuData());
  }, [dispatch]);

  let groupedData = {};

  // Check if data is an array before grouping
  if (isArray) {
    // Group data by productType
    groupedData = data.reduce((acc, item) => {
      if (!acc[item.productType]) {
        acc[item.productType] = [];
      }
      acc[item.productType].push(item);
      return acc;
    }, {});
  }

  return (
    <div className="flex-1 m-auto">
      <div className="overflow-hidden rounded-md shadow mb-4 sm:min-h-[600px] m-auto">
        <header className="bg-black flex justify-between mx-auto px-2 text-white">
          <span className="flex text-[14px]">3rd wave coffee shop</span>
          <span className="flex-2 text-[14px]">Çalışma Saatlerimiz: 09:00 - 20:00</span>
        </header>
        <Link to="/">
          <img src="instagram.png" className="w-28 p-0 m-auto rounded-full mt-2 mb-2" alt="Instagram" />
        </Link>
        {/* Map over each productType and render individual tables */}
        {Object.entries(groupedData).map(([productType, products]) => (
          <div key={productType} className="mb-4 p-2">
            <h2 className="text-xl font-bold mb-2 text-white">{productType}</h2>
            <table className="w-full text-white">
    <thead className="bg-gray-500">
        <tr>
            <th className="px-2.5 py-2.5 w-1/4">Name</th>
            <th className="px-2.5 py-2.5 w-3/4">Description</th>
            <th className="px-2.5 py-2.5 w-1/12 text-right">Price</th>
        </tr>
    </thead>
    <tbody>
        {products.map((item, index) => (
            <tr key={index}>
                <td className="px-2.5 py-2.5 uppercase">{item.name}</td>
                <td className="px-3.5 py-3.5 text-xs">{item.description}</td>
                <td className="px-2.5 py-2.5 font-bold text-xl text-right">{item.price}₺</td>
            </tr>
        ))}
    </tbody>
</table>

          </div>
        ))}
        {/* Render if no data available */}
        {!isArray && (
          <div className="text-center py-4">No data available</div>
        )}
      </div>
    </div>
  );
};

export default Menu;
