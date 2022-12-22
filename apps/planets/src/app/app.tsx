import { loadRemoteModule } from '@dynamic-mfe';
import { filmAtom } from '@store';
import { useAtomValue } from 'jotai';
import { lazy, useEffect, useState } from 'react';
import './app.scss';

const NewUI = lazy(() => loadRemoteModule('new-ui','./Ui'));

interface Planet {
  content: string;
  key: string;
}

export function App() {
  const [planets, setPlanets] = useState<Array<Planet>>([]);
  const films = useAtomValue(filmAtom);
  useEffect(() => {
    (async() => {
      const res = await fetch('https://swapi.py4e.com/api/planets')
      const data = await res.json();
      setPlanets(data.results.map((result: any) => ({ key: result.url, content: result.name })))
    })();
  }, [])


  return (
    <div className="Planets">
      PLANETS
      <NewUI data={planets} />
      FILMS
      <NewUI data={films} />
    </div>
  );
}

export default App;
