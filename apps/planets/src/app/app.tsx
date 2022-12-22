import { filmAtom } from '@store';
import { Ui } from '@ui';
import { useAtomValue } from 'jotai';
import { useEffect, useState } from 'react';
import './app.scss';

interface Planet {
  content: string;
  key: string;
}

export function App() {
  const [planets, setPlanets] = useState<Array<Planet>>([]);
  const films = useAtomValue(filmAtom);
  useEffect(() => {
    (async() => {
      const res = await fetch('https://swapi.dev/api/planets')
      const data = await res.json();
      setPlanets(data.results.map((result: any) => ({ key: result.url, content: result.name })))
    })();
  }, [])


  return (
    <div className="Planets">
      PLANETS
      <Ui data={planets} />
      FILMS
      <Ui data={films} />
    </div>
  );
}

export default App;
