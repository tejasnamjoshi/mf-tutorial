import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import './app.scss';

export function App() {
  return (
      <div className='app'>
        <Header />
        <main className='main-content'>
          This is main
        </main>
        <Footer />
      </div>
  );
}

export default App;
