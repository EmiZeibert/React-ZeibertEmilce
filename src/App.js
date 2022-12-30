import "./App.css";
import Navbar from './components/navbar/NavBar.js';
import CardWidget from './components/cardWidget/CardWidget.js';
import ItemContainer from './components/itemContainer/ItemContainer.js';
import Footer from './components/footer/Footer.js';



function App() {
  return (
    <div className="App">
     <Navbar/>
     <CardWidget/>
     <ItemContainer/>
     <Footer/>
    </div>
  );
}

export default App;