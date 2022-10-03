import { Outlet } from "react-router-dom";
import Header from "./pages/Header";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="px-4 lg:px-6 py-2.5 w-full">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;