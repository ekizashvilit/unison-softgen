import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { Navbar, SmallNavbar, Sidebar } from './components';

function App() {
  return (
    <BrowserRouter>
      <SmallNavbar />
      <Navbar />
      <Sidebar />
      <Routes>
        <Route>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
