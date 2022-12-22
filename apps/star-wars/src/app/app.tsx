import * as React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './app.scss';

const Films = React.lazy(() => import('films/Module'));

const Planets = React.lazy(() => import('planets/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
        <ul className='nav'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/films">Films</Link>
          </li>
          <li>
            <Link to="/planets">Planets</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<div>HOME</div>} />
          <Route path="/films" element={<Films />} />
          <Route path="/planets" element={<Planets />} />
        </Routes>
    </React.Suspense>
  );
}

export default App;
