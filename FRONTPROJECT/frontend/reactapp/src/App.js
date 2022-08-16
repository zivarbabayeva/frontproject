
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Index from './pages/Index/index';
import Footer from './components/Footer/Footer';
import Overlay from './components/Overlay/Overlay';
import Navigation from './components/Header/Navigation/Navigation';
import ProductList from './components/Product/ProductList';
import Product from './components/Product/Product';
import Herocomp from './components/Hero-comp/Herocomp';
import Wallet from './pages/Index/Wallet/Wallet';
import Faq from './pages/Index/FAQ/Faq';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Overlay/>
      <ProductList/>
      <Product/>
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/' element={<Index/>}/>
        <Route path ='/about' element={<About/>}/>
      <Route path='/wallet' element={<Wallet/>}/>
      <Route path='/faq' element={<Faq/>}/>
      <Route path='/contact' element={<contact />} />
        </Routes>
     
       <Index/>
     <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
