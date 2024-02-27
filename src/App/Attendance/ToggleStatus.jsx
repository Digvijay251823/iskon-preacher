import React, { useEffect, useState } from "react";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { GoClockFill } from "react-icons/go";

function ToggleStatus({ status }) {
  const [isApproved, setIsApproved] = useState(false);
  useEffect(() => {
    if (status === "approved") {
      setIsApproved(true);
    }
  }, [status]);
  return (
    <div>
      {isApproved ? (
        <button>
          <IoCheckmarkDoneCircleSharp className="text-xl text-green-500" />
        </button>
      ) : (
        <button onClick={() => setIsApproved(true)}>
          <GoClockFill className="text-md text-yellow-500" />
        </button>
      )}
    </div>
  );
}

export default ToggleStatus;
