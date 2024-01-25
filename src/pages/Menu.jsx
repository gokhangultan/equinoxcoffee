import React from 'react';

import MenuListItem from './MenuListItem';

import { useSelector } from 'react-redux';

const Menu = (props) => {
  const coffees = useSelector((store) => store.coffeeReducer.coffees);

  return (
    <div className="flex-1 " >
      <div className="overflow-hidden bg-[#496174] rounded-md shadow mb-4 sm:min-h-[600px]">
        <table className="table-auto border-collapse text-left w-full">
          <thead>
            <tr className="border-zinc-200 border-b bg-gray-700 text-white " >
              <th className="pl-4 ">Coffee</th>
              <th className="pl-4">Coffee Type</th>
              <th className="pl-4">Price</th>
              <th className="pl-2">Product Detail</th>
              <th></th>
            </tr>
          </thead>

          <tbody className="text-sm">
            {coffees.map((coffee) => (
              <MenuListItem key={coffee.id} coffee={coffee} />
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Menu;
