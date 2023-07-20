import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { Navbar, SmallNavbar } from './components';

function App() {
  return (
    <BrowserRouter>
      <SmallNavbar />
      <Navbar />
      <Routes>
        <Route>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
