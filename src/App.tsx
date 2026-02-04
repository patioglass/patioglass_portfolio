import { useEffect } from 'react';
import { Routes, Route, useLocation, HashRouter } from 'react-router-dom';
import { Home } from './pages/Home';
import { Works } from './pages/Works';
{/*import { Bio } from './pages/Bio';*/}
import { Contact } from './pages/Contact';
import { Header } from './components/Header';

// ルート変更時にページトップへスクロール
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};



function App() {
  return (
    <HashRouter basename="/">
      <ScrollToTop />
      <div className="min-h-screen bg-gray-50">
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/works" element={<Works />} />
            {/*<Route path="/bio" element={<Bio />} />*/}
            <Route path="/contact" element={<Contact />} />
          </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
