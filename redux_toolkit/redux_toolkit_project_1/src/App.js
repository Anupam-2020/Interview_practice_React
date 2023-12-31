import './App.css';
import Cart from './components/Cart';
import Products from './components/Products';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import RootLayout from './RootLayout';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Products />}></Route>
      <Route path='/cart' element={<Cart />}></Route>
    </Route>
  ));

  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
