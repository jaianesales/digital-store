import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductViewPage from "../pages/ProductViewPage";
import ProductListingPage from "../pages/ProductListingPage";
import NotFound from "../pages/NotFound";
import PageLayout from "../layout/PageLayout";
import Category from "../pages/Category";
import Pedidos from "../pages/Pedidos";

function Paths() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/productview" element={<ProductViewPage />} />
            <Route path="/productlisting" element={<ProductListingPage />} />
            <Route path="/category" element={<Category />} />
            <Route path="/pedidos" element={<Pedidos />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Paths;
