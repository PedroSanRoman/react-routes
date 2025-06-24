import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import './app.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
