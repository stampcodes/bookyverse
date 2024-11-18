import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DescriptionPage from "./pages/DescriptionPage";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/description" element={<DescriptionPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
