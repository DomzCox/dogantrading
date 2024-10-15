import Landing from "./shared/components/Landing";
import Topnav from "./shared/components/navigation/Topnav";
import Footer from "./shared/components/Footer";


function App() {
  return (
    <>
    
      <div className='container'>
        <Landing />
        <h1 className="text-5xl text-teal-900 font-bold text-center mt-28">
        Inspired by beginner traders just like you"
      </h1>

      
      <div className="text-center mt-16">
        <label className="mr-10 text-2xl">
          Get the free ebook
        </label>
        <input className="border-teal-100 center" type="text" placeholder="email@emailaddressdotdomain"/>
      </div>

      <Footer />
      </div>
    </>
  );
}

export default App;
