import logo from './logo.svg';
import './App.css';
import { Routers } from './Routers';
import { Navbar } from './Navbar';
import { Counter } from './components/Counter';

function App() {
  return (
    <>
    <Navbar/>
    <Routers/>
    {/* <Counter/> */}
    </>
  );
}

export default App;
