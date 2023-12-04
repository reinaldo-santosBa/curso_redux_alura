import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from '../components/mainPage/mainPage';
import { Home } from '../pages/home/home';
import { Category } from '../pages/category/category';
import { Cart } from '../pages/cart/cart';

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainPage />}>
                    <Route index element={<Home />} />
                    <Route path='/categoria/:nameCategory' element={<Category />} />
                    <Route path='/carrinho' element={<Cart />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}