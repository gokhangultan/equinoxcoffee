import { useEffect, useState } from 'react'
import './App.css'
import { Switch } from 'react-router-dom'
import { Route } from 'react-router-dom/cjs/react-router-dom.min'
import Main from './pages/Main'
import Login from './pages/Login'
import İletisim from './pages/İletisim'
import Menu from './pages/Menu.jsx'
import Siparis from './pages/Siparis.jsx/'
import Hakkimizda from './pages/Hakkimizda.jsx/'
import Coffee from './pages/Coffee.jsx/'
import MenuListItem from './pages/MenuListItem.jsx/'
import NotFound from './pages/NotFound.jsx/'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux'
import axios from 'axios'



function App() {

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
     axios
       .get("https://65c91b40a4fbc162e1129cfa.mockapi.io/api/v1/data")
       

       .then((res) => dispatch({
        type: "SET_DATA",
            payload: res.data[0],
            
       }))
       .then((res)=>console.log(res))
       .then(()=>setLoading(false))
       .catch((err) => console.error(err));
 
  },[]);

  if(loading){
    return <p>BEKLE BABBA...</p>
  }

  return (
    <div className='bg-slate-800'>
      <Switch>
        <Route path="/" exact >
          <Main />
        </Route>
        <Route path="/Login" exact>
          <Login />
        </Route>
        <Route path="/iletisim" exact>
          <İletisim />
        </Route>
        <Route path="/Hakkimizda" exact>
          <Hakkimizda />
        </Route>
        <Route path="/Menu" exact>
          <Menu />
        </Route>
        <Route path="/Siparis" exact>
          <Siparis />
        </Route>
        <Route path="/Coffee" exact>
          <Coffee />
        </Route>
        <Route path="/MenuListItem" exact>
          <MenuListItem />
        </Route>
        
      </Switch>
    </div>
  )
}

export default App
