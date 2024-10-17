import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductViewPage from "../pages/ProductViewPage";
import ProductListingPage from "../pages/ProductListingPage";
import NotFound from "../pages/NotFound";
import PageLayout from "../layout/PageLayout";

function Paths() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PageLayout />}>
                        <Route index element={<HomePage />} />
                        <Route path="/productview" element={<ProductViewPage />} />
                        <Route path="/productlisting" element={<ProductListingPage />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Paths;