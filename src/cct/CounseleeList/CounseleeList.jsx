import React, { useEffect, useRef, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { useMyContext } from "../../store/context";
import { RxCross1 } from "react-icons/rx";
import { MdKeyboardArrowDown } from "react-icons/md";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Modal from "../../App/components/Modal";

const counseleesData = [
  {
    CounselerName: "Sujay Nimai Pr",
    firstName: "Alice",
    lastName: "Smith",
    contactNumber: "111-222-3333",
    whatsAppNumber: "111-222-3333",
    email: "alice.smith@example.com",
    address: "456 Elm St, City, Country",
    gender: "Female",
    created: "02-03-24",
    age: 28,
    counselor: "John Doe",
    numberOfSessionsAttended: 30,
  },
  {
    CounselerName: "Sujay Nimai Pr",
    firstName: "Bob",
    lastName: "Johnson",
    contactNumber: "444-555-6666",
    whatsAppNumber: "444-555-6666",
    email: "bob.johnson@example.com",
    address: "789 Oak St, City, Country",
    gender: "Male",
    created: "03-03-24",
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
    created: "03-03-24",
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
    created: "02-03-24",
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
    created: "02-03-24",
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
    created: "03-03-24",
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
    created: "02-03-24",
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
    created: "03-03-24",
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
    created: "02-03-24",
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
    created: "03-03-24",
    age: 32,
    counselor: "Jane Smith",
    numberOfSessionsAttended: 30,
  },
];

function CounseleeList() {
  const { state } = useMyContext();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center w-full lg:px-10 px-4 pt-10 justify-between">
        <h1 className="font-semibold text-2xl">Counselees</h1>
        <div>
          <button
            className={`flex items-center md:px-5 px-3 py-1.5 md:gap-5 gap-3 ${
              state.Theme.Theme === "light"
                ? "border-2 border-blue-300 rounded-xl shadow-md active:shadow-sm"
                : "bg-stone-800 border border-stone-700 rounded-xl transition-all duration-300 active:scale-95"
            }`}
            onClick={() => setIsOpen(true)}
          >
            <FiPlus />
            Counselee
          </button>
        </div>
      </div>
      <div
        className={` overflow-x-auto my-10 w-[90vw] border rounded-lg ${
          state.Theme.Theme === "light"
            ? "border-stone-200"
            : "border-stone-800"
        }`}
      >
        <table>
          <thead>
            <tr
              className={
                state.Theme.Theme === "light"
                  ? "border-b bg-gray-100 "
                  : "border-b border-b-stone-800 bg-stone-900"
              }
            >
              <th className="text-xs text-gray-500 py-3">COUNSELER</th>
              <th className="text-xs text-gray-500 py-3">NAME</th>
              <th className="text-xs text-gray-500 py-3">CONTACT NUMBER</th>
              <th className="text-xs text-gray-500 py-3">DATE OF JOINING</th>
              <th className="text-xs text-gray-500 py-3">EMAIL</th>
              <th className="text-xs text-gray-500 py-3">ADDRESS</th>
              <th className="text-xs text-gray-500 py-3">GENDER</th>
              <th className="text-xs text-gray-500 py-3">AGE</th>
              <th className="text-xs text-gray-500 py-3">
                NUMBER OF SESSIONS ATTENDED
              </th>
            </tr>
          </thead>
          <tbody>
            {counseleesData?.map((counselor, index) => (
              <tr
                key={index}
                className={
                  state.Theme.Theme === "light"
                    ? "border-b"
                    : "border-b border-stone-800"
                }
              >
                <td className=" whitespace-nowrap text-center py-5 px-4">
                  {counselor.CounselerName}
                </td>
                <td className=" whitespace-nowrap text-center py-5 px-4">
                  {`${counselor.firstName} ${counselor.lastName}`}
                </td>
                <td className=" whitespace-nowrap text-center py-5 px-4">
                  {counselor.contactNumber}
                </td>
                <td className=" whitespace-nowrap text-center py-5 px-4">
                  {counselor.created}
                </td>
                <td className=" whitespace-nowrap text-center py-5 px-4">
                  {counselor.email}
                </td>
                <td className=" whitespace-nowrap text-center py-5 px-4">
                  {counselor.address}
                </td>
                <td className=" whitespace-nowrap text-center py-5 px-4">
                  {counselor.gender}
                </td>
                <td className=" whitespace-nowrap text-center py-5 px-4">
                  {counselor.age}
                </td>
                <td className=" whitespace-nowrap text-center py-5 px-4">
                  {counselor.numberOfSessionsAttended}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <AddCounselee isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}

export default CounseleeList;

function AddCounselee({ isOpen, onClose }) {
  const { state } = useMyContext();
  const [isOpenSelection, setIsOpenSelection] = useState(false);

  const [FIRSTNAME, setFirstName] = useState("");
  const [LASTNAME, setLastName] = useState("");
  const [WANUMBER, setWaNumber] = useState("");
  const [CONTACTNUMBER, setContactNumber] = useState("");
  const [GENDER, setGender] = useState("");
  const [DOB, setDob] = useState("");

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <button
        className={`absolute right-10 flex items-center gap-2 border top-5 p-2 rounded-xl ${
          state.Theme.Theme === "light"
            ? "bg-white border-gray-300"
            : "bg-stone-700 border-stone-600"
        }`}
        onClick={onClose}
      >
        <RxCross1 />
        close
      </button>
      <div
        className={`flex items-center justify-center lg:gap-5 ${
          state.Theme.Theme === "light"
            ? "bg-white border-gray-300"
            : "bg-stone-900"
        } min-h-screen w-screen`}
      >
        <div className="lg:block hidden">
          <img
            src={require("../../assets/counselle.png")}
            height={400}
            className="h-[400px]"
            alt="addcounsellee"
          />
        </div>
        <div
          className={`rounded-3xl items-center md:p-5 p-3 ${
            state.Theme.Theme === "light" ? "bg-white" : "bg-stone-800"
          }`}
        >
          <div className="lg:w-[500px] w-[90vw]">
            <form action="" className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <label htmlFor="firstName">FIRST NAME</label>
                <input
                  type="text"
                  name="firstName"
                  className={`px-4 py-1.5 text-lg border rounded-xl ${
                    state.Theme.Theme === "light"
                      ? "bg-white border-gray-300"
                      : "bg-stone-900 border-stone-700"
                  }`}
                  placeholder="John"
                  value={FIRSTNAME}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="lastName">LAST NAME</label>
                <input
                  type="text"
                  name="lastName"
                  className={`px-4 py-1.5 text-lg border rounded-xl ${
                    state.Theme.Theme === "light"
                      ? "bg-white border-gray-300"
                      : "bg-stone-900 border-stone-700"
                  }`}
                  placeholder="Doe"
                  value={LASTNAME}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="waNumber">WHATSAPP NUMBER</label>
                <input
                  type="tel"
                  name="waNumber"
                  className={`px-4 py-1.5 text-lg border rounded-xl ${
                    state.Theme.Theme === "light"
                      ? "bg-white border-gray-300"
                      : "bg-stone-900 border-stone-700"
                  }`}
                  placeholder="7878909023"
                  value={WANUMBER}
                  onChange={(e) => setWaNumber(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="contactNumber">CONTACT NUMBER</label>
                <input
                  type="tel"
                  name="contactNumber"
                  className={`px-4 py-1.5 text-lg border rounded-xl ${
                    state.Theme.Theme === "light"
                      ? "bg-white border-gray-300"
                      : "bg-stone-900 border-stone-700"
                  }`}
                  placeholder="7878909023"
                  value={CONTACTNUMBER}
                  onChange={(e) => setContactNumber(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-between gap-5">
                <div className="flex flex-col gap-1">
                  <label htmlFor="contactNumber">GENDER</label>
                  <MenuIconAndDropDown
                    isSelectionOpen={isOpenSelection}
                    toggleSelection={(value) => setIsOpenSelection(value)}
                    setSelected={(value) => setGender(value)}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="contactNumber">DATE OF BIRTH</label>
                  <ReactDatePicker
                    onChange={(e) => setDob(e)}
                    value={DOB}
                    className={`px-4 py-1.5 text-lg border rounded-xl ${
                      state.Theme.Theme === "light"
                        ? "bg-white border-gray-300"
                        : "bg-stone-900 border-stone-700"
                    }`}
                    placeholderText="select date"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Modal>
  );
}

function MenuIconAndDropDown({
  isSelectionOpen,
  toggleSelection,
  setSelected,
}) {
  const { state } = useMyContext();
  const menuRef = useRef();
  const [selectedOption, setSelectedOption] = useState("");

  // Attach click outside listener
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        toggleSelection(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggleSelection]);
  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      <button
        type="button"
        className={`flex items-center justify-between border px-2 py-2 rounded-xl gap-5 ${
          state.Theme.Theme === "light"
            ? "border-gray-200"
            : "border-stone-800 bg-stone-900"
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
          className={`origin-top-left absolute left-0 mt-2 w-full rounded-lg shadow-lg ${
            state.Theme.Theme === "light"
              ? "bg-white border-gray-300"
              : "bg-stone-900 border border-stone-800"
          } ring-1 ring-black ring-opacity-5 focus:outline-none py-1 px-1`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <ul className="flex flex-col gap-3" role="none">
            <li
              onClick={() => {
                setSelectedOption("Male");
                setSelected("MALE");
                toggleSelection(false);
              }}
              className={`px-2 py-1.5 rounded-lg ${
                state.Theme.Theme === "light"
                  ? "hover:bg-gray-100"
                  : "hover:bg-stone-700"
              }`}
            >
              Male
            </li>
            <li
              onClick={() => {
                setSelectedOption("Female");
                setSelected("FEMALE");
                toggleSelection(false);
              }}
              className={`px-2 py-1.5 rounded-lg ${
                state.Theme.Theme === "light"
                  ? "hover:bg-gray-100"
                  : "hover:bg-stone-700"
              }`}
            >
              Female
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
