import { useState, useRef, useEffect } from "react";
import { useMyContext } from "../../store/context";
import { MdKeyboardArrowDown } from "react-icons/md";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function RegisterCounselee({ isOpen, onClose }) {
  const { state } = useMyContext();
  const [isOpenSelection, setIsOpenSelection] = useState(false);

  const [FIRSTNAME, setFirstName] = useState("");
  const [LASTNAME, setLastName] = useState("");
  const [WANUMBER, setWaNumber] = useState("");
  const [CONTACTNUMBER, setContactNumber] = useState("");
  const [GENDER, setGender] = useState("");
  const [DOB, setDob] = useState("");

  return (
    <div
      className={`flex flex-col items-center justify-center lg:gap-5 ${
        state.Theme.Theme === "light"
          ? "bg-white border-gray-300"
          : "bg-stone-900"
      } min-h-screen w-screen`}
    >
      <h1 className="text-xl mb-5 text-red-500 font-semibold">
        Looks like you are not register please register
      </h1>
      <div className="flex items-center">
        <div className="lg:block hidden">
          <img
            src={require("../../assets/counselle.png")}
            height={400}
            className="h-[400px]"
            alt="addcounsellee"
          />
        </div>
        <div
          className={`rounded-3xl items-center p-5 ${
            state.Theme.Theme === "light" ? "bg-white" : "bg-stone-800"
          }`}
        >
          <div className="lg:w-[500px]">
            <form action="" className="PX-5 flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <label className="font-semibold" htmlFor="firstName">
                  FIRST NAME
                </label>
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
                <label className="font-semibold" htmlFor="lastName">
                  LAST NAME
                </label>
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
                <label className="font-semibold" htmlFor="waNumber">
                  WHATSAPP NUMBER
                </label>
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
                <label className="font-semibold" htmlFor="contactNumber">
                  CONTACT NUMBER
                </label>
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
                  <label className="font-semibold" htmlFor="contactNumber">
                    GENDER
                  </label>
                  <MenuIconAndDropDown
                    isSelectionOpen={isOpenSelection}
                    toggleSelection={(value) => setIsOpenSelection(value)}
                    setSelected={(value) => setGender(value)}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-semibold" htmlFor="contactNumber">
                    DATE OF BIRTH
                  </label>
                  <ReactDatePicker
                    onChange={(e) => setDob(e)}
                    value={DOB}
                    className={`px-4 py-1.5 text-lg border rounded-xl flex items-center ${
                      state.Theme.Theme === "light"
                        ? "bg-white border-gray-300"
                        : "bg-stone-900 border-stone-700"
                    }`}
                    placeholderText="enter the date"
                    dateFormat={"dd-mm-yyyy"}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterCounselee;

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
