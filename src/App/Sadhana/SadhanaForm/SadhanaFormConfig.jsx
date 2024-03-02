import { useLocation, useParams } from "react-router-dom";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useMyContext } from "../../../store/context";
import { useEffect, useRef, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export function NOR({ label, onChange, value }) {
  const { state } = useMyContext();
  const { pathname } = useLocation();
  const { counselerId } = useParams();

  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="font-semibold" htmlFor="NOR">
        {label}
        <i className="text-red-400">*</i>
      </label>
      <input
        disabled={pathname !== `/sadhana/${counselerId}`}
        type="number"
        name="NOR"
        onChange={onChange}
        placeholder="Number Of Rounds "
        className={`flex items-center justify-between border px-2 py-2 rounded-xl gap-5 w-full ${
          state.Theme.Theme === "light"
            ? "border-gray-300"
            : "border-stone-700 bg-stone-900"
        }`}
        required
      />
    </div>
  );
} //Number Of Rounds

export function EJRB8A({ label, onChange, value }) {
  const { state } = useMyContext();
  const { pathname } = useLocation();
  const { counselerId } = useParams();
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="font-semibold" htmlFor="EJRB8A">
        {label}
        <i className="text-red-400">*</i>
      </label>
      <input
        disabled={pathname !== `/sadhana/${counselerId}`}
        type="number"
        name="EJRB8A"
        onChange={onChange}
        placeholder="Early Japa rounds before 8 AM "
        className={`flex items-center justify-between border px-2 py-2 rounded-xl gap-5 w-full ${
          state.Theme.Theme === "light"
            ? "border-gray-300"
            : "border-stone-700 bg-stone-900"
        }`}
        required
      />
    </div>
  );
} //Early Japa rounds before 8 AM

