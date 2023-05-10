import{ BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../components/header";

import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Menu from "../Pages/Menu";
import Cart from "../Pages/Cart";
import Payment from "../Pages/Payment";

const Navigation = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/Register" element={<Register/>}/>
                <Route path="/Menu" element={<Menu/>}/>
                <Route path="/Cart" element={<Cart/>}/>
                <Route path="/Payment" element={<Payment/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Navigation;