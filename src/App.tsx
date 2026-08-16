import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Vets from './pages/Vets';
import Health from './pages/Health';
import Shop from './pages/Shop';
import Guides from './pages/Guides';
import Articles from './pages/Articles';
import ArticleDetail from './pages/ArticleDetail';
import Rehab from './pages/Rehab';

export default function App() {
  return (
    <BrowserRouter basename="/pawserve">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/vets" element={<Vets />} />
          <Route path="/health" element={<Health />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:id" element={<ArticleDetail />} />
          <Route path="/rehab" element={<Rehab />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}