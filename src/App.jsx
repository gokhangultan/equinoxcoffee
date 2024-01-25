import { useState } from 'react'
import './App.css'
import { Switch } from 'react-router-dom'
import { Route } from 'react-router-dom/cjs/react-router-dom.min'
import Main from './pages/Main'
import Login from './pages/Login'
import Menu from './pages/Menu.jsx'
import Siparis from './pages/Siparis.jsx/'
import Coffee from './pages/Coffee.jsx/'
import MenuListItem from './pages/MenuListItem.jsx/'
import NotFound from './pages/NotFound.jsx/'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/Login" exact>
          <Login />
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
    </>
  )
}

export default App
