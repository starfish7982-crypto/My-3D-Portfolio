

import { Route, BrowserRouter as Router, Routes, Navigate } from 'react-router-dom';
import { Home, About, Design, Projects, Contact, BookHavenCaseStudy, CurieCaseStudy } from './pages';
import { Navbar } from './components/Navbar.jsx';

const App = () => {
  return (
    <main className="bg-slate-300/20 h-full">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/index.html" element={<Navigate to="/" replace />}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/design" element={<Design/>}/>
          <Route path="/design/book-haven" element={<BookHavenCaseStudy/>}/>
          <Route path="/design/curie" element={<CurieCaseStudy/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/work" element={<Navigate to="/design" replace />}/>
          <Route path="/work/book-haven" element={<Navigate to="/design/book-haven" replace />}/>
          <Route path="/work/curie" element={<Navigate to="/design/curie" replace />}/>
          <Route path="*" element={<Navigate to="/" replace />}/>
        </Routes>
      </Router>
    </main>
  )
}

export default App
