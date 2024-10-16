import Landing from "./shared/components/Landing";
import Topnav from "./shared/components/navigation/Topnav";
import Footer from "./shared/components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Shop from "./pages/Shop";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element = {<Topnav />}>
      <Route index element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="about" element={<About />} />
      <Route path="shop" element={<Shop />} />
    </Route>


  )
)

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
