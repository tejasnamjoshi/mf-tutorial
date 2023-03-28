import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import ImageRenderer from '../components/image-renderer/image-renderer';
import './app.scss';

export function App() {
  return (
      <div className='app'>
        <Header />
        <main className='main-content'>
          <ImageRenderer />
        </main>
        <Footer />
      </div>
  );
}

export default App;
