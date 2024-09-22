import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Patients from "./Pages/Patients";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/patients" />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="*" element={<Navigate to="/matches" />} />
      </Routes>
    </BrowserRouter>
  );
}



export default App;
