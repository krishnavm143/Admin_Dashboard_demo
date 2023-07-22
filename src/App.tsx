import { Link, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/home/Home';
import Users from './pages/user/Users';
import Products from './pages/products/Products';
import Navbar from './components/navbar/Navbar';
import Menu from './components/menu/Menu';
import Footer from './components/footer/Footer';
import Login from './pages/login/Login';

function App() {
  const Layout = () => {
    return <div className="main">
      <Navbar/>
      <div className="container">
        <div className="menuContainer">
          <Menu/>
        </div>
        <div className="contentContainer">
          <Outlet/>
        </div>
      </div>
      <Footer/>
    </div>;
  };
  const router = createBrowserRouter([
   {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'users',
        element: <Users />,
      },
      {
        path: 'products',
        element: <Products />,
      },
    ]
   },
   {
    path:'/login',
    element:<Login/>
   }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
