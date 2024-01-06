import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Home from "./component/Home";
import Header from "./component/Header";
import { Route, Routes } from "react-router-dom";
import Introduce from "./component/Introduce";
import News from "./component/News";
import Franchise from "./component/Franchise";
import Order from "./home/Order";
import System from "./home/System";
import Menu from "./home/Menu";


function App() {
  return (
   <>
     <Routes>
       <Route path="/" element={<Home />}></Route>
       <Route path="/introduce" element={<Introduce />}></Route>
       <Route path="/news" element={<News />}></Route>
       <Route path="/franchise" element={<Franchise />}></Route>
       <Route path="/order" element={<Order />}></Route>
       <Route path="/menu" element={<Menu />}></Route>
       <Route path="/system" element={<System />}></Route>
      </Routes>
   </>
  );
}

export default App;