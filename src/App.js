import logo from './logo.svg';
import './App.css';
import { MainNav, Footer } from './components/ui/';


function App() {
  return (
    <>
      <MainNav/>
      <div className="flex justify-center items-center flex-col space-y-6 p-24">
        <h1 className="px-10 text-4xl">Welcome Back</h1>
        <p>Begin searching for the nearest food banks and pantries starting here.</p>
        <button className="border-2 p-2 bg-green-500">Search Now</button>

      </div>
      <Footer/>
    </>
  );
}

export default App;
