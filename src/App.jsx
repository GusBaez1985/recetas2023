import "./App.css"
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"

import { RecetasGrid } from "./components/RecetasGrid.jsx"
import { LandingPage } from "./page/LandingPage.jsx"

export const App = ()=>{
  return(
    <BrowserRouter>
      <header >
        <Link to="/">
      <h1 className="title">Recetas</h1>
      </Link> 
      </header>
      <Routes>
        <Route path="/" element = {<LandingPage/>}/>
        <Route path="/receta/:id" element = "detalle de la receta"/>
     
      </Routes>
    </BrowserRouter>
  )
}