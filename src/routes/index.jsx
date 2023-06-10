import LayoutMenu from "../Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import SelectProducts from "../Pages/SelectProducts";
import Fruits from "../Pages/Fruits";
import YourAddress from "../Pages/YourAdress";

const RoutesPage = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<LayoutMenu />}>
                    <>
                        <Route index path="/" element={<Home />} />
                        <Route path="Product" element={<SelectProducts />} />
                        <Route path="YourAddress" element={<YourAddress />} />
                        <Route path="Fruits" element={<Fruits />} />
                    </>
                </Route>
                <Route path="SelectProducts" element={<SelectProducts />} />

            </Routes>
        </BrowserRouter>
    );
};

export default RoutesPage;