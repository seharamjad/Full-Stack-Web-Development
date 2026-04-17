
// when we create routes then we install the react-router-dom from npm 
import { Route, Routes } from "react-router-dom";
import Shop from "../pages/Home/Shop";
import ProductDetail from "../pages/ProductsDetail/Products";
import Login from "../pages/Login/Login";

export default function AppRoutes(){
    return(
            <Routes>
                //probes are like attributrs but these are used in components
                <Route path="/" element={ <Shop />} />
                <Route path="/productDetail" element={ <ProductDetail /> } /> 
                <Route path="/login" element={ <Login /> } />
                {/* <Route path="/register" element={ <Register />} /> */}

            </Routes>
    );
}