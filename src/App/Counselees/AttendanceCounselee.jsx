import React, { useCallback, useEffect, useRef, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FiClock } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useMyContext } from "../../store/context";

const sessions = [
  {
    id: 1,
    scheduledSessionName: "Session 1",
    sessionName: "Pre Janmashtami Planning",
    description: "An introductory session to the field of counseling.",
    createdBy: "John Doe",
    durationInMinutes: 60,
    totalAttendance: 30,
  },
  {
    id: 2,
    scheduledSessionName: "Session 2",
    sessionName: "Cognitive Behavioral Therapy (CBT)",
    description: "Exploring the principles and techniques of CBT.",
    createdBy: "Jane Smith",
    durationInMinutes: 90,
    totalAttendance: 30,
  },
  {
    id: 3,
    scheduledSessionName: "Session 3",
    sessionName: "Group Therapy",
    description: "Understanding the dynamics and benefits of group therapy.",
    createdBy: "Alice Johnson",
    durationInMinutes: 120,
    totalAttendance: 30,
  },
  {
    id: 4,
    scheduledSessionName: "Session 4",
    sessionName: "Art Therapy",
    description:
      "Using artistic methods to explore emotions and improve well-being.",
    createdBy: "Michael Brown",
    durationInMinutes: 75,
    totalAttendance: 30,
  },
  {
    id: 5,
    scheduledSessionName: "Session 5",
    sessionName: "Family Counseling",
    description:
      "Addressing family issues and improving communication within families.",
    createdBy: "Sarah Adams",
    durationInMinutes: 90,
    totalAttendance: 30,
  },
  {
    id: 6,
    scheduledSessionName: "Session 6",
    sessionName: "Mindfulness Meditation",
    description:
      "Practicing mindfulness techniques for stress reduction and relaxation.",
    createdBy: "David Wilson",
    durationInMinutes: 60,
    totalAttendance: 30,
  },
];

const counseleesData = [
  {
    CounselerName: "Sujay Nimai Pr",
    firstName: "Ranganath",
    lastName: "Bandari",
    contactNumber: "9503158108",
    whatsAppNumber: "9503158108",
    email: "alice.smith@example.com",
    address: "456 Elm St, City, Country",
    gender: "Female",
    age: 28,
    counselor: "John Doe",
    numberOfSessionsAttended: 30,
  },
  {
    CounselerName: "Rasamrita Gaur Pr",
    firstName: "Saurabh",
    lastName: "Khatri",
    contactNumber: "0123456789",
    whatsAppNumber: "0123456789",
    email: "bob.johnson@example.com",
    address: "789 Oak St, City, Country",
    gender: "Male",
    age: 35,
    counselor: "Jane Smith",
    numberOfSessionsAttended: 30,
  },
  {
    CounselerName: "Sujay Nimai Pr",
    firstName: "Charlie",
    lastName: "Brown",
    contactNumber: "777-888-9999",
    whatsAppNumber: "777-888-9999",
    email: "charlie.brown@example.com",
    address: "123 Pine St, City, Country",
    gender: "Male",
    age: 42,
    counselor: "John Doe",
    numberOfSessionsAttended: 30,
  },
  {
    CounselerName: "Sujay Nimai Pr",
    firstName: "Diana",
    lastName: "Lee",
    contactNumber: "111-222-3333",
    whatsAppNumber: "111-222-3333",
    email: "diana.lee@example.com",
    address: "456 Maple St, City, Country",
    gender: "Female",
    age: 30,
    counselor: "Jane Smith",
    numberOfSessionsAttended: 30,
  },
  {
    CounselerName: "Sujay Nimai Pr",
    firstName: "Ella",
    lastName: "Garcia",
    contactNumber: "444-555-6666",
    whatsAppNumber: "444-555-6666",
    email: "ella.garcia@example.com",
    address: "789 Cedar St, City, Country",
    gender: "Female",
    age: 25,
    counselor: "John Doe",
    numberOfSessionsAttended: 30,
  },
  {
    CounselerName: "Sujay Nimai Pr",
    firstName: "Frank",
    lastName: "Davis",
    contactNumber: "777-888-9999",
    whatsAppNumber: "777-888-9999",
    email: "frank.davis@example.com",
    address: "123 Walnut St, City, Country",
    gender: "Male",
    age: 40,
    counselor: "Jane Smith",
    numberOfSessionsAttended: 30,
  },
  {
    CounselerName: "Sujay Nimai Pr",
    firstName: "Grace",
    lastName: "Taylor",
    contactNumber: "111-222-3333",
    whatsAppNumber: "111-222-3333",
    email: "grace.taylor@example.com",
    address: "456 Birch St, City, Country",
    gender: "Female",
    age: 33,
    counselor: "John Doe",
    numberOfSessionsAttended: 30,
  },
  {
    CounselerName: "Sujay Nimai Pr",
    firstName: "Henry",
    lastName: "Martinez",
    contactNumber: "444-555-6666",
    whatsAppNumber: "444-555-6666",
    email: "henry.martinez@example.com",
    address: "789 Pine St, City, Country",
    gender: "Male",
    age: 38,
    counselor: "Jane Smith",
    numberOfSessionsAttended: 30,
  },
  {
    CounselerName: "Sujay Nimai Pr",
    firstName: "Ivy",
    lastName: "Anderson",
    contactNumber: "777-888-9999",
    whatsAppNumber: "777-888-9999",
    email: "ivy.anderson@example.com",
    address: "123 Elm St, City, Country",
    gender: "Female",
    age: 27,
    counselor: "John Doe",
    numberOfSessionsAttended: 30,
  },
  {
    CounselerName: "Sujay Nimai Pr",
    firstName: "Jack",
    lastName: "Wilson",
    contactNumber: "111-222-3333",
    whatsAppNumber: "111-222-3333",
    email: "jack.wilson@example.com",
    address: "456 Oak St, City, Country",
    gender: "Male",
    age: 32,
    counselor: "Jane Smith",
    numberOfSessionsAttended: 30,
  },
];

