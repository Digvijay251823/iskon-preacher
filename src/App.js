import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./Sidebar";
import Dashboard from "./App/Dashboard";
import TableCouncellor from "./App/councelor/Table";
import CounseleeTable from "./App/CounceleeTable";
import CounselorDetailsPage from "./App/DetailsPage";

function App() {
  return (
    <div className=" text-xl">
      <BrowserRouter>
        <div>
          <Sidebar />
        </div>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/counselor" element={<TableCouncellor />} />
          <Route path="/counselor/:id" element={<CounselorDetailsPage />} />
          <Route path="/counselee" element={<CounseleeTable />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
