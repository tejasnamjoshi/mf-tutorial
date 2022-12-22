import { useEffect } from 'react';
import { useAtom } from 'jotai';
import './app.scss';
import { filmAtom } from '@store';
import { Ui } from '@ui';

export function App() {
  const [films, setFilms] = useAtom(filmAtom);

  useEffect(() => {
    (async() => {
      const res = await fetch('https://swapi.dev/api/films');
      const data = await res.json();

      setFilms(data.results.map((result: any) => ({ key: result.episode_id, content: result.title })));
    })()

  }, [setFilms])


  return (
    <div className="Films">
      FILMS
      <Ui data={films} />
    </div>
  );
}

export default App;
