import React from 'react';
import { Link } from 'react-router-dom';
import { deleteCoffee } from '../store/actions/coffeeActions';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';



const MenuListItem = (props) => {
    const {id, title, type, price, description } = props.coffee;
    const { push } = useHistory();
    const dispatch = useDispatch();
    
    const deleteHandler = () => {
      dispatch(deleteCoffee(id));
      push('/menu');
    };

  return (
    
  <tr className='bg-[#496174]'  >
      <td className='pl-4 text-white' >{title}</td>
      <td className='pl-4 text-white'>{type}</td>
      <td className='pl-4 text-white'>{price}</td>
      <td className='p-2 flex gap-1'>
        <Link to={`/menu/${id}`} className="myButton bg-blue-600 hover:bg-blue-500 p-3 rounded-3xl text-white" >
          Detay
        </Link>
        <button
          onClick={deleteHandler}
          type="button"
          className="myButton bg-red-600 hover:bg-red-500 p-3 rounded-3xl text-white	"
        >Sil</button>
      </td>
    </tr>
    
  );
}

export default MenuListItem;