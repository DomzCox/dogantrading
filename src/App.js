
import Topnav from "./shared/components/navigation/Topnav";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Help from "./pages/Help";
import Faq from "./pages/Faq";
import Footer from "./shared/components/navigation/Footer";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element = {<Topnav />}>
      <Route index element={<Home />} />
        <Route path="help" element={<Help />} >
          <Route path="faq" element={<Faq />}/>
          <Route path="contact" element={<Contact />}/>
        </Route>
      <Route path="about" element={<About />} />
      <Route path="shop" element={<Shop />} />
      
    </Route>


  )
)

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
