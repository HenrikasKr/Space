import './App.css';
import News from './components/News/News'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <News/>
      <Footer/>
    </div>
  );
}

export default App;
