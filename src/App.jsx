import React from 'react';
import Header from './components/Header/Header';
import Home from './page/Home/Home';
import Footer from './components/Footer/Footer';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Dashboard from './page/Dashboard/Dashboard';
import Services from './page/Services/Services';
import Expert from './components/Exper/Expert';
import Products from './page/Products/Products';
import Login from './page/Login/Login';
import Register from './page/Register/Register';

const App = () => {
  const navigate = useNavigate();
  const isDashboardRoute = () => {
    return location.pathname === '/dashboard';
  };
  return (
    <>
        {/* <Routes>
           <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        </Routes>
      <div>

      {!isDashboardRoute() && <Header />}
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/services' element={<Services></Services>}></Route>
          <Route path='/expert' element={<Expert></Expert>}></Route>
          <Route path='/products' element={<Products></Products>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
        </Routes>
        {!isDashboardRoute() && <Footer />}

      </div> */}
    </>
  );
};

export default App;