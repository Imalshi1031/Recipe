import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import {Home} from "./pages/Home";
import {Description} from "./pages/Description";
import {AddRecipe } from "./pages/AddRecipe";
import {UpdateRecipe} from "./pages/UpdateRecipe";
import {Navigation} from "./components/navigation";
 
 


 function App() {
  return (
 
  <div>
    <Navigation/>
    <BrowserRouter>

    <Routes>
     <Route path="/" element={<Home />}/>
     <Route path="/description" element={<Description />}/>
     <Route path="/addRecipes" element={<AddRecipe />}/>
     <Route path="/updateRecipes/:id" element={<UpdateRecipe/>}/> 
   </Routes>

    </BrowserRouter>
  </div>

  );
 }

export default App;
 