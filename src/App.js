import { Route, Routes } from "react-router-dom";
import  VendorSignUp  from "./pages/VendorSignUp";

function App() {
  return (
    <Routes>
      <Route path="/vendor/signup" element={<VendorSignUp />} />
    </Routes>
  );
}

export default App;
