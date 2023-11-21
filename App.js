import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './Contact';
import ContactPage from './ContactPage';
import FAQpage from './FAQpage';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact-page" element={<ContactPage />} />
            <Route path="/faq-page" element={<FAQpage />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;