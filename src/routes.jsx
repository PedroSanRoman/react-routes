import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/projects', element: <Projects /> },
      { path: '/resume', element: <Resume /> },
    ],
  },
]);

export default router;

