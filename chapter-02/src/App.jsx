import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/HomePage";
import Login from "./pages/Login";
import Otp from "./pages/Otp";
import CartPage from "./pages/Cart-Page";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/otp" element={<Otp />} />
                    <Route path="/cart-page" element={<CartPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
