import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Activities from './pages/Activities';
import StudentGuides from './pages/StudentGuides';
import LecturerGuides from './pages/LecturerGuides';
import About from './pages/About';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/student-guides" element={<StudentGuides />} />
        <Route path="/lecturer-guides" element={<LecturerGuides />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Layout>
  );
}

export default App;
