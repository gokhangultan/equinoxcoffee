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
import Admin from './pages/Admin.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './pages/PrivateRoute.jsx'
import { AuthProvider } from './pages/AuthProvider.jsx'




function App() {

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
     axios
       .get("https://6646fe9151e227f23ab09393.mockapi.io/api/v1/equinoxmenu")
       

       .then((res) => dispatch({
        type: "SET_DATA",
            payload: res.data[0],
            
       }))
       .then((res)=>console.log(res))
       .then(()=>setLoading(false))
       .catch((err) => console.error(err));
 
  },[]);

  if(loading){
    return <p>Welcome To Equinox Coffee ...</p>
  }

  return (
    <div className='bg-slate-800'>
            <ToastContainer position="top-right" autoClose={5000} />
            <AuthProvider>

            <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/login" exact component={Login} />
          <PrivateRoute path="/admin" exact component={Admin} />
          <Route path="/iletisim" exact component={İletisim} />
          <Route path="/hakkimizda" exact component={Hakkimizda} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/siparis" exact component={Siparis} />
          <Route path="/coffee" exact component={Coffee} />
          <Route path="/menulistitem" exact component={MenuListItem} />
          <Route component={NotFound} />
        </Switch>
 </AuthProvider>
    </div>
  )
}

export default App
