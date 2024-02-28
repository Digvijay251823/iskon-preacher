import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Header from "./App/components/Header";
import { MyContextProvider, useMyContext } from "./store/context";
import Analytics from "./App/Analytics/Analytics";
import Counselees from "./App/Counselees/Counselees";
import Activities from "./App/Activities/Activities";
import Sessions from "./App/Sessions/Sessions";
import Attendance from "./App/Attendance/Attendance";
import Scanner from "./App/Scanner";
import { useEffect } from "react";
import RegisterCounselee from "./App/Counselees/Register";
import AttendanceCounselee from "./App/Counselees/AttendanceCounselee";
import RSVPCounselee from "./App/Counselees/RSVPCounselee";

function AllRoutes() {
  const { state, dispatch } = useMyContext();
  useEffect(() => {
    const theme = localStorage.getItem("THEME");
    if (theme) {
      dispatch({ type: theme });
    }
  }, [dispatch]);
  return (
    <div
      className={`min-h-screen ${
        state.Theme.Theme === "light"
          ? "bg-white text-gray-700"
          : "bg-stone-950 text-white"
      }`}
    >
      <Routes>
        <Route path="/counseler/analytics" element={<Analytics />} />
        <Route path="/counseler/counselees" element={<Counselees />} />
        <Route path="/counseler/activities" element={<Activities />} />
        <Route path="/counseler/sessions" element={<Sessions />} />
        <Route path="/counseler/attendance" element={<Attendance />} />
        <Route path="/register" element={<RegisterCounselee />} />
        <Route path="/attendance" element={<AttendanceCounselee />} />
        <Route path="/rsvp" element={<RSVPCounselee />} />
        <Route path="/counseler/scanner" element={<Scanner />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <MyContextProvider>
      <Router>
        <Header />
        <AllRoutes />
      </Router>
    </MyContextProvider>
  );
}

export default App;