export function AJRA8A({ label, onChange, value }) {
  const { state } = useMyContext();
  const { pathname } = useLocation();
  const { counselerId } = useParams();
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="font-semibold" htmlFor="AJRA8A">
        {label}
        <i className="text-red-400">*</i>
      </label>
      <input
        disabled={pathname !== `/sadhana/${counselerId}`}
        type="number"
        name="AJRA8A"
        onChange={onChange}
        placeholder="Early Japa rounds after 8 AM "
        className={`flex items-center justify-between border px-2 py-2 rounded-xl gap-5 w-full ${
          state.Theme.Theme === "light"
            ? "border-gray-300"
            : "border-stone-700 bg-stone-900"
        }`}
        required
      />
    </div>
  );
} //Early Japa rounds after 8 AM
export function F8RCT({ label, onChange, value }) {
  const [datetime, setDateTime] = useState("");
  const { state } = useMyContext();
  const { pathname } = useLocation();
  const { counselerId } = useParams();

  const handleChangeDate = (something) => {
    var day = something.getDate();
    var month = something.getMonth() + 1; // Adding 1 because getMonth() returns zero-based index
    var year = something.getFullYear();
    var hours = something.getHours();
    var minutes = something.getMinutes();
    var seconds = something.getSeconds();
    day = day < 10 ? "0" + day : day;
    month = month < 10 ? "0" + month : month;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    setDateTime(`${day}/${month}/${year} , ${hours}:${minutes}:${seconds}`);
    const event = {
      target: {
        name: "F8RCT",
        value: something.toISOString(),
      },
    };
    onChange(event);
  };
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="font-semibold" htmlFor="F8RCT">
        {label}
        <i className="text-red-400">*</i>
      </label>
      <div
        className={`border px-2 py-2 rounded-xl gap-5 w-full flex-1 ${
          state.Theme.Theme === "light"
            ? "border-gray-300"
            : "border-stone-700 bg-stone-900"
        }`}
      >
        <ReactDatePicker
          disabled={pathname !== `/sadhana/${counselerId}`}
          showTimeSelect
          name="F8RCT"
          value={datetime}
          onChange={handleChangeDate}
          wrapperClassName={`w-full`}
          placeholderText="First 8 rounds completed time "
          className={`w-full outline-none ${
            state.Theme.Theme === "light" ? "bg-white" : " bg-stone-900"
          }`} // Apply w-full to take full width
          required
        />
      </div>
    </div>
  );
} //First 8 rounds completed time
export function N8RCT({ label, onChange, value }) {
  const [datetime, setDateTime] = useState("");
  const { state } = useMyContext();
  const { pathname } = useLocation();
  const { counselerId } = useParams();

  const handleChangeDate = (something) => {
    var day = something.getDate();
    var month = something.getMonth() + 1; // Adding 1 because getMonth() returns zero-based index
    var year = something.getFullYear();
    var hours = something.getHours();
    var minutes = something.getMinutes();
    var seconds = something.getSeconds();
    day = day < 10 ? "0" + day : day;
    month = month < 10 ? "0" + month : month;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    setDateTime(`${day}/${month}/${year} , ${hours}:${minutes}:${seconds}`);
    const event = {
      target: {
        name: "N8RCT",
        value: something.toISOString(),
      },
    };
    onChange(event);
  };
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="font-semibold" htmlFor="N8RCT">
        {label}
        <i className="text-red-400">*</i>
      </label>
      <div
        className={`border px-2 py-2 rounded-xl gap-5 w-full flex-1 ${
          state.Theme.Theme === "light"
            ? "border-gray-300"
            : "border-stone-700 bg-stone-900"
        }`}
      >
        <ReactDatePicker
          disabled={pathname !== `/sadhana/${counselerId}`}
          showTimeSelect
          name="N8RCT"
          value={datetime}
          onChange={handleChangeDate}
          wrapperClassName={`w-full`}
          placeholderText="Next 8 rounds completed time "
          className={`w-full outline-none ${
            state.Theme.Theme === "light" ? "bg-white" : " bg-stone-900"
          }`} // Apply w-full to take full width
          required
        />
      </div>
    </div>
  );
} //Next 8 rounds completed time
export function WUT({ label, onChange, value }) {
  const [datetime, setDateTime] = useState("");
  const { state } = useMyContext();
  const { pathname } = useLocation();
  const { counselerId } = useParams();

  const handleChangeDate = (something) => {
    var day = something.getDate();
    var month = something.getMonth() + 1; // Adding 1 because getMonth() returns zero-based index
    var year = something.getFullYear();
    var hours = something.getHours();
    var minutes = something.getMinutes();
    var seconds = something.getSeconds();
    day = day < 10 ? "0" + day : day;
    month = month < 10 ? "0" + month : month;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    setDateTime(`${day}/${month}/${year} , ${hours}:${minutes}:${seconds}`);
    const event = {
      target: {
        name: "WUT",
        value: something.toISOString(),
      },
    };
    onChange(event);
  };
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="font-semibold" htmlFor="WUT">
        {label}
        <i className="text-red-400">*</i>
      </label>
      <div
        className={`border px-2 py-2 rounded-xl gap-5 w-full flex-1 ${
          state.Theme.Theme === "light"
            ? "border-gray-300"
            : "border-stone-700 bg-stone-900"
        }`}
      >
        <ReactDatePicker
          disabled={pathname !== `/sadhana/${counselerId}`}
          showTimeSelect
          name="WUT"
          value={datetime}
          onChange={handleChangeDate}
          wrapperClassName={`w-full`}
          placeholderText="Wake up time"
          className={`w-full outline-none ${
            state.Theme.Theme === "light" ? "bg-white" : " bg-stone-900"
          }`} // Apply w-full to take full width
          required
        />
      </div>
    </div>
  );
} //Wake up time
export function ST({ label, onChange, value }) {
  const [datetime, setDateTime] = useState("");
  const { state } = useMyContext();
  const { pathname } = useLocation();
  const { counselerId } = useParams();

  const handleChangeDate = (something) => {
    var day = something.getDate();
    var month = something.getMonth() + 1; // Adding 1 because getMonth() returns zero-based index
    var year = something.getFullYear();
    var hours = something.getHours();
    var minutes = something.getMinutes();
    var seconds = something.getSeconds();
    day = day < 10 ? "0" + day : day;
    month = month < 10 ? "0" + month : month;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    setDateTime(`${day}/${month}/${year} , ${hours}:${minutes}:${seconds}`);
    const event = {
      target: {
        name: "ST",
        value: something.toISOString(),
      },
    };

    onChange(event);
  };
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="font-semibold" htmlFor="ST">
        {label}
        <i className="text-red-400">*</i>
      </label>
      <div
        className={`border px-2 py-2 rounded-xl gap-5 w-full flex-1 ${
          state.Theme.Theme === "light"
            ? "border-gray-300"
            : "border-stone-700 bg-stone-900"
        }`}
      >
        <ReactDatePicker
          disabled={pathname !== `/sadhana/${counselerId}`}
          showTimeSelect
          name="ST"
          value={datetime}
          onChange={handleChangeDate}
          wrapperClassName={`w-full`}
          placeholderText="Sleep time"
          className={`w-full outline-none ${
            state.Theme.Theme === "light" ? "bg-white" : " bg-stone-900"
          }`} // Apply w-full to take full width
          required
        />
      </div>
    </div>
  );
} //Sleep time
export function PBR({ label, onChange, value }) {
  const { state } = useMyContext();
  const { pathname } = useLocation();
  const { counselerId } = useParams();

  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="font-semibold" htmlFor="PBR">
        {label}
        <i className="text-red-400">*</i>
      </label>

      <input
        disabled={pathname !== `/sadhana/${counselerId}`}
        type="number"
        name="PBR"
        onChange={onChange}
        placeholder="Prabhupada Book Reading Time"
        required
        className={`border px-2 py-2 rounded-xl gap-5 w-full flex-1 ${
          state.Theme.Theme === "light"
            ? "border-gray-300"
            : "border-stone-700 bg-stone-900"
        }`}
      />
    </div>
  );
} //Prabhupada Book Reading
export function BNR({ label, onChange, value }) {
  const { state } = useMyContext();
  const { pathname } = useLocation();
  const { counselerId } = useParams();
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="font-semibold" htmlFor="BNR">
        {label}
        <i className="text-red-400">*</i>
      </label>
      <input
        disabled={pathname !== `/sadhana/${counselerId}`}
        type="text"
        name="BNR"
        onChange={onChange}
        placeholder="Non Prabhupad Book reading Name"
        className={`flex items-center justify-between border px-2 py-2 rounded-xl gap-5 w-full ${
          state.Theme.Theme === "light"
            ? "border-gray-300"
            : "border-stone-700 bg-stone-900"
        }`}
        required
      />
    </div>
  );
} //Book Name Reading
export function PCH({ label, onChange, value }) {
  const { state } = useMyContext();
  const { pathname } = useLocation();
  const { counselerId } = useParams();
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="font-semibold" htmlFor="PCH">
        {label}
        <i className="text-red-400">*</i>
      </label>

      <input
        disabled={pathname !== `/sadhana/${counselerId}`}
        type="number"
        onChange={onChange}
        placeholder="Prabhupada Class Hearing Time"
        className={`border px-2 py-2 rounded-xl gap-5 w-full flex-1 ${
          state.Theme.Theme === "light"
            ? "border-gray-300"
            : "border-stone-700 bg-stone-900"
        }`}
        required
        min={0}
        max={24}
      />
    </div>
  );
} //Prabhupada Class Hearing
export function GCH({ label, onChange, value }) {
  const { state } = useMyContext();
  const { pathname } = useLocation();
  const { counselerId } = useParams();

  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="font-semibold" htmlFor="GCH">
        {label}
        <i className="text-red-400">*</i>
      </label>

      <input
        type="number"
        disabled={pathname !== `/sadhana/${counselerId}`}
        name="GCH"
        onChange={onChange}
        placeholder="Guru Class Hearing "
        className={`border px-2 py-2 rounded-xl gap-5 w-full flex-1 ${
          state.Theme.Theme === "light"
            ? "border-gray-300"
            : "border-stone-700 bg-stone-900"
        }`}
        required
        min={0}
        max={24}
      />
    </div>
  );
} //Guru Class Hearing
export function CH({ label, onChange, value }) {
  const { state } = useMyContext();
  const { pathname } = useLocation();
  const { counselerId } = useParams();

  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="font-semibold" htmlFor="CH">
        {label}
        <i className="text-red-400">*</i>
      </label>

      <input
        type="number"
        disabled={pathname !== `/sadhana/${counselerId}`}
        name="CH"
        onChange={onChange}
        placeholder="Class Hearing"
        className={`border px-2 py-2 rounded-xl gap-5 w-full flex-1 ${
          state.Theme.Theme === "light"
            ? "border-gray-300"
            : "border-stone-700 bg-stone-900"
        }`}
        required
        min={0}
        max={24}
      />
    </div>
  );
} //Class Hearing
export function S({ label, onChange, value }) {
  const { state } = useMyContext();
  const { pathname } = useLocation();
  const { counselerId } = useParams();
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="font-semibold" htmlFor="S">
        {label}
        <i className="text-red-400">*</i>
      </label>
      <input
        disabled={pathname !== `/sadhana/${counselerId}`}
        type="text"
        name="S"
        onChange={onChange}
        placeholder="Speaker Name if hearing from other than prabhupada "
        className={`flex items-center justify-between border px-2 py-2 rounded-xl gap-5 w-full ${
          state.Theme.Theme === "light"
            ? "border-gray-300"
            : "border-stone-700 bg-stone-900"
        }`}
        required
      />
    </div>
  );
} //Speaker
export function AA({ label, onChange, value }) {
  const [selectionOpen, setSelectionOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  const { state } = useMyContext();
  const { pathname } = useLocation();
  const { counselerId } = useParams();
  const menuRef = useRef();

  // Attach click outside listener
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setSelectionOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="font-semibold" htmlFor="AA">
        {label}
        <i className="text-red-400">*</i>
      </label>
      <div className="relative inline-block text-left" ref={menuRef}>
        <button
          disabled={pathname !== `/sadhana/${counselerId}`}
          className={`flex items-center justify-between border px-2 py-2 rounded-xl gap-5 w-full ${
            state.Theme.Theme === "light"
              ? "border-gray-300"
              : "border-stone-700 bg-stone-900"
          }`}
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={() => setSelectionOpen(!selectionOpen)}
        >
          {selectedItem.length > 0 ? `${selectedItem}` : "Select"}
          <MdOutlineKeyboardArrowDown size={16} />
        </button>
        {selectionOpen && (
          <div
            className={`origin-top-left absolute left-0 mt-2 w-full  rounded-2xl shadow-lg z-[500] ${
              state.Theme.Theme === "light"
                ? "bg-white"
                : "bg-stone-900 border border-stone-800"
            } ring-1 ring-black ring-opacity-5 focus:outline-none p-2`}
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <div className="flex flex-col gap-3" role="none">
              <p
                onClick={() => {
                  const e = {
                    target: {
                      name: "AA",
                      value: "YES",
                    },
                  };
                  onChange(e);
                  setSelectionOpen(false);
                }}
                className={`px-2 py-1.5 rounded-lg ${
                  state.Theme.Theme === "light"
                    ? "hover:bg-gray-100"
                    : "hover:bg-stone-700"
                }`}
              >
                Yes{" "}
              </p>
              <p
                onClick={() => {
                  const e = {
                    target: {
                      name: "AA",
                      value: "NO",
                    },
                  };
                  onChange(e);
                  setSelectionOpen(false);
                }}
                className={`px-2 py-1.5 rounded-lg ${
                  state.Theme.Theme === "light"
                    ? "hover:bg-gray-100"
                    : "hover:bg-stone-700"
                }`}
              >
                No
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} //Attended Arthi
export function MIU({ label, onChange, value }) {
  const { state } = useMyContext();
  const { pathname } = useLocation();
  const { counselerId } = useParams();
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="font-semibold" htmlFor="MIU">
        {label}
        <i className="text-red-400">*</i>
      </label>
      <div>
        <input
          type="number"
          disabled={pathname !== `/sadhana/${counselerId}`}
          name="MIU"
          onChange={onChange}
          placeholder="Mobile/Internet-Usage"
          className={`border px-2 py-2 rounded-xl gap-5 w-full flex-1 ${
            state.Theme.Theme === "light"
              ? "border-gray-300"
              : "border-stone-700 bg-stone-900"
          }`}
          required
          min={0}
          max={24}
        />
      </div>
    </div>
  );
} //Mobile/Internet-Usage

export const FormListItems = [
  {
    id: 1,
    type: "Number of Rounds ",
    valueType: "Number",
    functionName: "NOR",
  },
  {
    id: 2,
    type: "Early Japa rounds before 8 AM ",
    valueType: "Number",
    functionName: "EJRB8A",
  },
  {
    id: 3,
    type: "Early Japa rounds after 8 AM ",
    valueType: "Number",
    functionName: "AJRA8A",
  },
  {
    id: 4,
    type: "First 8 rounds completed time ",
    valueType: "Time",
    functionName: "F8RCT",
  },
  {
    id: 5,
    type: "Next 8 rounds completed time ",
    valueType: "Time",
    functionName: "N8RCT",
  },
  { id: 6, type: "Wake up time ", valueType: "Time", functionName: "WUT" },
  { id: 7, type: "Sleep time ", valueType: "Time", functionName: "ST" },
  {
    id: 8,
    type: "Prabhupada Book Reading ",
    valueType: "Number",
    functionName: "PBR",
  },
  { id: 9, type: "Book Name Reading", valueType: "Text", functionName: "BNR" },
  {
    id: 10,
    type: "Prabhupada Class Hearing ",
    valueType: "Time",
    functionName: "PCH",
  },
  {
    id: 11,
    type: "Guru Class Hearing ",
    valueType: "Time",
    functionName: "GCH",
  },
  { id: 12, type: "Class Hearing ", valueType: "Time", functionName: "CH" },
  { id: 13, type: "Speaker ", valueType: "Text", functionName: "S" },
  { id: 14, type: "Attended Arthi", valueType: "Boolean", functionName: "AA" },
  {
    id: 15,
    type: "Mobile/Internet-Usage",
    valueType: "Time",
    functionName: "MIU",
  },
];
