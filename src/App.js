import './style.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import CartPage from './pages/CartPages/CartPages';
import DetailPage from './pages/DetailPage/DetailPage';
import CategoryPage from './pages/CategoryPage/cartPages';
import Header from './components/Header/Header';
import { useEffect } from 'react';
import { useCategoryStore } from './store/store';

function App() {
  const { getcategories } = useCategoryStore();

  useEffect(() => {
    getcategories();
  }, [getcategories]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/category/:category" element={<CategoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;