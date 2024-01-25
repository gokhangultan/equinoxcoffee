import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCoffee } from '../store/actions/coffeeActions';

import { addFavorite, removeFavorite } from '../store/actions/productsActions';

const Coffee = (props) => {
  const { id } = useParams();
  const { push } = useHistory();
  const dispatch = useDispatch();
  const coffees = useSelector((store) => store.coffeeReducer.coffees);

  const coffee = coffees.find((coffee) => coffee.id === Number(id));

  const deleteHandler = () => {
    dispatch(deleteCoffee(id));
    dispatch(removeFavorite(id));
    push('/menu');
  };

  const addFavoriteHandler = () => {
    dispatch(addFavorite(coffee));
  };

  return (
    <div className="bg-white rounded-md shadow flex-1">
      <div className="p-5 pb-3 border-b border-zinc-200">
        <h4 className="text-xl font-bold">{coffee.title} Detayları</h4>
      </div>
      <div className="px-5 py-3">
        <div className="py-1 flex">
          <div className="view-label">İsim</div>
          <div className="flex-1">{coffee.title}</div>
        </div>
        <div className="py-1 flex">
          <div className="view-label">Type</div>
          <div className="flex-1">{coffee.type}</div>
        </div>
        <div className="py-1 flex">
          <div className="view-label">Fiyat</div>
          <div className="flex-1">{coffee.price}</div>
        </div>
        
        <div className="py-1 flex">
          <div className="view-label">Açıklama</div>
          <p className="flex-1">{coffee.description}</p>
        </div>
      </div>
      <div className="px-5 py-3 border-t border-zinc-200 flex justify-end gap-2">
        <button
          onClick={deleteHandler}
          type="button"
          className="myButton bg-red-600 hover:bg-red-500"
        >
          Sil
        </button>
        <button
          onClick={addFavoriteHandler}
          className="myButton bg-blue-600 hover:bg-blue-500 "
        >
          Favorilere ekle
        </button>
      </div>
    </div>
  );
};

export default Coffee;
