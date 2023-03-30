import {Container} from 'react-bootstrap';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'; 
import HomeScreen from './screen/HomeScreen';
function App() {
  return (
    <>
    <Header/>
    <main className='my-3'>
    <Container>
      <h2>Accessories Mart</h2>
      <HomeScreen/>
    </Container>
    </main>
    <Footer/>
    </>
  );
}

export default App;
