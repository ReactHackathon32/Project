import PageLanding from "./Pages/PageLanding";
import { Route, Routes } from "react-router-dom";
import PageLogin from "./Pages/PageLogin";
import PageRegister from "./Pages/PageRegister";
import PageDashboard from "./Pages/PageDashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PageLanding />} />
        <Route path="/login" element={<PageLogin />} />
        <Route path="/register" element={<PageRegister />} />
        <Route path="/dashboard" element={<PageDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
