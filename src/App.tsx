import { useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useSetAtom, useAtomValue } from 'jotai';
import { Home } from './pages/Home';
import { Works } from './pages/Works';
{/*import { Bio } from './pages/Bio';*/}
import { Contact } from './pages/Contact';
import { Header } from './components/Header';
import { worksAtom, fetchWorks } from './store/atoms';

// アプリ起動時にデータを取得する初期化コンポーネント
const DataInitializer = ({ children }: { children: React.ReactNode }) => {
  const setWorks = useSetAtom(worksAtom);
  const works = useAtomValue(worksAtom);

  useEffect(() => {
    if (works.length === 0) {
      fetchWorks().then(data => setWorks(data)).catch(console.error);
    }
  }, [works.length, setWorks]);

  return <>{children}</>;
};

function App() {
  return (
    <Router>
      <DataInitializer>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/works" element={<Works />} />
            {/*<Route path="/bio" element={<Bio />} />*/}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </DataInitializer>
    </Router>
  );
}

export default App;
