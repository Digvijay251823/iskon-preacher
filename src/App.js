import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
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
import Sadhana from "./App/Sadhana/Sadhana";
import ConfigureSadhana from "./App/Sadhana/SadhanaForm/ConfigureSadhana";
import SadhanaCounselee from "./App/Counselees/Sadhana";
import ActivityCounselee from "./App/Counselees/Activities";
import Login from "./App/Login";
import AnalyticsCCT from "./cct/Analytics";
import SevaCCT from "./cct/Activities/SevaCCT";
import AttendanceCCT from "./cct/Attendance/Attendance";
import SessionsCCT from "./cct/Sessions/Sessions";
import CounselersCCT from "./cct/Counselees/Counselers2";
import CounselerChangeForm from "./CounselerChange/CounselerChangeForm";
import CounseleeList from "./cct/CounseleeList/CounseleeList";
import AttendanceCounselorCCT from "./cct/CCTGiveAttendance";
import RsvpCCT from "./cct/CCTGiveRsvp";
import ScannerCCT from "./cct/Scanner";
import CounseleeMettingAttendance from "./App/CounseleeMeeting/CounseleeMeeting";
import Seva from "./cct/SevaCCT";
import ToastComponent from "./App/components/ToastComponent";

function AllRoutes() {
  const { state, dispatch } = useMyContext();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const authenticated = localStorage.getItem("AUTHENTICATED");
    if (authenticated === "true") {
      dispatch({ type: "LOGIN" });
    }
  }, [dispatch]);

  useEffect(() => {
    const prefersDarkMode =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "DARK"
        : "LIGHT";

    const storedTheme = localStorage.getItem("THEME");
    const initialTheme = storedTheme || prefersDarkMode;

    localStorage.setItem("THEME", initialTheme);
    dispatch({ type: initialTheme });
  }, [dispatch]);

  useEffect(() => {
    if (pathname === "/") {
      navigate("/counseler/analytics");
    }
  }, [pathname, navigate]);

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
        <Route path="/counseler/sadhana" element={<Sadhana />} />
        <Route path="/counseler/configure" element={<ConfigureSadhana />} />
        <Route path="/counseler/scan" element={<Scanner />} />
        <Route path="/cct/scan" element={<ScannerCCT />} />
        <Route path="/cct/analytics" element={<AnalyticsCCT />} />
        <Route path="/cct/counselers" element={<CounselersCCT />} />
        <Route path="/cct/seva" element={<SevaCCT />} />
        <Route path="/cct/sessions" element={<SessionsCCT />} />
        <Route path="/cct/attendance" element={<AttendanceCCT />} />
        <Route path="/cct/counselees" element={<CounseleeList />} />

        <Route path="/register" element={<RegisterCounselee />} />
        <Route
          path="/attendance/cbm/:cbmsessionId"
          element={<AttendanceCounselorCCT />}
        />
        <Route path="/rsvp/cbm/:cbmsessionId" element={<RsvpCCT />} />
        <Route path="/seva/cct" element={<Seva />} />
        <Route
          path="/attendance/:counselerId"
          element={<AttendanceCounselee />}
        />
        <Route path="/sadhana/:counselerId" element={<SadhanaCounselee />} />
        <Route path="/rsvp/:counselerId" element={<RSVPCounselee />} />
        <Route path="/activity/:counselerId" element={<ActivityCounselee />} />

        <Route path="/auth/signin" element={<Login />} />
        <Route path="/counselorchange" element={<CounselerChangeForm />} />
        <Route
          path="/counseleemeeting/:counselerId"
          element={<CounseleeMettingAttendance />}
        />
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
        <ToastComponent />
      </Router>
    </MyContextProvider>
  );
}

export default App;
