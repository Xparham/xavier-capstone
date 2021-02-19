import logo from './logo.svg';
import './App.css';
import { MainNav } from './components/ui/MainNav';
import Footer from './components/ui/Footer';

function App() {
  return (
    <>
      <MainNav/>
      <div className="p-24">
        <h1 className="px-10 flex text-4xl">Welcome Back</h1>
      </div>
      <Footer/>
    </>
  );
}

export default App;
