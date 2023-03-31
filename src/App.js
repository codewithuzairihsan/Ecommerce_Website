import {Container} from 'react-bootstrap';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'; 
import HomeScreen from './screen/HomeScreen';
import  ProductDetails  from './screen/ProductDetails';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
function App() {
  return (
    <Router>
    <Header/>
    <main className='my-3'>
    <Container>
      
     <Routes>
      <Route path='/' Component={HomeScreen} exact />
      <Route path="/product/:id" Component={ProductDetails}/>
     </Routes>
    </Container>
    </main>
    <Footer/>
    </Router>
  );
}

export default App;
