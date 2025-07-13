import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import SubjectPage from './pages/SubjectsPage/Subjects'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUpPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path='/subjects' element={<SubjectPage />} />

      </Routes>
    </Router>
  );
}

export default App;

