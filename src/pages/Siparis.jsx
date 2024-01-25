import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCoffee } from '../store/actions/coffeeActions';

const AddCoffeeForm = (props) => {
  const { push } = useHistory();
  const dispatch = useDispatch();

  const [coffee, setCoffee] = useState({
    title: '',
    type: '',
    price: 0,
    description: '',
  });

  const handleChange = (e) => {
    setCoffee({
      ...coffee,
      id: Date.now(),

      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCoffee(coffee));
    push('/menu');
  };

  const { title, type, price, description } = coffee;
  return (
    <div className="bg-gray-700 rounded-md shadow flex-1 sm:min-h-[600px]">
      <form onSubmit={handleSubmit}>
        <div className="p-5 pb-3 border-b border-zinc-200 text-white">
          <h4 className="text-xl font-bold " >Add Coffee</h4>
        </div>

        <div className="px-5 py-3 text-white">
          <div className="py-2">
            <label htmlFor="title" className="block pb-1 text-lg">
              Title
            </label>
            <input
              value={title}
              onChange={handleChange}
              name="title"
              type="text"
              id="title"
              className='text-gray-900'
            />
          </div>
          <div className="py-2">
            <label htmlFor="type" className="block pb-1 text-lg">
            Coffee Type
            </label>
            <input
              value={type}
              onChange={handleChange}
              name="type"
              type="text"
              id="type"
              className='text-gray-900'
            />
          </div>
          <div className="py-2">
            <label htmlFor="price" className="block pb-1 text-lg">
            Fiyat
            </label>
            <input
              value={price}
              onChange={handleChange}
              name="price"
              type="text"
              id="price"
              className='text-gray-900'
            />
          </div>
          <div className="py-2">
            <label htmlFor="Description" className="block pb-1 text-lg ">
              Coffee Description
            </label>
            <textarea
              value={description}
              onChange={handleChange}
              name="description"
              id="Description"
              className='text-gray-900'
            ></textarea>
          </div>
        </div>
        <div className="px-5 py-4 border-t border-zinc-200 flex justify-end gap-2">
          <Link to={`/menu`} className="myButton bg-red-600 hover:bg-red-500 p-4 rounded-xl text-white">
            Vazgeç
          </Link>
          <button
            type="submit"
            className="myButton bg-blue-600 hover:bg-blue-500 p-4 rounded-xl text-white"
          >
            Ekle
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCoffeeForm;