const counselerData = [
  {
    CounselerName: "Sujay Nimai Pr",
    id: 1,
  },
  {
    CounselerName: "Rasamrita Gaur Pr",
    id: 2,
  },
];

function findCounselorByContactNumber(inputContactNumber) {
  // Find the counselor with matching contact number
  const foundCounselor = counseleesData.find(
    (counselor) => counselor.contactNumber === inputContactNumber
  );

  // If a counselor with matching contact number is found
  if (foundCounselor) {
    return foundCounselor;
  } else {
    return null;
  }
}

function Attendance() {
  const { state } = useMyContext();
  const [isSelectionOpenSelection, setisSelectionOpenSelection] =
    useState(false);
  const [fetchedData, setFetchData] = useState({});
  const [counselerError, setCounselerError] = useState(false);
  const [counseler, setCounseler] = useState({});

  useState(() => {
    const foundCounselor = counselerData.find((counselor) =>
      counselor.CounselerName === fetchedData.CounselerName ? counseler : null
    );
    if (foundCounselor) {
      setCounseler(foundCounselor);
    }
  }, []);

  useEffect(() => {
    if (
      Object.keys(fetchedData).length === 0 ||
      Object.keys(counseler).length === 0
    ) {
      return;
    }
    if (counseler.CounselerName !== fetchedData.CounselerName) {
      setCounselerError(true);
    }
  }, [fetchedData, counseler]);

  const navigate = useNavigate();
  const [FIRSTNAME, setFirstName] = useState("");
  const [LASTNAME, setLastName] = useState("");
  const [WANUMBER, setWaNumber] = useState("");
  const [CONTACTNUMBER, setContactNumber] = useState("");
  const [GENDER, setGender] = useState("");
  const [DOB, setDob] = useState("");

  const handleSubmitUser = (e) => {
    e.preventDefault();
    const user = findCounselorByContactNumber(CONTACTNUMBER);
    if (!user) {
      navigate("/register");
      return;
    } else {
      setFetchData(user);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen overflow-x-hidden">
      <h1 className="font-semibold text-red-500 text-xl mb-10">Attendance</h1>
      {counselerError && (
        <p className="text-yellow-500">
          Seems like your counseler is different please contact you counseler
          for correct link
        </p>
      )}
      <div className={`flex items-center justify-center lg:gap-5  w-screen`}>
        <div className="lg:block hidden">
          <img
            src={require("../../assets/counselle.png")}
            height={400}
            className="h-[400px]"
            alt="addcounsellee"
          />
        </div>
        <div
          className={`rounded-3xl flex flex-col items-center md:p-5 p-3 ${
            state.Theme.Theme === "light" ? "bg-white" : "bg-stone-800"
          }`}
        >
          <form onSubmit={handleSubmitUser} className="lg:w-[500px] w-[90vw]">
            <p className="font-semibold">YOUR PHONE NUMBER</p>
            <input
              type="text"
              className={`flex items-center justify-between border px-2 py-2 rounded-xl gap-5 w-full ${
                state.Theme.Theme === "light"
                  ? "border-gray-300"
                  : "border-stone-700 bg-stone-900"
              }`}
              value={CONTACTNUMBER}
              onChange={(e) => setContactNumber(e.target.value)}
              placeholder="7878909023"
            />
            <button
              className={`flex items-center w-full justify-center font-semibold border my-5 rounded-xl py-2 ${
                state.Theme.Theme === "light"
                  ? "border-blue-800 bg-blue-500 text-white"
                  : "border-stone-700 bg-blue-900"
              }`}
              type="submit"
            >
              SEARCH NUMBER
            </button>
          </form>
          <div
            className={`flex flex-col gap-2 items-center ${
              Object.keys(fetchedData).length > 0 ? "block" : "hidden"
            }`}
          >
            !welcome
            <p className="text-red-500 text-xl font-bold">
              {`${fetchedData.firstName} ${fetchedData.lastName}`}
            </p>
            <div className="pt-3 pb-3">
              <p className="text-red-500 text-xl font-bold">
                Counseler :{`${fetchedData.CounselerName}`}
              </p>
            </div>
          </div>
          <div
            className={`lg:w-[500px] w-[90vw] ${
              Object.keys(fetchedData).length > 0 ? "block" : "hidden"
            }`}
          >
            <div className="mb-5">
              <div className="flex items-center gap-3 text-xl font-bold">
                <FiClock />
                <h1 className="">SELECT A SESSION</h1>
              </div>
              <p className="text-gray-400">
                select a session below that you want to mark your attendance of
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              className="PX-5 flex flex-col gap-3"
            >
              <div className="flex gap-5 w-full pb-5">
                <label
                  htmlFor="ONLINE"
                  className="flex items-center gap-3 font-semibold"
                >
                  <input type="checkbox" id="ONLINE" />
                  ONLINE
                </label>
                <label
                  htmlFor="contactNumber"
                  className="flex items-center gap-3 font-semibold"
                >
                  <input type="checkbox" />
                  OFFLINE
                </label>
              </div>
              <div className="flex flex-col gap-1 w-full">
                <p className="font-semibold"> * LATEST SESSION</p>
                <label
                  htmlFor="contactNumber"
                  className="flex items-center gap-3 font-semibold"
                >
                  <input type="radio" />
                  {sessions[0].sessionName}
                </label>
              </div>
              <button
                className={`flex items-center w-full justify-center font-semibold border my-5 rounded-xl py-2 ${
                  state.Theme.Theme === "light"
                    ? "border-blue-800 bg-blue-500 text-white"
                    : "border-stone-700 bg-blue-900"
                }`}
                type="submit"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Attendance;

function MenuIconAndDropDown({
  isSelectionOpen,
  toggleSelection,
  setSelected,
}) {
  const { state } = useMyContext();
  const menuRef = useRef();
  const [selectedOption, setSelectedOption] = useState("");
  const [modalStyle, setModalStyle] = useState({
    transform: "scale(0.95)",
    opacity: 0,
  });
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isSelectionOpen) {
      // Open modal animation
      setTimeout(() => {
        setModalStyle({
          transform: "scale(1)",
          opacity: 1,
        });
      }, 50); // Delay the transition slightly for better visual effect
    } else {
      // Close modal animation
      setModalStyle({
        transform: "scale(0.95)",
        opacity: 0,
      });
      setTimeout(() => {
        setIsClosing(false);
      }, 3000); // Adjust this duration according to your transition duration
    }
  }, [isSelectionOpen]);

  const closeModal = useCallback(() => {
    setIsClosing(true);
    toggleSelection(false);
  }, [toggleSelection]);

  // Attach click outside listener
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeModal(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggleSelection, closeModal]);
  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      <button
        type="button"
        className={`flex items-center justify-between border px-2 py-2 rounded-xl gap-5 w-full ${
          state.Theme.Theme === "light"
            ? "border-gray-300"
            : "border-stone-700 bg-stone-900"
        }`}
        id="options-menu"
        aria-haspopup="true"
        aria-expanded="true"
        onClick={() => toggleSelection(!isSelectionOpen)}
      >
        {selectedOption === "" ? "Select" : selectedOption}
        <MdKeyboardArrowDown />
      </button>
      {isSelectionOpen && (
        <div
          className={`origin-top-left absolute bottom-0 mb-12 w-full rounded-lg shadow-lg z-[1000] ${
            state.Theme.Theme === "light"
              ? "bg-white border-gray-300"
              : "bg-stone-900 border border-stone-700"
          } ring-1 ring-black ring-opacity-5 focus:outline-none py-1 px-1`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
          style={{
            ...modalStyle,
            transition: "transform 0.3s ease-out, opacity 0.3s ease-out",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <ul className="flex flex-col gap-3" role="none">
            {sessions?.map((session, index) => (
              <li
                key={index}
                onClick={() => {
                  setSelectedOption(session.sessionName);
                  setSelected(session.sessionName);
                  toggleSelection(false);
                }}
                className={`px-2 py-1.5 rounded-lg ${
                  state.Theme.Theme === "light"
                    ? "hover:bg-gray-100"
                    : "hover:bg-stone-700"
                }`}
              >
                {session.sessionName}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
