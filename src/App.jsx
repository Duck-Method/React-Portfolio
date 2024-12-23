import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <Header />
      <Body />
      <Footer />
      
    </Router>
  )
}

export default App;
