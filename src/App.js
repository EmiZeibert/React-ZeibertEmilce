import "./App.css";
import Navbar from './components/navbar/NavBar.js';
import CardWidget from './components/cardWidget/CardWidget.js';
import ItemContainer from './components/itemContainer/ItemContainer.js';
import Footer from './components/footer/Footer.js';
import Body from './components/body/Body';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Body/>
      <CardWidget/>
      <ItemContainer/>
      <Footer/>
    </div>
  );
}

export default App;