import "./App.css";
import Navbar from './components/navbar/NavBar.js';
import CardWidget from './components/cardWidget/CardWidget.js';
import Footer from './components/footer/Footer.js';
import Body from './components/body/Body';





function App() {
  return (
    <div className="App">
      <Navbar />
      <Body />
      <CardWidget />
      <Footer />
    </div>
  );
}

export default App;