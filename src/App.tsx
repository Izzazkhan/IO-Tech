import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Layout from './components/Layout';
import NotFound from './pages/NotFound';


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App