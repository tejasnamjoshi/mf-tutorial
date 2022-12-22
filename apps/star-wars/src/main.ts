// import('./bootstrap');
import { setRemoteDefinitions } from '@dynamic-mfe';

fetch('/assets/module-federation.manifest.json')
  .then((res) => res.json())
  .then((definitions) => setRemoteDefinitions(definitions)) // <--sets the React modules
  .then(() => import('./bootstrap').catch((err) => console.error(err)));
