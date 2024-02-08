import { useState } from 'react'
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



function App() {

  return (
    <div className='bg-slate-800'>
      <Switch>
        <Route path="/" exact>
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
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  )
}

export default App
